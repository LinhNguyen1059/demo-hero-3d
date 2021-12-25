import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

function KingVFX({ colorBases, ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./king/kingVFX.glb");

  const [
    armColorMap0,
    armColorMap1,
    armColorMap2,
    armColorMap3,
    armColorMap4,
    armColorMap5,
    armMetalnessMap,
    armNormalMap,
    armRoughnessMap,
    armAOMap,
    armDisplacementMap,
    bodyArmorColorMap0,
    bodyArmorColorMap1,
    bodyArmorColorMap2,
    bodyArmorColorMap3,
    bodyArmorColorMap4,
    bodyArmorColorMap5,
    bodyArmorMetalnessMap,
    bodyArmorNormalMap,
    bodyArmorRoughnessMap,
    bodyArmorAOMap,
    bodyArmorDisplacementMap,
    pantColorMap0,
    pantColorMap1,
    pantColorMap2,
    pantColorMap3,
    pantColorMap4,
    pantColorMap5,
    pantMetalnessMap,
    pantNormalMap,
    pantRoughnessMap,
    pantAOMap,
    pantDisplacementMap,
    cloakColorMap0,
    cloakColorMap1,
    cloakColorMap2,
    cloakColorMap3,
    cloakColorMap4,
    cloakColorMap5,
    cloakMetalnessMap,
    cloakNormalMap,
    cloakRoughnessMap,
    cloakAOMap,
    cloakDisplacementMap,
    helmetColorMap0,
    helmetColorMap1,
    helmetColorMap2,
    helmetColorMap3,
    helmetColorMap4,
    helmetColorMap5,
    helmetMetalnessMap,
    helmetNormalMap,
    helmetRoughnessMap,
    helmetAOMap,
    helmetDisplacementMap,
    beltColorMap0,
    beltColorMap1,
    beltColorMap2,
    beltColorMap3,
    beltColorMap4,
    beltColorMap5,
    beltMetalnessMap,
    beltNormalMap,
    beltRoughnessMap,
    beltAOMap,
    beltDisplacementMap,
    shoesColorMap0,
    shoesColorMap1,
    shoesColorMap2,
    shoesColorMap3,
    shoesColorMap4,
    shoesColorMap5,
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
    "king/arm/arm_Base_Color1.png",
    "king/arm/arm_Base_Color2.png",
    "king/arm/arm_Base_Color3.png",
    "king/arm/arm_Base_Color4.png",
    "king/arm/arm_Base_Color5.png",
    "king/arm/arm_Metallic.png",
    "king/arm/arm_Normal_OpenGL.png",
    "king/arm/arm_Roughness.png",
    "king/arm/arm_Mixed_AO.png",
    "king/arm/arm_Height.png",
    "king/bodyarmor/bodyarmor_Base_Color.png",
    "king/bodyarmor/bodyarmor_Base_Color1.png",
    "king/bodyarmor/bodyarmor_Base_Color2.png",
    "king/bodyarmor/bodyarmor_Base_Color3.png",
    "king/bodyarmor/bodyarmor_Base_Color4.png",
    "king/bodyarmor/bodyarmor_Base_Color5.png",
    "king/bodyarmor/bodyarmor_Metallic.png",
    "king/bodyarmor/bodyarmor_Normal_OpenGL.png",
    "king/bodyarmor/bodyarmor_Roughness.png",
    "king/bodyarmor/bodyarmor_Mixed_AO.png",
    "king/bodyarmor/bodyarmor_Height.png",
    "king/pant/pant_Base_Color.png",
    "king/pant/pant_Base_Color1.png",
    "king/pant/pant_Base_Color2.png",
    "king/pant/pant_Base_Color3.png",
    "king/pant/pant_Base_Color4.png",
    "king/pant/pant_Base_Color5.png",
    "king/pant/pant_Metallic.png",
    "king/pant/pant_Normal_OpenGL.png",
    "king/pant/pant_Roughness.png",
    "king/pant/pant_Mixed_AO.png",
    "king/pant/pant_Height.png",
    "king/cloak/cloak_Base_Color.png",
    "king/cloak/cloak_Base_Color1.png",
    "king/cloak/cloak_Base_Color2.png",
    "king/cloak/cloak_Base_Color3.png",
    "king/cloak/cloak_Base_Color4.png",
    "king/cloak/cloak_Base_Color5.png",
    "king/cloak/cloak_Metallic.png",
    "king/cloak/cloak_Normal_OpenGL.png",
    "king/cloak/cloak_Roughness.png",
    "king/cloak/cloak_Mixed_AO.png",
    "king/cloak/cloak_Height.png",
    "king/helmet/helmet_Base_Color.png",
    "king/helmet/helmet_Base_Color1.png",
    "king/helmet/helmet_Base_Color2.png",
    "king/helmet/helmet_Base_Color3.png",
    "king/helmet/helmet_Base_Color4.png",
    "king/helmet/helmet_Base_Color5.png",
    "king/helmet/helmet_Metallic.png",
    "king/helmet/helmet_Normal_OpenGL.png",
    "king/helmet/helmet_Roughness.png",
    "king/helmet/helmet_Mixed_AO.png",
    "king/helmet/helmet_Height.png",
    "king/belt/belt_Base_Color.png",
    "king/belt/belt_Base_Color1.png",
    "king/belt/belt_Base_Color2.png",
    "king/belt/belt_Base_Color3.png",
    "king/belt/belt_Base_Color4.png",
    "king/belt/belt_Base_Color5.png",
    "king/belt/belt_Metallic.png",
    "king/belt/belt_Normal_OpenGL.png",
    "king/belt/belt_Roughness.png",
    "king/belt/belt_Mixed_AO.png",
    "king/belt/belt_Height.png",
    "king/shoes/shoes_Base_Color.png",
    "king/shoes/shoes_Base_Color1.png",
    "king/shoes/shoes_Base_Color2.png",
    "king/shoes/shoes_Base_Color3.png",
    "king/shoes/shoes_Base_Color4.png",
    "king/shoes/shoes_Base_Color5.png",
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

  armColorMap0.flipY = false;
  armColorMap1.flipY = false;
  armColorMap2.flipY = false;
  armColorMap3.flipY = false;
  armColorMap4.flipY = false;
  armColorMap5.flipY = false;
  armMetalnessMap.flipY = false;
  armNormalMap.flipY = false;
  armRoughnessMap.flipY = false;
  armAOMap.flipY = false;
  armDisplacementMap.flipY = false;
  bodyArmorColorMap0.flipY = false;
  bodyArmorColorMap1.flipY = false;
  bodyArmorColorMap2.flipY = false;
  bodyArmorColorMap3.flipY = false;
  bodyArmorColorMap4.flipY = false;
  bodyArmorColorMap5.flipY = false;
  bodyArmorMetalnessMap.flipY = false;
  bodyArmorNormalMap.flipY = false;
  bodyArmorRoughnessMap.flipY = false;
  bodyArmorAOMap.flipY = false;
  bodyArmorDisplacementMap.flipY = false;
  cloakColorMap0.flipY = false;
  cloakColorMap1.flipY = false;
  cloakColorMap2.flipY = false;
  cloakColorMap3.flipY = false;
  cloakColorMap4.flipY = false;
  cloakColorMap5.flipY = false;
  cloakMetalnessMap.flipY = false;
  cloakNormalMap.flipY = false;
  cloakRoughnessMap.flipY = false;
  cloakAOMap.flipY = false;
  cloakDisplacementMap.flipY = false;
  helmetColorMap0.flipY = false;
  helmetColorMap1.flipY = false;
  helmetColorMap2.flipY = false;
  helmetColorMap3.flipY = false;
  helmetColorMap4.flipY = false;
  helmetColorMap5.flipY = false;
  helmetMetalnessMap.flipY = false;
  helmetNormalMap.flipY = false;
  helmetRoughnessMap.flipY = false;
  helmetAOMap.flipY = false;
  helmetDisplacementMap.flipY = false;
  beltColorMap0.flipY = false;
  beltColorMap1.flipY = false;
  beltColorMap2.flipY = false;
  beltColorMap3.flipY = false;
  beltColorMap4.flipY = false;
  beltColorMap5.flipY = false;
  beltMetalnessMap.flipY = false;
  beltNormalMap.flipY = false;
  beltRoughnessMap.flipY = false;
  beltAOMap.flipY = false;
  beltDisplacementMap.flipY = false;
  shoesColorMap0.flipY = false;
  shoesColorMap1.flipY = false;
  shoesColorMap2.flipY = false;
  shoesColorMap3.flipY = false;
  shoesColorMap4.flipY = false;
  shoesColorMap5.flipY = false;
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
  pantColorMap0.flipY = false;
  pantColorMap1.flipY = false;
  pantColorMap2.flipY = false;
  pantColorMap3.flipY = false;
  pantColorMap4.flipY = false;
  pantColorMap5.flipY = false;
  pantMetalnessMap.flipY = false;
  pantNormalMap.flipY = false;
  pantRoughnessMap.flipY = false;
  pantAOMap.flipY = false;
  pantDisplacementMap.flipY = false;

  const armColors = [
    armColorMap0,
    armColorMap1,
    armColorMap2,
    armColorMap3,
    armColorMap4,
    armColorMap5,
  ];
  const beltColors = [
    beltColorMap0,
    beltColorMap1,
    beltColorMap2,
    beltColorMap3,
    beltColorMap4,
    beltColorMap5,
  ];
  const bodyArmorColors = [
    bodyArmorColorMap0,
    bodyArmorColorMap1,
    bodyArmorColorMap2,
    bodyArmorColorMap3,
    bodyArmorColorMap4,
    bodyArmorColorMap5,
  ];
  const cloakColors = [
    cloakColorMap0,
    cloakColorMap1,
    cloakColorMap2,
    cloakColorMap3,
    cloakColorMap4,
    cloakColorMap5,
  ];
  const helmetColors = [
    helmetColorMap0,
    helmetColorMap1,
    helmetColorMap2,
    helmetColorMap3,
    helmetColorMap4,
    helmetColorMap5,
  ];
  const shoesColors = [
    shoesColorMap0,
    shoesColorMap1,
    shoesColorMap2,
    shoesColorMap3,
    shoesColorMap4,
    shoesColorMap5,
  ];
  const pantColors = [
    pantColorMap0,
    pantColorMap1,
    pantColorMap2,
    pantColorMap3,
    pantColorMap4,
    pantColorMap5,
  ];

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[0, -1.3, 0]}
        rotation={[Math.PI / 2, 0, 0.4]}
        scale={0.019}
      >
        <primitive object={nodes.Brine_Vua_rig_v1World} />
        <skinnedMesh
          geometry={nodes.Brine_Vua_rig_v1arm_mesh.geometry}
          material={materials["Brine_Vua_rig_v1:arm"]}
          skeleton={nodes.Brine_Vua_rig_v1arm_mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={armColors[colorBases.arm]}
            normalMap={armNormalMap}
            roughnessMap={armRoughnessMap}
            metalnessMap={armMetalnessMap}
            // aoMap={armAOMap}
            // displacementMap={armDisplacementMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Brine_Vua_rig_v1belt_mesh.geometry}
          material={materials["Brine_Vua_rig_v1:belt"]}
          skeleton={nodes.Brine_Vua_rig_v1belt_mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={beltColors[colorBases.belt]}
            normalMap={beltNormalMap}
            roughnessMap={beltRoughnessMap}
            metalnessMap={beltMetalnessMap}
            // aoMap={beltAOMap}
            // displacementMap={beltDisplacementMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Mesh022.geometry}
          material={materials["Brine_Vua_rig_v1:lambert2"]}
          skeleton={nodes.Mesh022.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={bodyColorMap}
            normalMap={bodyNormalMap}
            roughnessMap={bodyRoughnessMap}
            metalnessMap={bodyMetalnessMap}
            // aoMap={bodyAOMap}
            // displacementMap={bodyDisplacementMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Mesh022_1.geometry}
          material={materials["Brine_Vua_rig_v1:body"]}
          skeleton={nodes.Mesh022_1.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={bodyColorMap}
            normalMap={bodyNormalMap}
            roughnessMap={bodyRoughnessMap}
            metalnessMap={bodyMetalnessMap}
            // aoMap={bodyAOMap}
            // displacementMap={bodyDisplacementMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Brine_Vua_rig_v1bodyarmor_mesh.geometry}
          material={materials["Brine_Vua_rig_v1:bodyarmor"]}
          skeleton={nodes.Brine_Vua_rig_v1bodyarmor_mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={bodyArmorColors[colorBases.bodyarmor]}
            normalMap={bodyArmorNormalMap}
            roughnessMap={bodyArmorRoughnessMap}
            metalnessMap={bodyArmorMetalnessMap}
            // aoMap={bodyArmorAOMap}
            // displacementMap={bodyArmorDisplacementMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Brine_Vua_rig_v1cloak_mesh.geometry}
          material={materials["Brine_Vua_rig_v1:cloak"]}
          skeleton={nodes.Brine_Vua_rig_v1cloak_mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={cloakColors[colorBases.cloak]}
            normalMap={cloakNormalMap}
            roughnessMap={cloakRoughnessMap}
            metalnessMap={cloakMetalnessMap}
            // aoMap={cloakAOMap}
            // displacementMap={cloakDisplacementMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Brine_Vua_rig_v1helmet_mesh.geometry}
          material={materials["Brine_Vua_rig_v1:helmet"]}
          skeleton={nodes.Brine_Vua_rig_v1helmet_mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={helmetColors[colorBases.helmet]}
            normalMap={helmetNormalMap}
            roughnessMap={helmetRoughnessMap}
            metalnessMap={helmetMetalnessMap}
            // aoMap={helmetAOMap}
            // displacementMap={helmetDisplacementMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Brine_Vua_rig_v1pant_mesh.geometry}
          material={materials["Brine_Vua_rig_v1:pant"]}
          skeleton={nodes.Brine_Vua_rig_v1pant_mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={pantColors[colorBases.pant]}
            normalMap={pantNormalMap}
            roughnessMap={pantRoughnessMap}
            metalnessMap={pantMetalnessMap}
            // aoMap={pantAOMap}
            // displacementMap={pantDisplacementMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Brine_Vua_rig_v1shoes_mesh.geometry}
          material={materials["Brine_Vua_rig_v1:shoes"]}
          skeleton={nodes.Brine_Vua_rig_v1shoes_mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={shoesColors[colorBases.shoes]}
            normalMap={shoesNormalMap}
            roughnessMap={shoesRoughnessMap}
            metalnessMap={shoesMetalnessMap}
            // aoMap={shoesAOMap}
            // displacementMap={shoesDisplacementMap}
          />
        </skinnedMesh>
      </group>
    </group>
  );
}

export default KingVFX;
