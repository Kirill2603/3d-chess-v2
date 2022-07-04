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

export function Rook({}: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('figures/rook.gltf') as GLTFResult
  return (
    <group position={[0, 0, 5]} scale={[0.3, 0.3, 0.3]}>
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
      />
    </group>
  )
}

useGLTF.preload('figures/rook.gltf')
