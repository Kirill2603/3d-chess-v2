import React, { FC } from 'react'
import { Cylinder } from '@react-three/drei'

type MovePropsType = {
  position: { x: number, y: number },
}

export const MoveCircle: FC<MovePropsType> = ({ position}) => {

  // const onMoveClick = () => {
  //   onFigureMove(selectedFigure, position)
  // }

  return (
    <Cylinder
      // onClick={onMoveClick}
      scale={[0.35, 0.1, 0.35]}
      position={[position.x, 0.01, position.y]}
    >
      <meshStandardMaterial color='green' />
    </Cylinder>
  )
}
