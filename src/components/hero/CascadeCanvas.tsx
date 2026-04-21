"use client";

import { Line } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function SceneGraph(): React.ReactElement {
  const groupRef = useRef<THREE.Group>(null);
  const trailRef = useRef<THREE.Points>(null);
  const orbit = useRef(0);

  const nodes = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        return new THREE.Vector3(Math.cos(angle) * 22, Math.sin(i * 1.3) * 8, Math.sin(angle) * 22);
      }),
    [],
  );

  const connections = useMemo(() => {
    const lines: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < nodes.length; i++) {
      lines.push([nodes[i]!, nodes[(i + 1) % nodes.length]!]);
      if (i % 2 === 0) lines.push([nodes[i]!, nodes[(i + 3) % nodes.length]!]);
    }
    return lines;
  }, [nodes]);

  const trailGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const trail = new Float32Array(connections.length * 3);
    geometry.setAttribute("position", new THREE.BufferAttribute(trail, 3));
    return geometry;
  }, [connections.length]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.08;
    }
    orbit.current += delta * 0.3;
    const geometry = trailRef.current?.geometry as THREE.BufferGeometry | undefined;
    if (!geometry) return;
    const positions = geometry.attributes.position.array as Float32Array;
    connections.forEach(([a, b], i) => {
      const t = (Math.sin(orbit.current + i * 0.8) + 1) / 2;
      positions[i * 3] = THREE.MathUtils.lerp(a.x, b.x, t);
      positions[i * 3 + 1] = THREE.MathUtils.lerp(a.y, b.y, t);
      positions[i * 3 + 2] = THREE.MathUtils.lerp(a.z, b.z, t);
    });
    geometry.attributes.position.needsUpdate = true;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[18, 16, 10]} intensity={0.7} color="#c7d2fe" />
      {nodes.map((point, idx) => (
        <mesh key={idx} position={[point.x, point.y, point.z]}>
          <sphereGeometry args={[1.1, 24, 24]} />
          <meshStandardMaterial color="#4338ca" emissive="#4338ca" emissiveIntensity={0.5} />
        </mesh>
      ))}
      {connections.map(([a, b], idx) => (
        <Line key={idx} points={[a, b]} color="#7c73ff" lineWidth={0.8} transparent opacity={0.45} />
      ))}
      <points ref={trailRef} geometry={trailGeometry}>
        <pointsMaterial color="#ffffff" size={0.4} transparent opacity={0.7} depthWrite={false} />
      </points>
    </group>
  );
}

export function CascadeCanvas(): React.ReactElement {
  return (
    <div className="absolute inset-0 h-full min-h-[100dvh] w-full" aria-hidden>
      <Canvas camera={{ position: [0, 4, 42], fov: 42 }} dpr={[1, 1.8]}>
        <color attach="background" args={["#0a0a0f"]} />
        <fog attach="fog" args={["#0a0a0f", 40, 88]} />
        <SceneGraph />
      </Canvas>
    </div>
  );
}
