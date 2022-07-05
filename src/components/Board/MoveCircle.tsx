import React, { FC } from 'react'
import { CylinderBufferGeometry } from 'three'
import { CycleRaycast, Cylinder } from '@react-three/drei'

type MovePropsType = {
  position: [number, number, number]
}

export const MoveCircle: FC<MovePropsType> = ({position}) => {
  return (
    <Cylinder
      scale={[0.3, 0.3, 0.3]}
      position={ [position[0], position[1]-0.45, position[2]]}
      // rotation={[Math.PI / -2, 0, 0]}
    >
      <meshStandardMaterial color='green' />

    </Cylinder>
  )
}
