import React, { FC } from 'react'
import { Cylinder } from '@react-three/drei'

type MovePropsType = {
  position: [number, number, number]
}

export const MoveCircle: FC<MovePropsType> = ({position}) => {
  return (
    <Cylinder
      scale={[0.3, 0.3, 0.3]}
      position={ [position[0], position[1]-0.45, position[2]]}
    >
      <meshStandardMaterial color='green' />

    </Cylinder>
  )
}
