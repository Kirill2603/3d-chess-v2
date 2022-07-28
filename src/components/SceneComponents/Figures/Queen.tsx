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

export const Queen: FC<FiguresPropsType> = ({ position, color, selected }): JSX.Element => {
  const { nodes } = useGLTF('Figures/queen.gltf') as GLTFResult
  return (
    <group
      position={[position.x, 0.36, position.y]}
      scale={[0.3, 0.3, 0.3]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
      >
        <meshPhysicalMaterial color={selected ? 'green' : color === "w" ? 'white' : 'black'} />
      </mesh>
    </group>
  )
}

useGLTF.preload('Figures/queen.gltf')
