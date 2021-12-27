import React, { useRef } from "react";
import { useGLTF, useAnimations, useTexture, Html } from "@react-three/drei";
import { useEffect } from "react";

function KingMotion({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./king/king-motion.glb");
  const { actions } = useAnimations(animations, group);
  const [
    armColorMap,
    armMetalnessMap,
    armNormalMap,
    armRoughnessMap,

    bodyArmorColorMap,
    bodyArmorMetalnessMap,
    bodyArmorNormalMap,
    bodyArmorRoughnessMap,

    pantColorMap,
    pantMetalnessMap,
    pantNormalMap,
    pantRoughnessMap,

    cloakColorMap,
    cloakMetalnessMap,
    cloakNormalMap,
    cloakRoughnessMap,

    helmetColorMap,
    helmetMetalnessMap,
    helmetNormalMap,
    helmetRoughnessMap,

    beltColorMap,
    beltMetalnessMap,
    beltNormalMap,
    beltRoughnessMap,

    shoesColorMap,
    shoesMetalnessMap,
    shoesNormalMap,
    shoesRoughnessMap,

    bodyColorMap,
    bodyMetalnessMap,
    bodyNormalMap,
    bodyRoughnessMap,

    tridentLayer1ColorMap,
    tridentLayer1MetalnessMap,
    tridentLayer1NormalMap,
    tridentLayer1RoughnessMap,

    tridentLayer2ColorMap,
    tridentLayer2MetalnessMap,
    tridentLayer2NormalMap,
    tridentLayer2RoughnessMap,

    tridentLayer3ColorMap,
    tridentLayer3MetalnessMap,
    tridentLayer3NormalMap,
    tridentLayer3RoughnessMap,

    tridentLayer4ColorMap,
    tridentLayer4MetalnessMap,
    tridentLayer4NormalMap,
    tridentLayer4RoughnessMap,

    tridentLayer5ColorMap,
    tridentLayer5MetalnessMap,
    tridentLayer5NormalMap,
    tridentLayer5RoughnessMap,

    tridentLayer6ColorMap,
    tridentLayer6MetalnessMap,
    tridentLayer6NormalMap,
    tridentLayer6RoughnessMap,
  ] = useTexture([
    "king2/arm/arm_Base_Color.png",
    "king2/arm/arm_Metallic.png",
    "king2/arm/arm_Normal.png",
    "king2/arm/arm_Roughness.png",

    "king2/bodyarmor/bodyarmor_Base_Color.png",
    "king2/bodyarmor/bodyarmor_Metallic.png",
    "king2/bodyarmor/bodyarmor_Normal.png",
    "king2/bodyarmor/bodyarmor_Roughness.png",

    "king2/pant/pant_Base_Color.png",
    "king2/pant/pant_Metallic.png",
    "king2/pant/pant_Normal_OpenGL.png",
    "king2/pant/pant_Roughness.png",

    "king2/cloak/cloak_Base_Color.png",
    "king2/cloak/cloak_Metallic.png",
    "king2/cloak/cloak_Normal_OpenGL.png",
    "king2/cloak/cloak_Roughness.png",

    "king2/helmet/helmet_Base_Color.png",
    "king2/helmet/helmet_Metallic.png",
    "king2/helmet/helmet_Normal.png",
    "king2/helmet/helmet_Roughness.png",

    "king2/belt/belt_Base_Color.png",
    "king2/belt/belt_Metallic.png",
    "king2/belt/belt_Normal.png",
    "king2/belt/belt_Roughness.png",

    "king2/shoes/shoes_Base_Color.png",
    "king2/shoes/shoes_Metallic.png",
    "king2/shoes/shoes_Normal_OpenGL.png",
    "king2/shoes/shoes_Roughness.png",

    "king2/body/body_Base_Color.png",
    "king2/body/body_Metallic.png",
    "king2/body/body_Normal.png",
    "king2/body/body_Roughness.png",

    "king/trident/Level1/TridentLv1_Diffuse.png",
    "king/trident/Level1/TridentLv1_Chanel.png",
    "king/trident/Level1/TridentLv1_Normal.png",
    "king/trident/Level1/TridentLv1_Chanel.png",

    "king/trident/Level2/TridentLv2_Diffuse.png",
    "king/trident/Level2/TridentLv2_Chanel.png",
    "king/trident/Level2/TridentLv2_Normal.png",
    "king/trident/Level2/TridentLv2_Chanel.png",

    "king/trident/Level3/TridentLv3_Diffuse.png",
    "king/trident/Level3/TridentLv3_Chanel.png",
    "king/trident/Level3/TridentLv3_Normal.png",
    "king/trident/Level3/TridentLv3_Chanel.png",

    "king/trident/Level4/TridentLv4_Diffuse.png",
    "king/trident/Level4/TridentLv4_Chanel.png",
    "king/trident/Level4/TridentLv4_Normal.png",
    "king/trident/Level4/TridentLv4_Chanel.png",

    "king/trident/Level5/TridentLv5_Diffuse.png",
    "king/trident/Level5/TridentLv5_Chanel.png",
    "king/trident/Level5/TridentLv5_Normal.png",
    "king/trident/Level5/TridentLv5_Chanel.png",

    "king/trident/Level6/TridentLv6_Diffuse.png",
    "king/trident/Level6/TridentLv6_Chanel.png",
    "king/trident/Level6/TridentLv6_Normal.png",
    "king/trident/Level6/TridentLv6_Chanel.png",
  ]);

  useEffect(() => {
    actions["ExportGrp.001|Take 001|BaseLayer.001"].play();
    actions["ExportGrp.002|Take 001|BaseLayer"].play();
  }, []);

  armColorMap.flipY = false;
  armMetalnessMap.flipY = false;
  armNormalMap.flipY = false;
  armRoughnessMap.flipY = false;

  bodyArmorColorMap.flipY = false;
  bodyArmorMetalnessMap.flipY = false;
  bodyArmorNormalMap.flipY = false;
  bodyArmorRoughnessMap.flipY = false;

  cloakColorMap.flipY = false;
  cloakMetalnessMap.flipY = false;
  cloakNormalMap.flipY = false;
  cloakRoughnessMap.flipY = false;

  helmetColorMap.flipY = false;
  helmetMetalnessMap.flipY = false;
  helmetNormalMap.flipY = false;
  helmetRoughnessMap.flipY = false;

  beltColorMap.flipY = false;
  beltMetalnessMap.flipY = false;
  beltNormalMap.flipY = false;
  beltRoughnessMap.flipY = false;

  shoesColorMap.flipY = false;
  shoesMetalnessMap.flipY = false;
  shoesNormalMap.flipY = false;
  shoesRoughnessMap.flipY = false;

  bodyColorMap.flipY = false;
  bodyMetalnessMap.flipY = false;
  bodyNormalMap.flipY = false;
  bodyRoughnessMap.flipY = false;

  pantColorMap.flipY = false;
  pantMetalnessMap.flipY = false;
  pantNormalMap.flipY = false;
  pantRoughnessMap.flipY = false;

  tridentLayer1ColorMap.flipY = false;
  tridentLayer1MetalnessMap.flipY = false;
  tridentLayer1NormalMap.flipY = false;
  tridentLayer1RoughnessMap.flipY = false;

  tridentLayer2ColorMap.flipY = false;
  tridentLayer2MetalnessMap.flipY = false;
  tridentLayer2NormalMap.flipY = false;
  tridentLayer2RoughnessMap.flipY = false;

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[0, -1, 0]}
        rotation={[Math.PI / 2.4, 0, 0]}
        scale={0.015}
      >
        <primitive object={nodes.World} />
        <skinnedMesh
          geometry={nodes.arm_mesh.geometry}
          material={materials.arm1}
          skeleton={nodes.arm_mesh.skeleton}
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
          geometry={nodes.belt_mesh.geometry}
          material={materials.belt1}
          skeleton={nodes.belt_mesh.skeleton}
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
          geometry={nodes.Mesh029.geometry}
          material={materials.lambert26}
          skeleton={nodes.Mesh029.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={bodyColorMap}
            normalMap={bodyNormalMap}
            roughnessMap={bodyRoughnessMap}
            metalnessMap={bodyMetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Mesh029_1.geometry}
          material={materials.body1}
          skeleton={nodes.Mesh029_1.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={bodyColorMap}
            normalMap={bodyNormalMap}
            roughnessMap={bodyRoughnessMap}
            metalnessMap={bodyMetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.bodyarmor_mesh.geometry}
          material={materials.bodyarmor1}
          skeleton={nodes.bodyarmor_mesh.skeleton}
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
          geometry={nodes.cloak_mesh.geometry}
          material={materials.cloak1}
          skeleton={nodes.cloak_mesh.skeleton}
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
          geometry={nodes.helmet_mesh.geometry}
          material={materials.helmet1}
          skeleton={nodes.helmet_mesh.skeleton}
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
          geometry={nodes.pant_mesh.geometry}
          material={materials.pant1}
          skeleton={nodes.pant_mesh.skeleton}
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
          geometry={nodes.shoes_mesh.geometry}
          material={materials.shoes1}
          skeleton={nodes.shoes_mesh.skeleton}
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

      <group
        position={[0, -1, 0]}
        rotation={[Math.PI / 2.4, 0, 0]}
        scale={0.015}
      >
        <primitive object={nodes.World_1} />
        <skinnedMesh
          geometry={nodes.Mesh030.geometry}
          material={nodes.Mesh030.material}
          skeleton={nodes.Mesh030.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={tridentLayer1ColorMap}
            normalMap={tridentLayer1NormalMap}
            roughnessMap={tridentLayer1RoughnessMap}
            metalnessMap={tridentLayer1MetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Mesh030_1.geometry}
          material={nodes.Mesh030_1.material}
          skeleton={nodes.Mesh030_1.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={tridentLayer1ColorMap}
            normalMap={tridentLayer1NormalMap}
            roughnessMap={tridentLayer1RoughnessMap}
            metalnessMap={tridentLayer1MetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Level1b_mesh.geometry}
          material={nodes.Level1b_mesh.material}
          skeleton={nodes.Level1b_mesh.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Level2_mesh.geometry}
          material={nodes.Level2_mesh.material}
          skeleton={nodes.Level2_mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={tridentLayer2ColorMap}
            normalMap={tridentLayer2NormalMap}
            roughnessMap={tridentLayer2RoughnessMap}
            metalnessMap={tridentLayer2MetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Level3_mesh.geometry}
          material={nodes.Level3_mesh.material}
          skeleton={nodes.Level3_mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={tridentLayer3ColorMap}
            normalMap={tridentLayer3NormalMap}
            roughnessMap={tridentLayer3RoughnessMap}
            metalnessMap={tridentLayer3MetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Level4_mesh.geometry}
          material={nodes.Level4_mesh.material}
          skeleton={nodes.Level4_mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={tridentLayer4ColorMap}
            normalMap={tridentLayer4NormalMap}
            roughnessMap={tridentLayer4RoughnessMap}
            metalnessMap={tridentLayer4MetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Level5_mesh.geometry}
          material={nodes.Level5_mesh.material}
          skeleton={nodes.Level5_mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={tridentLayer5ColorMap}
            normalMap={tridentLayer5NormalMap}
            roughnessMap={tridentLayer5RoughnessMap}
            metalnessMap={tridentLayer5MetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Level6_mesh.geometry}
          material={nodes.Level6_mesh.material}
          skeleton={nodes.Level6_mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={tridentLayer6ColorMap}
            normalMap={tridentLayer6NormalMap}
            roughnessMap={tridentLayer6RoughnessMap}
            metalnessMap={tridentLayer6MetalnessMap}
          />
        </skinnedMesh>
      </group>
    </group>
  );
}

export default KingMotion;
