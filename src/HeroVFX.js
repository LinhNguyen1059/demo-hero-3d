import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

function HeroVFX({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/hero.glb");

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
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <group position={[0, 0, 100]}>
          <primitive object={nodes.Brine_Shaman_rig_v1World} />
          <skinnedMesh
            geometry={nodes.Brine_Shaman_rig_v1Arm_mesh.geometry}
            material={materials["Brine_Shaman_rig_v1:lambert2.001"]}
            skeleton={nodes.Brine_Shaman_rig_v1Arm_mesh.skeleton}
          >
            <meshStandardMaterial
              metalness={1}
              roughness={1}
              map={armColorMap}
              normalMap={armNormalMap}
              roughnessMap={armRoughnessMap}
              metalnessMap={armMetalnessMap}
            />
          </skinnedMesh>
          <skinnedMesh
            geometry={nodes.Brine_Shaman_rig_v1Belt_mesh.geometry}
            material={materials["Brine_Shaman_rig_v1:lambert2.002"]}
            skeleton={nodes.Brine_Shaman_rig_v1Belt_mesh.skeleton}
          >
            <meshStandardMaterial
              metalness={1}
              roughness={1}
              map={beltColorMap}
              normalMap={beltNormalMap}
              roughnessMap={beltRoughnessMap}
              metalnessMap={beltMetalnessMap}
            />
          </skinnedMesh>
          <skinnedMesh
            geometry={nodes.Brine_Shaman_rig_v1Bodyarmor_mesh.geometry}
            material={materials["Brine_Shaman_rig_v1:lambert2.003"]}
            skeleton={nodes.Brine_Shaman_rig_v1Bodyarmor_mesh.skeleton}
          >
            <meshStandardMaterial
              metalness={1}
              roughness={1}
              map={bodyArmorColorMap}
              normalMap={bodyArmorNormalMap}
              roughnessMap={bodyArmorRoughnessMap}
              metalnessMap={bodyArmorMetalnessMap}
            />
          </skinnedMesh>
          <skinnedMesh
            geometry={nodes.Brine_Shaman_rig_v1Cloak_mesh.geometry}
            material={materials["Brine_Shaman_rig_v1:lambert2.004"]}
            skeleton={nodes.Brine_Shaman_rig_v1Cloak_mesh.skeleton}
          >
            <meshStandardMaterial
              metalness={1}
              roughness={1}
              map={cloakColorMap}
              normalMap={cloakNormalMap}
              roughnessMap={cloakRoughnessMap}
              metalnessMap={cloakMetalnessMap}
            />
          </skinnedMesh>
          <skinnedMesh
            geometry={nodes.Brine_Shaman_rig_v1Helmet_mesh.geometry}
            material={materials["Brine_Shaman_rig_v1:lambert2.005"]}
            skeleton={nodes.Brine_Shaman_rig_v1Helmet_mesh.skeleton}
          >
            <meshStandardMaterial
              metalness={1}
              roughness={1}
              map={helmetColorMap}
              normalMap={helmetNormalMap}
              roughnessMap={helmetRoughnessMap}
              metalnessMap={helmetMetalnessMap}
            />
          </skinnedMesh>
          <skinnedMesh
            geometry={nodes.Brine_Shaman_rig_v1Pants_mesh.geometry}
            material={materials["Brine_Shaman_rig_v1:lambert2.006"]}
            skeleton={nodes.Brine_Shaman_rig_v1Pants_mesh.skeleton}
          >
            <meshStandardMaterial
              metalness={1}
              roughness={1}
              map={pantColorMap}
              normalMap={pantNormalMap}
              roughnessMap={pantRoughnessMap}
              metalnessMap={pantMetalnessMap}
            />
          </skinnedMesh>
          <skinnedMesh
            geometry={nodes.Brine_Shaman_rig_v1Shoes_mesh.geometry}
            material={materials["Brine_Shaman_rig_v1:lambert2"]}
            skeleton={nodes.Brine_Shaman_rig_v1Shoes_mesh.skeleton}
          >
            <meshStandardMaterial
              metalness={1}
              roughness={1}
              map={shoesColorMap}
              normalMap={shoesNormalMap}
              roughnessMap={shoesRoughnessMap}
              metalnessMap={shoesMetalnessMap}
            />
          </skinnedMesh>
        </group>
      </group>
    </group>
  );
}

export default HeroVFX;