import React, { FC } from 'react'
import { Cylinder } from '@react-three/drei'

type MovePropsType = {
  position: [number, number, number],
  selectedFigure: string ,
  onFigureMove: (id: string, position: [number, number, number]) => void
}

export const MoveCircle: FC<MovePropsType> = ({ position, onFigureMove, selectedFigure }) => {

  const onMoveClick = () => {
    onFigureMove(selectedFigure, position)
  }

  return (
    <Cylinder
      onClick={onMoveClick}
      scale={[0.3, 0.1, 0.3]}
      position={[position[0], position[1] - 0.35, position[2]]}
    >
      <meshStandardMaterial color='green' />
    </Cylinder>
  )
}
