import React, { Suspense, useState, useEffect } from 'react';
import * as THREE from 'three';
//import ss from "../../Assets/Models/Building_1/low_poly_brick_building/scene.gltf"
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import roadTexture from '../../Assets/Textures/road_texture.jpg';
import {
  OrbitControls,
  MeshWobbleMaterial,
  meshStandardMaterial,
} from '@react-three/drei';
import Building1JSX from '../../Assets/JSXModels/Building1';
import Building2JSX from '../../Assets/JSXModels/Building2';
import Building3JSX from '../../Assets/JSXModels/Building3';
import Building4JSX from '../../Assets/JSXModels/Building4';
import Building6JSX from '../../Assets/JSXModels/Building6';
import waterJSX from '../../Assets/JSXModels/Water';
import Grass1JSX from '../../Assets/JSXModels/Grass1';
import RoadStraight from '../../Assets/JSXModels/RoadStraight';
import RoadCrossing from '../../Assets/JSXModels/RoadCrossing';
import { PerlinNoise } from '../../utility/functions';

//import bb from '../../Assets/Models/Building_1/low_poly_brick_building/scene.gltf';
//import b from '';

const Light = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[0, 10, 0]} intensity={1.5} />
      <spotLight position={[1000, 0, 0]} intensity={1} />
      <spotLight position={[0, 10, 40]} intensity={1} />
    </>
  );
};

// const Building = () => {
//   // const gltf = new GLTFLoader();
//   // gltf.load('/building1.gltf');
//   console.log('gltf', '/building1.gltf');
//   return <primitive object={gltf.scene} dispose={null} />;
// };

const City = () => {
  // const [roadTextureMap] = useLoader(TextureLoader, [roadTexture]);
  const roadTextureMap = new THREE.TextureLoader().load(roadTexture);
  const [cityMatrix, setCityMatrix] = useState([]);
  const side = 80;

  useEffect(() => {
    generateCity(80);
  }, []);

  const generateCity = (side) => {
    let matrix = [];
    let data = [];
    for (let i = 0; i < side; i++) {
      data = [];
      for (let j = 0; j < side; j++) {
        let perlinValue = Math.round(
          PerlinNoise.noise(i / 10.012, j / 10.021, 0.8) * 10
        );
        data.push(perlinValue);
      }
      matrix.push(data);
    }
    //horizontal roads
    let randomRow = 0;
    for (let i = 0; i < 50; i++) {
      for (let j = 0; j < side; j++) {
        matrix[randomRow][j] = -1;
      }
      randomRow += Math.floor(Math.random() * 6 + 2);
      if (randomRow > side - 1) break;
    }
    //vertical roads
    let randomColumn = 0;
    for (let i = 0; i < 50; i++) {
      for (let j = 0; j < side; j++) {
        if (matrix[j][randomColumn] == -1) matrix[j][randomColumn] = -3;
        else matrix[j][randomColumn] = -2;
      }
      randomColumn += Math.floor(Math.random() * 6 + 2);
      if (randomColumn > side - 1) break;
    }
    setCityMatrix(matrix);
  };
  const getModel = (value, rowIndex, columnIndex) => {
    console.log('called');

    if (value === -2)
      return (
        <mesh position={[0 - side / 2, 0, 1 - side / 2]}>
          <RoadStraight
            position={[columnIndex + 0.5, 0.02, rowIndex - 0.5]}
            scale={[0.07, 0.07, 0.07]}
            rotation={[0, -Math.PI / 2, 0]}
          />
        </mesh>
      );
    if (value === -1)
      return (
        <mesh position={[0 - side / 2, 0, 1 - side / 2]}>
          <RoadStraight
            position={[columnIndex + 0.5, 0.02, rowIndex - 0.5]}
            scale={[0.07, 0.07, 0.07]}
          />
        </mesh>
      );
    if (value === -3)
      return (
        <mesh position={[0 - side / 2, 0, 1 - side / 2]}>
          <RoadCrossing
            position={[columnIndex + 0.5, 0.02, rowIndex - 0.5]}
            scale={[0.07, 0.07, 0.07]}
            rotation={[0, -Math.PI / 2, 0]}
          />
        </mesh>
      );
    if (value < 4)
      return (
        <mesh position={[0 - side / 2, 0, 1 - side / 2]}>
          <Building4JSX
            position={[columnIndex + 0.5, 0.02, rowIndex - 0.5]}
            scale={[0.06, 0.06, 0.06]}
            rotation={[0, -Math.PI / 2, 0]}
          />
        </mesh>
      );
    if (value < 5)
      return (
        <mesh position={[0 - side / 2, 0, 1 - side / 2]}>
          <Building3JSX
            position={[columnIndex + 0.3, 0.02, rowIndex - 0.25]}
            scale={[0.085, 0.085, 0.085]}
          />
        </mesh>
      );
    if (value < 7)
      return (
        <mesh position={[0 - side / 2, 0, 1 - side / 2]}>
          <Building1JSX
            rotation={[0, 0, 0]}
            position={[columnIndex + 0.1, -0.2, rowIndex]}
          />
        </mesh>
      );
    if (value < 8)
      return (
        <mesh position={[0 - side / 2, 0, 1 - side / 2]}>
          <Building6JSX
            position={[columnIndex + 0.5, 0.02, rowIndex - 0.5]}
            scale={[0.005, 0.01, 0.005]}
            rotation={[0, -Math.PI / 2, 0]}
          />
        </mesh>
      );
    if (value < 10)
      return (
        <mesh position={[0 - side / 2, 0, 1 - side / 2]}>
          <Grass1JSX
            position={[columnIndex + 1, 0.02, rowIndex - 1]}
            scale={[0.08, 0.08, 0.06]}
            rotation={[0, -Math.PI / 2, 0]}
          />
        </mesh>
      );
  };
  return (
    <>
      <Canvas
        shadows={true}
        colorManagement
        camera={{ position: [0, 50, 100], fov: 60 }}
      >
        <OrbitControls enablePan enableRotate enableZoom />
        <axesHelper position={[0, 0.11, 0]} args={[2]} />
        <gridHelper args={[1000, 1000, 'white', 'grey']} />
        <Light />

        <group>
          <Suspense fallback={null}>
            <mesh
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, 0, 0]}
              color="red"
            >
              <planeBufferGeometry attach="geometry" args={[side, side]} />
              <meshStandardMaterial attach="material" color="green" />
              {/* {<shadowMaterial attach="material" opacity={0.3} />} */}
            </mesh>
          </Suspense>
          <Suspense fallback={null}>
            {/* {Array(side)
              .fill(5)
              .map((x, index) => {
                return (
                  <mesh position={[0 - side / 2, 0, 1 - side / 2]}>
                    <Grass1JSX
                      position={[index + 1, 0.02, 4 - 1]}
                      scale={[0.08, 0.08, 0.06]}
                      rotation={[0, -Math.PI / 2, 0]}
                    />
                  </mesh>
                );
              })} */}

            {cityMatrix.length > 0 &&
              cityMatrix.map((rowData, rowIndex) => {
                return rowData.map((columnData, columnIndex) => {
                  let x = getModel(columnData, rowIndex, columnIndex);
                  return x;
                });
              })}
          </Suspense>

          {/* <mesh position={[0, 0, 0]}>
            <BuildingJSX position={[1, 0, 0]} />
          </mesh> */}
        </group>
        {/* <group>
          <mesh position={[0, 0, 0]}>
            <Building />
          </mesh>
        </group> */}
      </Canvas>
    </>
  );
};
export default City;
