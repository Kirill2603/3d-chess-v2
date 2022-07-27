import React, { FC } from 'react'
import { log } from 'util'
import { MoveCircle } from './MoveCircle'

type CellPropsType = {
  cell: string
  position: { x: number, y: number }
  color: 'white' | 'black'
  onCellSelect: (selectedCell: string) => void
  availableMoves: Array<string>
}

export const Cell: FC<CellPropsType> = ({ color, position, cell, onCellSelect, availableMoves }) => {
  return (
    <>
      {availableMoves.map(move => move === cell ? <MoveCircle key={cell + 'm'} position={position} /> : null )}
      <mesh
        onClick={() => onCellSelect(cell)}
        scale={[1, 1, 0.1]}
        position={[position.x, 0, position.y]}
        rotation={[Math.PI / -2, 0, 0]}>
        <meshStandardMaterial color={color} />
        <boxGeometry />
      </mesh>
    </>
  )
}
