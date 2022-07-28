import React, { FC } from 'react'
import { BoardDesk, FigureType } from '../../../store/boardSlice'
import Cell from './Cell'
import Figure from '../Figures/Figure'
import { Move, Square } from 'chess.js'

type BoardPropsType = {
  board: BoardDesk
  figures: Array<Array<FigureType | null>>
  selectedCell: Square | null
  onCellSelect: (cell: Square) => void
  availableMoves: Array<Move> | []
  onFigureMove: (targetCell: Square) => void
}

const Board: FC<BoardPropsType> = ({
                                            board,
                                            figures,
                                            onCellSelect,
                                            selectedCell,
                                            availableMoves,
                                            onFigureMove,
                                          }) => {

  return (
    <>
      {board.map((row, rowIndex) =>
        <React.Fragment key={rowIndex}>
          {row.map((cell, cellIndex) =>
            <Cell
              availableMoves={availableMoves}
              onFigureMove={onFigureMove}
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

export default Board
