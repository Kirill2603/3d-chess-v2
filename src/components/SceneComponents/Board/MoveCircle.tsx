import React, { FC } from 'react'
import { Cylinder } from '@react-three/drei'
import { Move, Square } from 'chess.js'

type MovePropsType = {
  cell: Square
  move: Move
  position: { x: number, y: number },
  onFigureMove: (targetCell: Square) => void
}

export const MoveCircle: FC<MovePropsType> = ({
                                                cell,
                                                position,
                                                onFigureMove,
                                                move }) => {

  const onMoveClick = () => {
    onFigureMove(cell)
  }

  return (
    <Cylinder
      onClick={onMoveClick}
      scale={[0.5, 0.1, 0.5]}
      position={[position.x, 0.01, position.y]}
    >
      <meshStandardMaterial color={move.flags === 'c' ? 'red' : 'green'} />
    </Cylinder>
  )
}
