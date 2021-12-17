import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Html,
  OrbitControls,
  useProgress,
} from "@react-three/drei";

import Hero from "./Hero";
import HeroVFX from "./HeroVFX";
import King from "./components/king/King";
import KingVFX from "./components/king/KingVFX";

import "./App.css";

export default function App() {
  const [hero, setHero] = React.useState("KingVFX");

  const renderHeroComponent = () => {
    switch (hero) {
      case "King":
        return <King />;
      case "KingVFX":
        return <KingVFX />;
      default:
        break;
    }
  };

  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress();
    return <Html center>Loading...</Html>;
  }

  return (
    <div style={{ height: "100vh" }}>
      <div className="button-container">
        <div className="button" onClick={() => setHero("King")}>
          King
        </div>
        <div className="button" onClick={() => setHero("KingVFX")}>
          King Pose
        </div>
      </div>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 30 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 60, -100]} intensity={0.5} />
        <pointLight position={[-50, 0, -50]} intensity={0.3} />
        <pointLight position={[-50, 0, 50]} intensity={0.3} />
        <pointLight position={[50, -50, 50]} intensity={0.3} />
        <pointLight position={[50, -50, 50]} intensity={0.3} />
        <pointLight position={[0, -10, 10]} intensity={0.3} />
        <pointLight position={[50, 0, 1]} intensity={0.3} />
        <spotLight
          castShadow
          intensity={1}
          angle={Math.PI / 10}
          position={[0, -60, 100]}
          penumbra={1}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <Suspense fallback={<Loader />}>
          {renderHeroComponent()}
          <Environment preset="sunset" background />
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -0.8, 0]}
            opacity={0.25}
            width={10}
            height={10}
            blur={1.5}
            far={0.8}
          />
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
