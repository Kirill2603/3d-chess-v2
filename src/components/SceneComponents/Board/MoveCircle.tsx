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
  }

  return (
    <Cylinder
      args={[1,1,1,12]}
      onClick={(event) => onMoveClick(event)}
      scale={[0.45, 0.1, 0.45]}
      position={[position.x, 0.01, position.y]}
    >
      <meshStandardMaterial transparent={true} opacity={0.8} roughness={0.1} metalness={0.7} color={move.flags.includes('c') ? 'red' : 'green'} />
    </Cylinder>
  )
}
