import React, { FC } from 'react'
import { Vector3 } from 'three'

type CellPropsType = {
  position: Vector3
  color: 'white' | 'black'
}

const Cell: FC<CellPropsType> = ({color, position}) => {
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

export default Cell
