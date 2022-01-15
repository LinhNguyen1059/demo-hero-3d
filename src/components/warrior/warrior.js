import React, { useRef } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";

export default function WarriorPose({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/warrior/warrior.glb");
  const { actions } = useAnimations(animations, group);

  const [
    armColorMap,
    armMetalnessMap,
    armNormalMap,
    armRoughnessMap,

    // bodyArmorColorMap,
    // bodyArmorMetalnessMap,
    // bodyArmorNormalMap,
    // bodyArmorRoughnessMap,

    // pantColorMap,
    // pantMetalnessMap,
    // pantNormalMap,
    // pantRoughnessMap,

    cloakColorMap,
    cloakMetalnessMap,
    cloakNormalMap,
    cloakRoughnessMap,

    // helmetColorMap,
    // helmetMetalnessMap,
    // helmetNormalMap,
    // helmetRoughnessMap,

    // beltColorMap,
    // beltMetalnessMap,
    // beltNormalMap,
    // beltRoughnessMap,

    // shoesColorMap,
    // shoesMetalnessMap,
    // shoesNormalMap,
    // shoesRoughnessMap,

    // bodyColorMap,
    // bodyMetalnessMap,
    // bodyNormalMap,
    // bodyRoughnessMap,
  ] = useTexture([
    "warrior/arm/Arm_BaseColor.png",
    "warrior/arm/Arm_Metallic.png",
    "warrior/arm/Arm_Normal.png",
    "warrior/arm/Arm_Roughness.png",

    // "warrior/bodyarmor/bodyarmor_BaseColor.png",
    // "warrior/bodyarmor/bodyarmor_Metallic.png",
    // "warrior/bodyarmor/bodyarmor_Normal.png",
    // "warrior/bodyarmor/bodyarmor_Roughness.png",

    // "warrior/pant/pant_BaseColor.png",
    // "warrior/pant/pant_Metallic.png",
    // "warrior/pant/pant_Normal_OpenGL.png",
    // "warrior/pant/pant_Roughness.png",

    "warrior/cloak/cloak_BaseColor.png",
    "warrior/cloak/cloak_Metallic.png",
    "warrior/cloak/cloak_Normal.png",
    "warrior/cloak/cloak_Roughness.png",

    // "warrior/helmet/helmet_BaseColor.png",
    // "warrior/helmet/helmet_Metallic.png",
    // "warrior/helmet/helmet_Normal.png",
    // "warrior/helmet/helmet_Roughness.png",

    // "warrior/belt/belt_BaseColor.png",
    // "warrior/belt/belt_Metallic.png",
    // "warrior/belt/belt_Normal.png",
    // "warrior/belt/belt_Roughness.png",

    // "warrior/shoes/shoes_BaseColor.png",
    // "warrior/shoes/shoes_Metallic.png",
    // "warrior/shoes/shoes_Normal_OpenGL.png",
    // "warrior/shoes/shoes_Roughness.png",

    // "warrior/body/body_BaseColor.png",
    // "warrior/body/body_Metallic.png",
    // "warrior/body/body_Normal.png",
    // "warrior/body/body_Roughness.png",
  ]);

  armColorMap.flipY = false;
  armMetalnessMap.flipY = false;
  armNormalMap.flipY = false;
  armRoughnessMap.flipY = false;
  cloakColorMap.flipY = false;
  cloakMetalnessMap.flipY = false;
  cloakNormalMap.flipY = false;
  cloakRoughnessMap.flipY = false;

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.arm_Mesh.geometry} material={materials.arm_mat}>
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={armColorMap}
            normalMap={armNormalMap}
            roughnessMap={armRoughnessMap}
            metalnessMap={armMetalnessMap}
          />
        </mesh>
        <mesh
          geometry={nodes.belt_Mesh.geometry}
          material={nodes.belt_Mesh.material}
        ></mesh>
        <mesh
          geometry={nodes.Mesh014.geometry}
          material={materials["lambert2.001"]}
        />
        <mesh
          geometry={nodes.Mesh014_1.geometry}
          material={nodes.Mesh014_1.material}
        />
        <mesh
          geometry={nodes.bodyarmor_Mesh.geometry}
          material={materials.bodyarmor_mat}
        />
        <mesh
          geometry={nodes.cloak_Mesh.geometry}
          material={materials["cloak_mat.001"]}
        >
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
          geometry={nodes.helmet_Mesh.geometry}
          material={materials.helmet_mat}
          position={[0, 0, 0.5]}
        />
        <mesh
          geometry={nodes.pant_Mesh.geometry}
          material={materials.pant_mat}
        />
        <mesh
          geometry={nodes.shoes_Mesh.geometry}
          material={materials.shoes_mat}
        />
      </group>
    </group>
  );
}
