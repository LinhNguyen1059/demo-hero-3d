import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

function King({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./king/king.glb");

  const [
    armColorMap,
    armMetalnessMap,
    armNormalMap,
    armRoughnessMap,
    armAOMap,
    armDisplacementMap,
    bodyArmorColorMap,
    bodyArmorMetalnessMap,
    bodyArmorNormalMap,
    bodyArmorRoughnessMap,
    bodyArmorAOMap,
    bodyArmorDisplacementMap,
    pantColorMap,
    pantMetalnessMap,
    pantNormalMap,
    pantRoughnessMap,
    pantAOMap,
    pantDisplacementMap,
    cloakColorMap,
    cloakMetalnessMap,
    cloakNormalMap,
    cloakRoughnessMap,
    cloakAOMap,
    cloakDisplacementMap,
    helmetColorMap,
    helmetMetalnessMap,
    helmetNormalMap,
    helmetRoughnessMap,
    helmetAOMap,
    helmetDisplacementMap,
    beltColorMap,
    beltMetalnessMap,
    beltNormalMap,
    beltRoughnessMap,
    beltAOMap,
    beltDisplacementMap,
    shoesColorMap,
    shoesMetalnessMap,
    shoesNormalMap,
    shoesRoughnessMap,
    shoesAOMap,
    shoesDisplacementMap,
    bodyColorMap,
    bodyMetalnessMap,
    bodyNormalMap,
    bodyRoughnessMap,
    bodyAOMap,
    bodyDisplacementMap,
  ] = useTexture([
    "king/arm/arm_Base_Color.png",
    "king/arm/arm_Metallic.png",
    "king/arm/arm_Normal_OpenGL.png",
    "king/arm/arm_Roughness.png",
    "king/arm/arm_Mixed_AO.png",
    "king/arm/arm_Height.png",
    "king/bodyarmor/bodyarmor_Base_Color.png",
    "king/bodyarmor/bodyarmor_Metallic.png",
    "king/bodyarmor/bodyarmor_Normal_OpenGL.png",
    "king/bodyarmor/bodyarmor_Roughness.png",
    "king/bodyarmor/bodyarmor_Mixed_AO.png",
    "king/bodyarmor/bodyarmor_Height.png",
    "king/pant/pant_Base_Color.png",
    "king/pant/pant_Metallic.png",
    "king/pant/pant_Normal_OpenGL.png",
    "king/pant/pant_Roughness.png",
    "king/pant/pant_Mixed_AO.png",
    "king/pant/pant_Height.png",
    "king/cloak/cloak_Base_Color.png",
    "king/cloak/cloak_Metallic.png",
    "king/cloak/cloak_Normal_OpenGL.png",
    "king/cloak/cloak_Roughness.png",
    "king/cloak/cloak_Mixed_AO.png",
    "king/cloak/cloak_Height.png",
    "king/helmet/helmet_Base_Color.png",
    "king/helmet/helmet_Metallic.png",
    "king/helmet/helmet_Normal_OpenGL.png",
    "king/helmet/helmet_Roughness.png",
    "king/helmet/helmet_Mixed_AO.png",
    "king/helmet/helmet_Height.png",
    "king/belt/belt_Base_Color.png",
    "king/belt/belt_Metallic.png",
    "king/belt/belt_Normal_OpenGL.png",
    "king/belt/belt_Roughness.png",
    "king/belt/belt_Mixed_AO.png",
    "king/belt/belt_Height.png",
    "king/shoes/shoes_Base_Color.png",
    "king/shoes/shoes_Metallic.png",
    "king/shoes/shoes_Normal_OpenGL.png",
    "king/shoes/shoes_Roughness.png",
    "king/shoes/shoes_Mixed_AO.png",
    "king/shoes/shoes_Height.png",
    "king/body/body_Base_Color.png",
    "king/body/body_Metallic.png",
    "king/body/body_Normal_OpenGL.png",
    "king/body/body_Roughness.png",
    "king/body/body_Mixed_AO.png",
    "king/body/body_Height.png",
  ]);

  armColorMap.flipY = false;
  armMetalnessMap.flipY = false;
  armNormalMap.flipY = false;
  armRoughnessMap.flipY = false;
  armAOMap.flipY = false;
  armDisplacementMap.flipY = false;
  bodyArmorColorMap.flipY = false;
  bodyArmorMetalnessMap.flipY = false;
  bodyArmorNormalMap.flipY = false;
  bodyArmorRoughnessMap.flipY = false;
  bodyArmorAOMap.flipY = false;
  bodyArmorDisplacementMap.flipY = false;
  cloakColorMap.flipY = false;
  cloakMetalnessMap.flipY = false;
  cloakNormalMap.flipY = false;
  cloakRoughnessMap.flipY = false;
  cloakAOMap.flipY = false;
  cloakDisplacementMap.flipY = false;
  helmetColorMap.flipY = false;
  helmetMetalnessMap.flipY = false;
  helmetNormalMap.flipY = false;
  helmetRoughnessMap.flipY = false;
  helmetAOMap.flipY = false;
  helmetDisplacementMap.flipY = false;
  beltColorMap.flipY = false;
  beltMetalnessMap.flipY = false;
  beltNormalMap.flipY = false;
  beltRoughnessMap.flipY = false;
  beltAOMap.flipY = false;
  beltDisplacementMap.flipY = false;
  shoesColorMap.flipY = false;
  shoesMetalnessMap.flipY = false;
  shoesNormalMap.flipY = false;
  shoesRoughnessMap.flipY = false;
  shoesAOMap.flipY = false;
  shoesDisplacementMap.flipY = false;
  bodyColorMap.flipY = false;
  bodyMetalnessMap.flipY = false;
  bodyNormalMap.flipY = false;
  bodyRoughnessMap.flipY = false;
  bodyAOMap.flipY = false;
  bodyDisplacementMap.flipY = false;

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[0, -0.8, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.015}
      >
        <mesh
          geometry={nodes.arm_mesh.geometry}
          material={materials["arm.001"]}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={armColorMap}
            normalMap={armNormalMap}
            roughnessMap={armRoughnessMap}
            metalnessMap={armMetalnessMap}
            aoMap={armAOMap}
            // displacementMap={armDisplacementMap}
          />
        </mesh>
        <mesh
          geometry={nodes.belt_mesh.geometry}
          material={materials["belt.001"]}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={beltColorMap}
            normalMap={beltNormalMap}
            roughnessMap={beltRoughnessMap}
            metalnessMap={beltMetalnessMap}
            aoMap={beltAOMap}
            // displacementMap={beltDisplacementMap}
          />
        </mesh>
        <mesh
          geometry={nodes.Mesh030.geometry}
          material={materials["lambert2.001"]}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={bodyColorMap}
            normalMap={bodyNormalMap}
            roughnessMap={bodyRoughnessMap}
            metalnessMap={bodyMetalnessMap}
            aoMap={bodyAOMap}
            // displacementMap={bodyDisplacementMap}
          />
        </mesh>
        <mesh
          geometry={nodes.Mesh030_1.geometry}
          material={materials["body.001"]}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={bodyColorMap}
            normalMap={bodyNormalMap}
            roughnessMap={bodyRoughnessMap}
            metalnessMap={bodyMetalnessMap}
            aoMap={bodyAOMap}
            // displacementMap={bodyDisplacementMap}
          />
        </mesh>
        <mesh
          geometry={nodes.bodyarmor_mesh.geometry}
          material={materials["bodyarmor.001"]}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={bodyArmorColorMap}
            normalMap={bodyArmorNormalMap}
            roughnessMap={bodyArmorRoughnessMap}
            metalnessMap={bodyArmorMetalnessMap}
            aoMap={bodyArmorAOMap}
            // displacementMap={bodyArmorDisplacementMap}
          />
        </mesh>
        <mesh
          geometry={nodes.cloak_mesh.geometry}
          material={materials["cloak.001"]}
        >
          <meshStandardMaterial
            metalness={0.1}
            roughness={1}
            map={cloakColorMap}
            normalMap={cloakNormalMap}
            roughnessMap={cloakRoughnessMap}
            metalnessMap={cloakMetalnessMap}
            aoMap={cloakAOMap}
            // displacementMap={cloakDisplacementMap}
          />
        </mesh>
        <mesh
          geometry={nodes.helmet_mesh.geometry}
          material={materials["helmet.001"]}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={helmetColorMap}
            normalMap={helmetNormalMap}
            roughnessMap={helmetRoughnessMap}
            metalnessMap={helmetMetalnessMap}
            aoMap={helmetAOMap}
            // displacementMap={helmetDisplacementMap}
          />
        </mesh>
        <mesh
          geometry={nodes.pant_mesh.geometry}
          material={materials["pant.001"]}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={pantColorMap}
            normalMap={pantNormalMap}
            roughnessMap={pantRoughnessMap}
            metalnessMap={pantMetalnessMap}
            aoMap={pantAOMap}
            // displacementMap={pantDisplacementMap}
          />
        </mesh>
        <mesh
          geometry={nodes.shoes_mesh.geometry}
          material={materials["shoes.001"]}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={shoesColorMap}
            normalMap={shoesNormalMap}
            roughnessMap={shoesRoughnessMap}
            metalnessMap={shoesMetalnessMap}
            aoMap={shoesAOMap}
            // displacementMap={shoesDisplacementMap}
          />
        </mesh>
      </group>
    </group>
  );
}

export default King;
