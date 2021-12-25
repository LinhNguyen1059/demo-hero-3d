import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Html,
  OrbitControls,
  useHelper,
  useProgress,
} from "@react-three/drei";

import Hero from "./Hero";
import HeroVFX from "./HeroVFX";
import King from "./components/king/King";
import KingVFX from "./components/king/KingVFX";
import KingMotion from "./components/king/KingMotion";

import "./App.css";
import { SpotLightHelper } from "three";

export default function App() {
  const [hero, setHero] = React.useState("KingVFX");
  const [colorBases, setColorBases] = React.useState({
    arm: 0,
    belt: 0,
    bodyarmor: 0,
    cloak: 0,
    helmet: 0,
    pant: 0,
    shoes: 0,
  });
  const canvasRef = React.useRef(null);
  const spotLight = React.useRef(null);

  const renderHeroComponent = () => {
    switch (hero) {
      case "King":
        return <King />;
      case "KingVFX":
        return <KingVFX />;
      case "KingMotion":
        return <KingMotion />;
      default:
        break;
    }
  };

  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress();
    return <Html center>Loading...</Html>;
  }

  function dataURLToBlob(data) {
    var binary = atob(data.split(",")[1]);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: "image/png" });
  }

  const onExportCanvas = () => {
    // let arr = [];
    // for (let i = 0; i <= 6; i++) {
    //   arr.push(Math.floor(Math.random() * 7));
    // }

    // setColorBases({
    //   arm: arr[0],
    //   belt: arr[1],
    //   bodyarmor: arr[2],
    //   cloak: arr[3],
    //   helmet: arr[4],
    //   pant: arr[5],
    //   shoes: arr[6],
    // });

    setTimeout(() => {
      const canvas = canvasRef.current;
      const dataURL = canvas.toDataURL();
      const link = document.createElement("a");
      link.download = "king.png";
      link.href = dataURL;
      link.click();
      // const file = dataURLToBlob(dataURL);
      // var url = window.URL.createObjectURL(file);
      // window.open(url);
    }, 1000);
  };

  // useHelper(spotLight, SpotLightHelper);

  return (
    <div style={{ height: "100vh" }}>
      <div className="canvas-container">
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ fov: 30 }}
          ref={canvasRef}
          gl={{ preserveDrawingBuffer: true }}
        >
          <ambientLight intensity={0.5} />
          <spotLight
            intensity={0.1}
            angle={0.1}
            penumbra={1}
            position={[10, 15, 10]}
            castShadow
          />
          <Suspense fallback={<Loader />}>
            {/* {renderHeroComponent()} */}
            <KingMotion colorBases={colorBases} />
            <Environment preset="sunset" />
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
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            enableZoom={false}
            enablePan={false}
            // autoRotate
            // rotateSpeed={1}
          />
        </Canvas>
      </div>
      {/* <button onClick={onExportCanvas}>export</button> */}
    </div>
  );
}
