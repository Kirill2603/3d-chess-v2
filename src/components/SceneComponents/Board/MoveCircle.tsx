import React, { FC } from 'react'
import { Cylinder } from '@react-three/drei'
import { Move, Square } from 'chess.js'
import { ThreeEvent } from '@react-three/fiber'

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

  const onMoveClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation()
    onFigureMove(cell)
    console.log(move.flags)
  }

  return (
    <Cylinder
      onClick={(event) => onMoveClick(event)}
      scale={[0.5, 0.1, 0.5]}
      position={[position.x, 0.01, position.y]}
    >
      <meshStandardMaterial color={move.flags.includes('c') ? 'red' : 'green'} />
    </Cylinder>
  )
}
