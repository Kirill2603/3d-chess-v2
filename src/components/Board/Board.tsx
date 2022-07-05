import React, { FC } from 'react'

import { MoveCircle } from './MoveCircle'
import { Cell } from './Cell'

type BoardPropsType = {
  board: Array<{
    id: string,
    position: [number, number, number],
    color: 'white' | 'black'
  }>
  availableMoves: Array<[number, number, number]> | []
}


export const Board: FC<BoardPropsType> = ({board, availableMoves}) => {


  return (
    <>
      {board.map(cell =>
        <Cell key={cell.id} position={cell.position} color={cell.color}/>,
      )}
      {availableMoves.map((move) =>
        <MoveCircle
          key={move[0].toString() + move[1].toString() + move[2].toString() + Math.random()}
          position={move}/>,
      )}
    </>
  )
}
