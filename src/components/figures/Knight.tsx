import * as THREE from 'three'
import React, { FC } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { FiguresPropsType } from './types'
import { ThreeEvent } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Cylinder: THREE.Mesh
  }
};

export const Knight: FC<FiguresPropsType> = ({ position, color }): JSX.Element => {

  const { nodes } = useGLTF('figures/knight.gltf') as GLTFResult

  return (
    <group
      rotation={color === 'b' ? [0, 1.6, 0] : [0, -1.6, 0]}
      position={[position.x, 0.36, position.y]}
      scale={[0.3, 0.3, 0.3]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
      >
        <meshPhysicalMaterial color={color === "w" ? 'white' : 'black'} />
      </mesh>
    </group>
  )
}

useGLTF.preload('figures/knight.gltf')
