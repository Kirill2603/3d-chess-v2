import React, { FC } from 'react'

type CellPropsType = {
  cell: string
  position: {x: number, y: number}
  color: 'white' | 'black'
}

export const Cell: FC<CellPropsType> = ({color, position,cell}) => {
  return (
    <mesh
      onClick={() => console.log(cell)}
      scale={[1, 1, 0.1]}
      position={[position.x, 0 , position.y]}
      rotation={[Math.PI / -2, 0, 0]}>
      <meshStandardMaterial color={color} />
      <boxGeometry/>
    </mesh>
  )
}
