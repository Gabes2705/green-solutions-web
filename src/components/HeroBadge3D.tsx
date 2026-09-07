"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const ICON_SRC = "/images/logo-icon.png";
const ICON_RATIO = 675 / 768; // width / height of the source cutout

export default function HeroBadge3D() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    if (!stage || !canvas) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0, 6.4);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 3));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    function fitRenderer() {
      if (!stage) return;
      const rect = stage.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) || 400;
      renderer.setSize(size, size, false);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    }

    const group = new THREE.Group();
    scene.add(group);

    const halfWUnit = Math.cos(Math.PI / 6); // 0.8660254
    const sx = ICON_RATIO / halfWUnit;
    const SCALE = 1.55;

    // slim badge — two faces set slightly apart so the logo reads with a
    // touch of real depth as it turns, short of a fully extruded body
    const EDGE = 0.05;

    const loader = new THREE.TextureLoader();
    const maxAniso = renderer.capabilities.getMaxAnisotropy();

    // the back face reuses the same image, mirrored, so the logo is fetched
    // and decoded once instead of twice
    const backIconTex = new THREE.Texture();
    backIconTex.colorSpace = THREE.SRGBColorSpace;
    backIconTex.anisotropy = maxAniso;
    backIconTex.wrapS = THREE.RepeatWrapping;
    backIconTex.repeat.x = -1;

    const iconTex = loader.load(ICON_SRC, (tex) => {
      backIconTex.image = tex.image;
      backIconTex.needsUpdate = true;
    });
    iconTex.colorSpace = THREE.SRGBColorSpace;
    iconTex.anisotropy = maxAniso;

    const faceW = 2 * halfWUnit * sx * SCALE;
    const faceH = 2 * SCALE;
    const faceGeo = new THREE.PlaneGeometry(faceW, faceH);
    const faceMat = new THREE.MeshStandardMaterial({
      map: iconTex,
      transparent: true,
      roughness: 0.38,
      metalness: 0.12,
      side: THREE.DoubleSide,
    });
    const face = new THREE.Mesh(faceGeo, faceMat);
    face.position.z = EDGE;
    group.add(face);

    // back face — the exact same logo, mirrored so it reads correctly
    // (not reversed) when the badge turns, with a touch of emissive glow
    // so it stays legible regardless of light angle
    const backMat = new THREE.MeshStandardMaterial({
      map: backIconTex,
      transparent: true,
      roughness: 0.32,
      metalness: 0.1,
      emissive: 0xffffff,
      emissiveMap: backIconTex,
      emissiveIntensity: 0.6,
      side: THREE.DoubleSide,
    });
    const backFace = new THREE.Mesh(faceGeo.clone(), backMat);
    backFace.rotation.y = Math.PI;
    backFace.position.z = -EDGE;
    group.add(backFace);

    // lighting
    scene.add(new THREE.AmbientLight(0x0b2a1c, 0.7));

    const key = new THREE.DirectionalLight(0xeef7ee, 0.7);
    key.position.set(2.4, 3.2, 4.5);
    scene.add(key);

    const rimTeal = new THREE.PointLight(0x2fd0c9, 1.6, 12);
    rimTeal.position.set(-3.2, -1.0, 2.4);
    scene.add(rimTeal);

    const rimLeaf = new THREE.PointLight(0xbfe85a, 1.3, 12);
    rimLeaf.position.set(3.0, 2.2, 1.6);
    scene.add(rimLeaf);

    const fill = new THREE.PointLight(0xffffff, 0.32, 14);
    fill.position.set(0, -3, 3);
    scene.add(fill);

    let targetX = 0,
      targetY = 0,
      curX = 0,
      curY = 0;
    // start slightly turned so the badge reads as a rotating 3D object
    // from the very first frame, not a flat picture
    let autoRot = 0.35;
    group.rotation.y = autoRot;

    function onPointerMove(e: PointerEvent) {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      targetY = nx;
      targetX = ny;
    }
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("resize", fitRenderer);
    fitRenderer();

    const startTime = performance.now();
    let raf = 0;

    function animate() {
      raf = requestAnimationFrame(animate);
      const t = (performance.now() - startTime) / 1000;

      if (!reduceMotion) {
        autoRot += 0.0035;
        curX += (targetX - curX) * 0.06;
        curY += (targetY - curY) * 0.06;
        group.rotation.y = autoRot + curY * 0.16;
        group.rotation.x = -curX * 0.2;
        group.position.y = Math.sin(t * 0.7) * 0.05 * SCALE;
      } else {
        group.rotation.y = 0.32;
        group.rotation.x = -0.1;
      }

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", fitRenderer);
      faceGeo.dispose();
      faceMat.dispose();
      backMat.dispose();
      iconTex.dispose();
      backIconTex.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="badge-stage" ref={stageRef}>
      <canvas ref={canvasRef} />
    </div>
  );
}
