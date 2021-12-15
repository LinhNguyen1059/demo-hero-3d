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
    "arm/arm_BaseColor.png",
    "arm/arm_Metallic.png",
    "arm/arm_Normal.png",
    "arm/arm_Roughness.png",
    "bodyarmor/bodyarmor_BaseColor.png",
    "bodyarmor/bodyarmor_Metallic.png",
    "bodyarmor/bodyarmor_Normal.png",
    "bodyarmor/bodyarmor_Roughness.png",
    "bodyarmor/bodyarmor_Emissive.png",
    "pant/pant_BaseColor.png",
    "pant/pant_Metallic.png",
    "pant/pant_Normal.png",
    "pant/pant_Roughness.png",
    "belt/belt_BaseColor.png",
    "belt/belt_Metallic.png",
    "belt/belt_Normal.png",
    "belt/belt_Roughness.png",
    "cloak/cloak_BaseColor.png",
    "cloak/cloak_Metallic.png",
    "cloak/cloak_Normal.png",
    "cloak/cloak_Roughness.png",
    "helmet/helmet_BaseColor.png",
    "helmet/helmet_Metallic.png",
    "helmet/helmet_Normal.png",
    "helmet/helmet_Roughness.png",
    "shoes/shoes_BaseColor.png",
    "shoes/shoes_Metallic.png",
    "shoes/shoes_Normal.png",
    "shoes/shoes_Roughness.png",
  ]);

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
