import React, { FC } from 'react'
import { Vector3 } from 'three'
import Cell from './Cell'

type BoardPropsType = {
  board: Array<{
    id: string,
    position: Vector3,
    color: 'white' | 'black'
  }>
}


export const Board: FC<BoardPropsType> = ({board}) => {


  return (
    <>
      {board.map(cell =>
        <Cell key={cell.id} position={cell.position} color={cell.color}/>,
      )}
    </>
  )
}
