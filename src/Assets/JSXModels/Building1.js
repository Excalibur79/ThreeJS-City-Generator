/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: tl0615 (https://sketchfab.com/tl0615)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/low-poly-brick-building-a0cc89d6d7d94effaea4f267f02685ef
title: Low Poly Brick Building
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default React.memo(function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/building1.gltf');
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[12, 12, 12]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0, 0, 0]}
            rotation={[0, -1.57, 0]}
            scale={[0.39, 0.39, 0.39]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.material_0}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials.material_1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={nodes.Object_6.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={nodes.Object_7.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={nodes.Object_8.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={nodes.Object_9.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={nodes.Object_10.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_11.geometry}
              material={nodes.Object_11.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials.material_5}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_13.geometry}
              material={materials.material_6}
            />
          </group>
        </group>
      </group>
    </group>
  );
});

useGLTF.preload('/building1.gltf');
