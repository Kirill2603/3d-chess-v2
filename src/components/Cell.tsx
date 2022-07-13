import React, { FC } from 'react'
import { PieceType, Square } from 'chess.js'

type CellType = {
  cell: { type: PieceType; color: 'b' | 'w'; square: Square } | null
  i: number
  selected: string
  setSelected: (selected: string) => void
  moves: string[]
}

const getFigure = (type: PieceType | null, color: 'b' | 'w' | null) => {
  if (type === 'p' && color === 'w') {
    return 'WPawn'
  }
  if (type === 'p' && color === 'b') {
    return 'BPawn'
  }
}

export const Cell: FC<CellType> = ({ cell, i, selected, setSelected, moves }) => {

  const style = {
    backgroundColor: i % 2 === 0 ? 'white' : 'black',
    color: i % 2 === 0 ? 'black' : 'white',
    width: '60px',
    height: '60px',
  }

  const onClick = () => {
    if (cell) {
      if (selected === cell.square) {
        setSelected('')
      } else {
        setSelected(cell.square)
      }
    }
  }

  const figure = getFigure(cell && cell.type, cell && cell.color)

  return (
    <span
      onClick={onClick}
      style={style}>
      {cell && cell.square ? cell.square : ''}
      <span>{figure}</span>

      {moves.map((move) => {
        if (move === (cell && cell.square)) {

          debugger
          return (
            <p>0</p>
          )
        } else return null

      }
        )}
    </span>
  )
}
