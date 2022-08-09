import React, { FC } from 'react'
import { MoveCircle } from './MoveCircle'
import { Move, Square } from 'chess.js'

type CellPropsType = {
  cell: Square
  position: { x: number, y: number }
  color: 'white' | 'black'
  onCellSelect: (selectedCell: Square) => void
  availableMoves: Array<Move>
  onFigureMove: (targetCell: Square) => void
}

const Cell: FC<CellPropsType> = ({
                                          color,
                                          position,
                                          cell,
                                          onCellSelect,
                                          availableMoves,
                                          onFigureMove }) => {
  return (
    <>
      {availableMoves.map((move, index) => move.to === cell ?
        <MoveCircle
          key={cell + index + 'm'}
          move={move}
          position={position}
          cell={cell}
          onFigureMove={onFigureMove} />
        :
        null)}
      <mesh
        onClick={() => onCellSelect(cell)}
        scale={[1, 1, 0.1]}
        position={[position.x, 0, position.y]}
        rotation={[Math.PI / -2, 0, 0]}>
        <meshStandardMaterial roughness={0.1} metalness={0.7} color={color} />
        <boxGeometry />
      </mesh>
      
    </>
  )
}

export default Cell
