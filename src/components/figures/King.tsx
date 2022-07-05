import * as THREE from 'three'
import React, { FC } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { FiguresPropsType } from './types'

type GLTFResult = GLTF & {
  nodes: {
    Cylinder: THREE.Mesh
  }
};

export const King: FC<FiguresPropsType> = ({ id, position, color }): JSX.Element => {

  const { nodes } = useGLTF('figures/king.gltf') as GLTFResult
  return (

    <group position={position} scale={[0.3, 0.3, 0.3]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
      >
        <meshPhysicalMaterial color={color} />
      </mesh>
    </group>
  )
}

useGLTF.preload('figures/king.gltf')
