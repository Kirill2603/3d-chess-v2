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

export const Castle: FC<FiguresPropsType> = ({ id, position, color,onFigureSelect}): JSX.Element => {

  const { nodes } = useGLTF('figures/castle.gltf') as GLTFResult

  const onFigureClick = (event: ThreeEvent<MouseEvent>) => {
    onFigureSelect(id)
  }

  return (

    <group position={position} scale={[0.3, 0.3, 0.3]}>
      <mesh
        onClick={onFigureClick}
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
      >
        <meshPhysicalMaterial color={color}/>
      </mesh>

    </group>
  )
}

useGLTF.preload('figures/castle.gltf')
