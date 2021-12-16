import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

function Hero({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/test.glb");
  const [
    armColorMap,
    armMetalnessMap,
    armNormalMap,
    armRoughnessMap,
    bodyArmorColorMap,
    bodyArmorMetalnessMap,
    bodyArmorNormalMap,
    bodyArmorRoughnessMap,
    bodyArmorEmissiveMap,
    pantColorMap,
    pantMetalnessMap,
    pantNormalMap,
    pantRoughnessMap,
    beltColorMap,
    beltMetalnessMap,
    beltNormalMap,
    beltRoughnessMap,
    cloakColorMap,
    cloakMetalnessMap,
    cloakNormalMap,
    cloakRoughnessMap,
    helmetColorMap,
    helmetMetalnessMap,
    helmetNormalMap,
    helmetRoughnessMap,
    shoesColorMap,
    shoesMetalnessMap,
    shoesNormalMap,
    shoesRoughnessMap,
  ] = useTexture([
    "shaman/arm/arm_BaseColor.png",
    "shaman/arm/arm_Metallic.png",
    "shaman/arm/arm_Normal.png",
    "shaman/arm/arm_Roughness.png",
    "shaman/bodyarmor/bodyarmor_BaseColor.png",
    "shaman/bodyarmor/bodyarmor_Metallic.png",
    "shaman/bodyarmor/bodyarmor_Normal.png",
    "shaman/bodyarmor/bodyarmor_Roughness.png",
    "shaman/bodyarmor/bodyarmor_Emissive.png",
    "shaman/pant/pant_BaseColor.png",
    "shaman/pant/pant_Metallic.png",
    "shaman/pant/pant_Normal.png",
    "shaman/pant/pant_Roughness.png",
    "shaman/belt/belt_BaseColor.png",
    "shaman/belt/belt_Metallic.png",
    "shaman/belt/belt_Normal.png",
    "shaman/belt/belt_Roughness.png",
    "shaman/cloak/cloak_BaseColor.png",
    "shaman/cloak/cloak_Metallic.png",
    "shaman/cloak/cloak_Normal.png",
    "shaman/cloak/cloak_Roughness.png",
    "shaman/helmet/helmet_BaseColor.png",
    "shaman/helmet/helmet_Metallic.png",
    "shaman/helmet/helmet_Normal.png",
    "shaman/helmet/helmet_Roughness.png",
    "shaman/shoes/shoes_BaseColor.png",
    "shaman/shoes/shoes_Metallic.png",
    "shaman/shoes/shoes_Normal.png",
    "shaman/shoes/shoes_Roughness.png",
  ]);

  armColorMap.flipY = false;
  armMetalnessMap.flipY = false;
  armNormalMap.flipY = false;
  armRoughnessMap.flipY = false;
  bodyArmorColorMap.flipY = false;
  bodyArmorMetalnessMap.flipY = false;
  bodyArmorNormalMap.flipY = false;
  bodyArmorRoughnessMap.flipY = false;
  bodyArmorEmissiveMap.flipY = false;
  pantColorMap.flipY = false;
  pantMetalnessMap.flipY = false;
  pantNormalMap.flipY = false;
  pantRoughnessMap.flipY = false;
  beltColorMap.flipY = false;
  beltMetalnessMap.flipY = false;
  beltNormalMap.flipY = false;
  beltRoughnessMap.flipY = false;
  cloakColorMap.flipY = false;
  cloakMetalnessMap.flipY = false;
  cloakNormalMap.flipY = false;
  cloakRoughnessMap.flipY = false;
  helmetColorMap.flipY = false;
  helmetMetalnessMap.flipY = false;
  helmetNormalMap.flipY = false;
  helmetRoughnessMap.flipY = false;
  shoesColorMap.flipY = false;
  shoesMetalnessMap.flipY = false;
  shoesNormalMap.flipY = false;
  shoesRoughnessMap.flipY = false;

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[0, -0.65, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.015}
      >
        <mesh geometry={nodes.arm_mesh.geometry} material={materials.arm_mat}>
          <meshStandardMaterial
            metalness={1}
            roughness={0.1}
            map={armColorMap}
            normalMap={armNormalMap}
            roughnessMap={armRoughnessMap}
            metalnessMap={armMetalnessMap}
          />
        </mesh>
        <mesh
          geometry={nodes.Belt_mesh.geometry}
          material={materials["lambert2.001"]}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={beltColorMap}
            normalMap={beltNormalMap}
            roughnessMap={beltRoughnessMap}
            metalnessMap={beltMetalnessMap}
          />
        </mesh>
        {/* <mesh geometry={nodes.Mesh001.geometry} material={materials.lambert1}>
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={bodyArmorColorMap}
            normalMap={bodyArmorNormalMap}
            roughnessMap={bodyArmorRoughnessMap}
            metalnessMap={bodyArmorMetalnessMap}
          />
        </mesh> */}
        <mesh
          geometry={nodes.Mesh001_1.geometry}
          material={materials.bodyarmor_mat}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={bodyArmorColorMap}
            normalMap={bodyArmorNormalMap}
            roughnessMap={bodyArmorRoughnessMap}
            metalnessMap={bodyArmorMetalnessMap}
          />
        </mesh>
        <mesh geometry={nodes.Cloak_mesh.geometry} material={materials.cloak}>
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={cloakColorMap}
            normalMap={cloakNormalMap}
            roughnessMap={cloakRoughnessMap}
            metalnessMap={cloakMetalnessMap}
          />
        </mesh>
        <mesh
          geometry={nodes.Helmet_mesh.geometry}
          material={materials.helmet_mat}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={helmetColorMap}
            normalMap={helmetNormalMap}
            roughnessMap={helmetRoughnessMap}
            metalnessMap={helmetMetalnessMap}
          />
        </mesh>
        <mesh
          geometry={nodes.pant_mesh.geometry}
          material={materials.shoes_mat}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={pantColorMap}
            normalMap={pantNormalMap}
            roughnessMap={pantRoughnessMap}
            metalnessMap={pantMetalnessMap}
          />
        </mesh>
        <mesh
          geometry={nodes.Shoes_mesh.geometry}
          material={materials.lambert2}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={shoesColorMap}
            normalMap={shoesNormalMap}
            roughnessMap={shoesRoughnessMap}
            metalnessMap={shoesMetalnessMap}
          />
        </mesh>
      </group>
    </group>
  );
}

export default Hero;
