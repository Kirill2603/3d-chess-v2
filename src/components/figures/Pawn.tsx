import THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cylinder: THREE.Mesh;
  };
  materials: {};
};

export function Pawn({}: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('figures/pawn.gltf') as GLTFResult
  return (
    <group position={[0, 0, 3]} scale={[0.3, 0.3, 0.3]}>
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
      />
    </group>
  )
}

useGLTF.preload('figures/pawn.gltf')
