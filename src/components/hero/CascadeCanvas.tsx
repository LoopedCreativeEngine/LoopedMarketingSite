"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const BG = 0x0a0a0f;
const VIOLET = 0x4338ca;

function makeCircleTexture(): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = 64;
  c.height = 64;
  const ctx = c.getContext("2d");
  if (!ctx) {
    return new THREE.CanvasTexture(c);
  }
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.35, "rgba(255,255,255,0.35)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}

/**
 * Premium Three.js cascade network — used when no Spline scene URL is configured.
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
    const dpr = window.devicePixelRatio || 1;
    const cappedDpr = Math.min(dpr, 2);
    const skipEveryOtherFrame = dpr > 2;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(BG);
    scene.fog = new THREE.FogExp2(BG, 0.008);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 400);
    camera.position.set(0, 8, 120);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
    renderer.setPixelRatio(cappedDpr);
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0x3a3a55, 0.55);
    scene.add(ambient);
    const dir = new THREE.DirectionalLight(0xc7d2fe, 0.85);
    dir.position.set(20, 40, 30);
    scene.add(dir);
    const fill = new THREE.DirectionalLight(0x4338ca, 0.25);
    fill.position.set(-30, -10, -20);
    scene.add(fill);

    const HUB_COUNT = 8;
    const SMALL_COUNT = 37;

    const hubGeom = new THREE.IcosahedronGeometry(4, 1);
    const smallGeom = new THREE.IcosahedronGeometry(1.5, 0);

    const hubMeshes: THREE.Mesh[] = [];
    const hubMaterials: THREE.MeshStandardMaterial[] = [];
    const hubBasePhase: number[] = [];

    for (let i = 0; i < HUB_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i + 1) / HUB_COUNT);
      const theta = ((Math.PI * (3 - Math.sqrt(5))) * i) % (Math.PI * 2);
      const r = 32;
      const mat = new THREE.MeshStandardMaterial({
        color: VIOLET,
        emissive: VIOLET,
        emissiveIntensity: 0.35,
        metalness: 0.35,
        roughness: 0.4,
      });
      const mesh = new THREE.Mesh(hubGeom, mat);
      mesh.position.set(r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi) * 0.85, r * Math.sin(phi) * Math.sin(theta));
      hubMaterials.push(mat);
      hubBasePhase.push(i * 0.4);
      scene.add(mesh);
      hubMeshes.push(mesh);
    }

    const smallMeshes: THREE.Mesh[] = [];
    const smallVel: THREE.Vector3[] = [];
    for (let i = 0; i < SMALL_COUNT; i++) {
      const mat = new THREE.MeshStandardMaterial({
        color: VIOLET,
        emissive: VIOLET,
        emissiveIntensity: 0.12,
        metalness: 0.25,
        roughness: 0.55,
      });
      const mesh = new THREE.Mesh(smallGeom, mat);
      mesh.position.set((Math.random() - 0.5) * 70, (Math.random() - 0.5) * 45, (Math.random() - 0.5) * 70);
      smallVel.push(new THREE.Vector3((Math.random() - 0.5) * 0.08, (Math.random() - 0.5) * 0.08, (Math.random() - 0.5) * 0.08));
      scene.add(mesh);
      smallMeshes.push(mesh);
    }

    type HubSmallPair = { hub: number; small: number };
    const hubSmallPairs: HubSmallPair[] = [];
    for (let h = 0; h < HUB_COUNT; h++) {
      const dists = smallMeshes.map((sm, si) => ({
        si,
        d: hubMeshes[h]!.position.distanceToSquared(sm.position),
      }));
      dists.sort((a, b) => a.d - b.d);
      for (let k = 0; k < 4; k++) {
        hubSmallPairs.push({ hub: h, small: dists[k]!.si });
      }
    }

    const hubHubPairs: [number, number][] = [];
    for (let a = 0; a < HUB_COUNT; a++) {
      for (let b = a + 1; b < HUB_COUNT; b++) {
        hubHubPairs.push([a, b]);
      }
    }

    const hubSmallPositions = new Float32Array(hubSmallPairs.length * 2 * 3);
    const hubSmallGeom = new THREE.BufferGeometry();
    hubSmallGeom.setAttribute("position", new THREE.BufferAttribute(hubSmallPositions, 3));
    const hubSmallMat = new THREE.LineBasicMaterial({
      color: 0xa5b4fc,
      transparent: true,
      opacity: 0.22,
    });
    const hubSmallLines = new THREE.LineSegments(hubSmallGeom, hubSmallMat);
    scene.add(hubSmallLines);

    const hubHubPositions = new Float32Array(hubHubPairs.length * 2 * 3);
    const hubHubGeom = new THREE.BufferGeometry();
    hubHubGeom.setAttribute("position", new THREE.BufferAttribute(hubHubPositions, 3));
    const hubHubMat = new THREE.LineBasicMaterial({
      color: 0xc4b5fd,
      transparent: true,
      opacity: 0.45,
    });
    const hubHubLines = new THREE.LineSegments(hubHubGeom, hubHubMat);
    scene.add(hubHubLines);

    const sphereWireGeom = new THREE.SphereGeometry(80, 24, 24);
    const sphereWireMat = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.03,
      depthWrite: false,
    });
    const sphereWire = new THREE.Mesh(sphereWireGeom, sphereWireMat);
    scene.add(sphereWire);

    const particleCount = 200;
    const pGeom = new THREE.BufferGeometry();
    const pPos = new Float32Array(particleCount * 3);
    const pVel: THREE.Vector3[] = [];
    for (let i = 0; i < particleCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 160;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 100;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 160;
      pVel.push(new THREE.Vector3((Math.random() - 0.5) * 0.04, (Math.random() - 0.5) * 0.04, (Math.random() - 0.5) * 0.04));
    }
    pGeom.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const circleTex = makeCircleTexture();
    const pMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.8,
      transparent: true,
      opacity: 0.3,
      depthWrite: false,
      map: circleTex,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(pGeom, pMat);
    scene.add(particles);

    const clock = new THREE.Clock();
    let t = 0;
    let raf = 0;
    let frame = 0;
    let visible = document.visibilityState === "visible";

    const mouse = new THREE.Vector2(0, 0);
    const targetLook = new THREE.Vector3(0, 0, 0);
    const smoothLook = new THREE.Vector3(0, 0, 0);

    const onMouseMove = (e: MouseEvent): void => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const onVis = (): void => {
      visible = document.visibilityState === "visible";
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("visibilitychange", onVis);

    const updateHubSmallLines = (activeHub: number, pulse: number): void => {
      let idx = 0;
      for (let e = 0; e < hubSmallPairs.length; e++) {
        const { hub, small } = hubSmallPairs[e]!;
        const ha = hubMeshes[hub]!.position;
        const sb = smallMeshes[small]!.position;
        hubSmallPositions[idx++] = ha.x;
        hubSmallPositions[idx++] = ha.y;
        hubSmallPositions[idx++] = ha.z;
        hubSmallPositions[idx++] = sb.x;
        hubSmallPositions[idx++] = sb.y;
        hubSmallPositions[idx++] = sb.z;
      }
      hubSmallMat.opacity = Math.min(0.78, 0.18 + pulse * 0.42);
      (hubSmallGeom.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    };

    const updateHubHubLines = (): void => {
      let idx = 0;
      for (const [a, b] of hubHubPairs) {
        const pa = hubMeshes[a]!.position;
        const pb = hubMeshes[b]!.position;
        hubHubPositions[idx++] = pa.x;
        hubHubPositions[idx++] = pa.y;
        hubHubPositions[idx++] = pa.z;
        hubHubPositions[idx++] = pb.x;
        hubHubPositions[idx++] = pb.y;
        hubHubPositions[idx++] = pb.z;
      }
      (hubHubGeom.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    };

    const animate = (): void => {
      raf = requestAnimationFrame(animate);
      if (!visible) return;

      frame++;
      if (skipEveryOtherFrame && frame % 2 === 0) return;

      const dt = Math.min(clock.getDelta(), 0.05);
      t += dt;

      const activeHub = Math.floor((t / 2.2) % HUB_COUNT);
      const pulse = 0.5 + 0.5 * Math.sin(t * ((Math.PI * 2) / 3) + hubBasePhase[activeHub]!);

      const hubPulse = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin((t * Math.PI * 2) / 3));
      hubMaterials.forEach((mat, i) => {
        if (i === activeHub) {
          mat.emissiveIntensity = hubPulse;
        } else {
          mat.emissiveIntensity = 0.28 + 0.08 * Math.sin(t * 1.5 + hubBasePhase[i]!);
        }
      });

      const bounds = 42;
      for (let i = 0; i < SMALL_COUNT; i++) {
        const mesh = smallMeshes[i]!;
        const v = smallVel[i]!;
        mesh.position.addScaledVector(v, dt * 10);
        for (const ax of ["x", "y", "z"] as const) {
          if (Math.abs(mesh.position[ax]) > bounds) {
            v[ax] *= -1;
            mesh.position[ax] = THREE.MathUtils.clamp(mesh.position[ax], -bounds, bounds);
          }
        }
      }

      for (let i = 0; i < HUB_COUNT; i++) {
        const mesh = hubMeshes[i]!;
        mesh.rotation.x += dt * 0.08;
        mesh.rotation.y += dt * 0.1;
      }

      targetLook.set(mouse.x * 10, mouse.y * 8, 0);
      smoothLook.lerp(targetLook, 0.04);

      const orbitT = t * ((Math.PI * 2) / 90);
      const dist = 120;
      const bob = Math.sin(t * ((Math.PI * 2) / 8)) * 5;
      camera.position.x = Math.sin(orbitT) * dist;
      camera.position.z = Math.cos(orbitT) * dist;
      camera.position.y = 8 + bob;
      camera.lookAt(smoothLook);

      sphereWire.rotation.y = t * 0.015;
      particles.rotation.y = t * 0.008;

      const pArr = pGeom.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        pArr[i * 3] += pVel[i]!.x * dt * 6;
        pArr[i * 3 + 1] += pVel[i]!.y * dt * 6;
        pArr[i * 3 + 2] += pVel[i]!.z * dt * 6;
        if (Math.abs(pArr[i * 3]) > 90) pVel[i]!.x *= -1;
        if (Math.abs(pArr[i * 3 + 1]) > 55) pVel[i]!.y *= -1;
        if (Math.abs(pArr[i * 3 + 2]) > 90) pVel[i]!.z *= -1;
      }
      (pGeom.attributes.position as THREE.BufferAttribute).needsUpdate = true;

      const cascadePulse = 0.5 + 0.5 * Math.sin(t * 2.4 + activeHub);
      updateHubSmallLines(activeHub, cascadePulse);
      updateHubHubLines();
      hubHubMat.opacity = 0.28 + cascadePulse * 0.22;

      renderer.render(scene, camera);
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
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("visibilitychange", onVis);
      hubGeom.dispose();
      smallGeom.dispose();
      hubMaterials.forEach((m) => m.dispose());
      smallMeshes.forEach((m) => (m.material as THREE.Material).dispose());
      hubSmallGeom.dispose();
      hubSmallMat.dispose();
      hubHubGeom.dispose();
      hubHubMat.dispose();
      sphereWireGeom.dispose();
      sphereWireMat.dispose();
      pGeom.dispose();
      pMat.dispose();
      circleTex.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 h-full min-h-[100dvh] w-full" aria-hidden />;
}
