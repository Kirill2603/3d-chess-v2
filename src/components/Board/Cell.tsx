import React, { FC } from 'react'

type CellPropsType = {
  position: [number, number, number]
  color: 'white' | 'black' | 'green'
}

export const Cell: FC<CellPropsType> = ({color, position}) => {
  return (
    <mesh
      scale={[1, 1, 0.1]}
      position={position}
      rotation={[Math.PI / -2, 0, 0]}>
      <meshStandardMaterial color={color} />
      <boxGeometry/>
    </mesh>
  )
}
