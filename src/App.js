import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import Hero from "./Hero";
import HeroVFX from "./HeroVFX";

export default function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas dpr={[1, 2]} camera={{ fov: 30 }}>
        <ambientLight intensity={0.2} />
        <spotLight />
        <Suspense fallback={null}>
          <Hero />
          <Environment preset="city" />
          <ContactShadows />
        </Suspense>
        <OrbitControls
        // minPolarAngle={Math.PI / 2}
        // maxPolarAngle={Math.PI / 2}
        // enableZoom={false}
        // enablePan={false}
        // autoRotate
        />
      </Canvas>
    </div>
  );
}
