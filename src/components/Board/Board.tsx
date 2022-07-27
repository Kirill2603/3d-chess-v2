import React, { FC } from 'react'
import { BoardDesk, FigureType } from '../../store/boardSlice'
import { Cell } from './Cell'
import Figure from './Figure'
import { MoveCircle } from './MoveCircle'


type BoardPropsType = {
  board: BoardDesk
  figures: Array<Array<FigureType | null>>
  selectedCell: string
  onCellSelect: (cell: string) => void
  availableMoves: Array<string>
}

export const Board: FC<BoardPropsType> = ({ board, figures, onCellSelect, selectedCell, availableMoves }) => {

  return (
    <>
      {board.map((row, rowIndex) =>
        <React.Fragment key={rowIndex}>
          {row.map((cell, cellIndex) =>
            <Cell
              availableMoves={availableMoves}
              onCellSelect={onCellSelect}
              key={rowIndex.toString() + cellIndex.toString()}
              cell={cell}
              color={(cellIndex + rowIndex) % 2 === 0 ? 'white' : 'black'}
              position={{ x: rowIndex, y: cellIndex }}
            />,
          )}
        </React.Fragment>)}
      {figures.map((row, rowIndex) =>
        <React.Fragment key={rowIndex}>
          {row.map((figure, cellIndex) =>
            <Figure
              key={rowIndex.toString() + cellIndex.toString()}
              position={{ x: rowIndex, y: cellIndex }}
              selected={!!(figure && figure.square === selectedCell)}
              figure={figure}
            />)}
        </React.Fragment>)}
    </>
  )
}
