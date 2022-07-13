import React, { FC } from 'react'

import { MoveCircle } from './MoveCircle'
import { Cell } from './Cell'
import { AttackCircle } from './AttacCircle'

type BoardPropsType = {
  board: Array<{
    id: string,
    position: [number, number, number],
    color: 'white' | 'black'
  }>,
  selectedFigure: string ,
  attackMoves: Array<[number, number, number]> | [],
  availableMoves: Array<[number, number, number]> | [],
  onFigureMove: (id: string, position: [number, number, number]) => void
}


export const Board: FC<BoardPropsType> = ({board, availableMoves, onFigureMove, selectedFigure, attackMoves}) => {

  return (
    <>
      {board.map(cell =>
        <Cell key={cell.id} position={cell.position} color={cell.color}/>,
      )}
      {availableMoves.map((move) =>
        <MoveCircle
          onFigureMove={onFigureMove}
          selectedFigure={selectedFigure}
          key={move[0].toString() + move[1].toString() + move[2].toString() + Math.random()}
          position={move}/>,
      )}
      {attackMoves.map((move) =>
        <AttackCircle
          onFigureMove={onFigureMove}
          selectedFigure={selectedFigure}
          key={move[0].toString() + move[1].toString() + move[2].toString() + Math.random()}
          position={move}
        />
      )}
    </>
  )
}
