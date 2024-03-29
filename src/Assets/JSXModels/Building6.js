/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Solarliu (https://sketchfab.com/jacky15621419)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/asia-building-a3f45195b01f48ff9f687d3ceac52b82
title: Asia Building
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/building6.gltf');
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0, 0]} rotation={[Math.PI, -0.86, 2.65]} />
          <group position={[0, 0, 0]}>
            <group position={[-30, 0, 219.99]}>
              <mesh
                geometry={nodes.polySurface3488_concrete_021_0.geometry}
                material={materials['concrete_02.1']}
              />
              <mesh
                geometry={nodes.polySurface3488_concrete_fine1_0.geometry}
                material={materials['concrete_fine.1']}
              />
            </group>
            <group position={[-30, 0, 219.99]}>
              <mesh
                geometry={nodes.polySurface3489_concrete_022_0.geometry}
                material={materials['concrete_02.2']}
              />
              <mesh
                geometry={nodes.polySurface3489_rooftop_01_0.geometry}
                material={materials.rooftop_01}
              />
            </group>
            <group position={[-30, 0, 219.99]}>
              <mesh
                geometry={nodes.polySurface3490_concrete_023_0.geometry}
                material={materials['concrete_02.3']}
              />
              <mesh
                geometry={nodes.polySurface3490_rooftop_011_0.geometry}
                material={materials['rooftop_01.1']}
              />
            </group>
            <group
              position={[-1.84, 0, -59.22]}
              rotation={[Math.PI, 0, Math.PI]}
            >
              <group position={[-30, 3.08, 160.69]} rotation={[0, 0, 0]}>
                <mesh
                  geometry={nodes.pPlane199_rooftop_012_0.geometry}
                  material={materials['rooftop_01.2']}
                />
              </group>
              <group position={[-30, 0, 159.99]} rotation={[0, 0, 0]}>
                <mesh
                  geometry={nodes.pPlane200_rooftop_013_0.geometry}
                  material={materials['rooftop_01.3']}
                />
              </group>
              <group position={[-30, 0, 159.99]} rotation={[0, 0, 0]}>
                <mesh
                  geometry={nodes.pCube118_rooftop_014_0.geometry}
                  material={materials['rooftop_01.4']}
                />
              </group>
              <group position={[-30, 0, 159.99]} rotation={[0, 0, 0]}>
                <mesh
                  geometry={nodes.pPlane198_rooftop_015_0.geometry}
                  material={materials['rooftop_01.5']}
                />
              </group>
              <group position={[-30, 0, 159.99]} rotation={[0, 0, 0]}>
                <mesh
                  geometry={nodes.pCube117_rooftop_016_0.geometry}
                  material={materials['rooftop_01.6']}
                />
              </group>
              <group position={[-30, 0, 159.99]} rotation={[0, 0, 0]}>
                <mesh
                  geometry={nodes.pPlane197_rooftop_017_0.geometry}
                  material={materials['rooftop_01.7']}
                />
              </group>
              <group position={[-30, 0, 159.99]} rotation={[0, 0, 0]}>
                <mesh
                  geometry={nodes.group26_rooftop_018_0.geometry}
                  material={materials['rooftop_01.8']}
                />
              </group>
              <group position={[-30, 0, 159.99]} rotation={[0, 0, 0]}>
                <mesh
                  geometry={nodes.pCube116_rooftop_019_0.geometry}
                  material={materials['rooftop_01.9']}
                />
              </group>
              <group position={[-30, 0, 159.99]} rotation={[0, 0, 0]}>
                <mesh
                  geometry={nodes.pCube119_rooftop_0110_0.geometry}
                  material={materials['rooftop_01.10']}
                />
              </group>
              <group position={[-30, 0, 159.99]} rotation={[0, 0, 0]}>
                <mesh
                  geometry={nodes.pCube121_rooftop_0111_0.geometry}
                  material={materials['rooftop_01.11']}
                />
              </group>
              <group position={[-30, 0, 159.99]} rotation={[0, 0, 0]}>
                <mesh
                  geometry={nodes.pPlane201_rooftop_0112_0.geometry}
                  material={materials['rooftop_01.12']}
                />
              </group>
              <group position={[-30, 0, 159.99]} rotation={[0, 0, 0]}>
                <mesh
                  geometry={nodes.pCube122_rooftop_0113_0.geometry}
                  material={materials['rooftop_01.13']}
                />
              </group>
              <group position={[-30, 0, 159.99]} rotation={[0, 0, 0]}>
                <mesh
                  geometry={nodes.pCube123_rooftop_0114_0.geometry}
                  material={materials['rooftop_01.14']}
                />
              </group>
              <group position={[-30, 0, 159.99]} rotation={[0, 0, 0]}>
                <mesh
                  geometry={nodes.pCube124_rooftop_0115_0.geometry}
                  material={materials['rooftop_01.15']}
                />
              </group>
              <group position={[-30, 0, 159.99]} rotation={[0, 0, 0]}>
                <mesh
                  geometry={nodes.pCube120_rooftop_0116_0.geometry}
                  material={materials['rooftop_01.16']}
                />
              </group>
            </group>
            <group position={[0, 0, 60]}>
              <group position={[-30, 0, 159.99]}>
                <mesh
                  geometry={nodes.pPlane199_2_rooftop_0117_0.geometry}
                  material={materials['rooftop_01.17']}
                />
              </group>
              <group position={[-30, 0, 159.99]}>
                <mesh
                  geometry={nodes.pPlane200_2_rooftop_0118_0.geometry}
                  material={materials['rooftop_01.18']}
                />
              </group>
              <group position={[-30, 0, 159.99]}>
                <mesh
                  geometry={nodes.pCube118_2_rooftop_0119_0.geometry}
                  material={materials['rooftop_01.19']}
                />
              </group>
              <group position={[-30, 0, 159.99]}>
                <mesh
                  geometry={nodes.pPlane198_2_rooftop_0120_0.geometry}
                  material={materials['rooftop_01.20']}
                />
              </group>
              <group position={[-30, 0, 159.99]}>
                <mesh
                  geometry={nodes.pCube117_2_rooftop_0121_0.geometry}
                  material={materials['rooftop_01.21']}
                />
              </group>
              <group position={[-30, 0, 159.99]}>
                <mesh
                  geometry={nodes.pPlane197_2_rooftop_0122_0.geometry}
                  material={materials['rooftop_01.22']}
                />
              </group>
              <group position={[-30, 0, 159.99]}>
                <mesh
                  geometry={nodes.group26_2_rooftop_0123_0.geometry}
                  material={materials['rooftop_01.23']}
                />
              </group>
              <group position={[-30, 0, 159.99]}>
                <mesh
                  geometry={nodes.pCube116_2_rooftop_0124_0.geometry}
                  material={materials['rooftop_01.24']}
                />
              </group>
              <group position={[-30, 0, 159.99]}>
                <mesh
                  geometry={nodes.pCube119_2_rooftop_0125_0.geometry}
                  material={materials['rooftop_01.25']}
                />
              </group>
              <group position={[-30, 0, 159.99]}>
                <mesh
                  geometry={nodes.pCube121_2_rooftop_0126_0.geometry}
                  material={materials['rooftop_01.26']}
                />
              </group>
              <group position={[-30, 0, 159.99]}>
                <mesh
                  geometry={nodes.pPlane201_2_rooftop_0127_0.geometry}
                  material={materials['rooftop_01.27']}
                />
              </group>
              <group position={[-30, 0, 159.99]}>
                <mesh
                  geometry={nodes.pCube122_2_rooftop_0128_0.geometry}
                  material={materials['rooftop_01.28']}
                />
              </group>
              <group position={[-30, 0, 159.99]}>
                <mesh
                  geometry={nodes.pCube123_2_rooftop_0129_0.geometry}
                  material={materials['rooftop_01.29']}
                />
              </group>
              <group position={[-30, 0, 159.99]}>
                <mesh
                  geometry={nodes.pCube124_2_rooftop_0130_0.geometry}
                  material={materials['rooftop_01.30']}
                />
              </group>
              <group position={[-30, 0, 159.99]}>
                <mesh
                  geometry={nodes.pCube120_2_rooftop_0131_0.geometry}
                  material={materials['rooftop_01.31']}
                />
              </group>
            </group>
            <group position={[-30, 0, 219.99]}>
              <mesh
                geometry={nodes.pPlane199_3_rooftop_0132_0.geometry}
                material={materials['rooftop_01.32']}
              />
              <mesh
                geometry={nodes.pPlane200_3_rooftop_0133_0.geometry}
                material={materials['rooftop_01.33']}
              />
              <mesh
                geometry={nodes.pCube118_3_rooftop_0134_0.geometry}
                material={materials['rooftop_01.34']}
              />
              <mesh
                geometry={nodes.pPlane198_3_rooftop_0135_0.geometry}
                material={materials['rooftop_01.35']}
              />
              <mesh
                geometry={nodes.pCube117_3_rooftop_0136_0.geometry}
                material={materials['rooftop_01.36']}
              />
              <mesh
                geometry={nodes.pPlane197_3_rooftop_0137_0.geometry}
                material={materials['rooftop_01.37']}
              />
              <mesh
                geometry={nodes.group26_3_rooftop_0138_0.geometry}
                material={materials['rooftop_01.38']}
              />
              <mesh
                geometry={nodes.pCube116_3_rooftop_0139_0.geometry}
                material={materials['rooftop_01.39']}
              />
              <mesh
                geometry={nodes.pCube119_3_rooftop_0140_0.geometry}
                material={materials['rooftop_01.40']}
              />
              <mesh
                geometry={nodes.pCube121_3_rooftop_0141_0.geometry}
                material={materials['rooftop_01.41']}
              />
              <mesh
                geometry={nodes.pCube122_3_rooftop_0142_0.geometry}
                material={materials['rooftop_01.42']}
              />
              <mesh
                geometry={nodes.pCube123_3_rooftop_0143_0.geometry}
                material={materials['rooftop_01.43']}
              />
              <mesh
                geometry={nodes.pCube124_3_rooftop_0144_0.geometry}
                material={materials['rooftop_01.44']}
              />
            </group>
            <mesh
              geometry={nodes.apartment_02_fine_concrete_fine_0.geometry}
              material={materials.concrete_fine}
            />
            <mesh
              geometry={nodes.apartment_02_fine_build_01_0.geometry}
              material={materials.build_01}
            />
            <mesh
              geometry={nodes.apartment_02_fine_concrete_02_0.geometry}
              material={materials.concrete_02}
            />
            <mesh
              geometry={nodes.apartment_02_fine_concrete_0.geometry}
              material={materials.concrete}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/building6.gltf');
