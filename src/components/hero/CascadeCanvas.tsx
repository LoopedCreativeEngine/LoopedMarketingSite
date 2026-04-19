"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const BG = 0x0a0a0f;
const VIOLET = 0x4338ca;

/**
 * WebGL cascade-style network — fallback when no Spline scene URL is configured.
 */
export function CascadeCanvas(): React.ReactElement {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      mount.style.background = `#${BG.toString(16).padStart(6, "0")}`;
      return;
    }

    const width = mount.clientWidth;
    const height = mount.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(BG);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 200);
    camera.position.set(0, 2, 14);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0x404060, 0.6);
    scene.add(ambient);
    const dir = new THREE.DirectionalLight(0xa5b4fc, 0.8);
    dir.position.set(4, 10, 6);
    scene.add(dir);

    const nodeCount = 28;
    const sphereGeom = new THREE.SphereGeometry(0.22, 16, 16);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: VIOLET,
      emissive: VIOLET,
      emissiveIntensity: 0.45,
      metalness: 0.2,
      roughness: 0.45,
    });

    const nodes: THREE.Mesh[] = [];
    const velocities: THREE.Vector3[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const mesh = new THREE.Mesh(sphereGeom, sphereMat.clone());
      mesh.position.set(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 10,
      );
      velocities.push(
        new THREE.Vector3((Math.random() - 0.5) * 0.12, (Math.random() - 0.5) * 0.12, (Math.random() - 0.5) * 0.12),
      );
      scene.add(mesh);
      nodes.push(mesh);
    }

    const linePairs: [number, number][] = [];
    for (let i = 0; i < nodeCount; i++) {
      linePairs.push([i, (i + 1) % nodeCount]);
      if (i % 4 === 0) {
        linePairs.push([i, (i + 7) % nodeCount]);
      }
    }

    const lineGeom = new THREE.BufferGeometry();
    const linePositions = new Float32Array(linePairs.length * 2 * 3);
    lineGeom.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.35,
    });
    const lines = new THREE.LineSegments(lineGeom, lineMat);
    scene.add(lines);

    const particleCount = 400;
    const pGeom = new THREE.BufferGeometry();
    const pPos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 40;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 24;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    pGeom.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x6366f1,
      size: 0.04,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
    });
    const particles = new THREE.Points(pGeom, pMat);
    scene.add(particles);

    let raf = 0;
    const clock = new THREE.Clock();
    let t = 0;

    const updateLines = (time: number): void => {
      let idx = 0;
      for (let e = 0; e < linePairs.length; e++) {
        const [a, b] = linePairs[e]!;
        const pa = nodes[a]!.position;
        const pb = nodes[b]!.position;
        const pulse = 0.2 + 0.55 * (0.5 + 0.5 * Math.sin(time * 1.1 + e * 0.35));
        lineMat.opacity = Math.min(0.55, 0.12 + pulse * 0.35);
        linePositions[idx++] = pa.x;
        linePositions[idx++] = pa.y;
        linePositions[idx++] = pa.z;
        linePositions[idx++] = pb.x;
        linePositions[idx++] = pb.y;
        linePositions[idx++] = pb.z;
      }
      (lineGeom.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    };

    const animate = (): void => {
      const dt = Math.min(clock.getDelta(), 0.05);
      t += dt;
      const bounds = 9;

      for (let i = 0; i < nodeCount; i++) {
        const mesh = nodes[i]!;
        const v = velocities[i]!;
        mesh.position.addScaledVector(v, dt * 8);
        for (const ax of ["x", "y", "z"] as const) {
          if (Math.abs(mesh.position[ax]) > bounds) {
            v[ax] *= -1;
            mesh.position[ax] = THREE.MathUtils.clamp(mesh.position[ax], -bounds, bounds);
          }
        }
        v.addScalar((Math.random() - 0.5) * 0.002);
        v.clampScalar(-0.25, 0.25);
      }

      const orbit = t * 0.12;
      camera.position.x = Math.sin(orbit) * 16;
      camera.position.z = Math.cos(orbit) * 16;
      camera.position.y = 2 + Math.sin(t * 0.08) * 0.6;
      camera.lookAt(0, 0, 0);

      particles.rotation.y = t * 0.02;
      updateLines(t);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const onResize = (): void => {
      const w = mount.clientWidth;
      const h = mount.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      sphereGeom.dispose();
      sphereMat.dispose();
      lineGeom.dispose();
      lineMat.dispose();
      pGeom.dispose();
      pMat.dispose();
      nodes.forEach((m) => {
        (m.material as THREE.Material).dispose();
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 h-full min-h-[100dvh] w-full" aria-hidden />;
}
