import React, { FC } from 'react'
import { BoardDesk, FigureType } from '../../store/boardSlice'
import { Cell } from './Cell'
import Figure from './Figure'


type BoardPropsType = {
  board: BoardDesk
  figures: Array<Array< FigureType  | null>>
}

export const Board: FC<BoardPropsType> = ({board, figures}) => {

  return (
    <>
      {board.map((row, rowIndex) =>
        <React.Fragment key={rowIndex}>
        {row.map((cell, cellIndex) =>
          <Cell
            key={rowIndex.toString() + cellIndex.toString()}
            cell={cell}
            color={(cellIndex + rowIndex) % 2 === 0 ? 'white' : 'black'}
            position={{ x: rowIndex, y: cellIndex }}
          />)}
      </React.Fragment>)}
      {figures.map((row, rowIndex) =>
        <React.Fragment key={rowIndex}>
          {row.map((figure, cellIndex) =>
            <Figure
              key={rowIndex.toString() + cellIndex.toString()}
              position={{x: rowIndex, y: cellIndex}}
              figure={figure}
            />)}
        </React.Fragment>)}
      {/*{availableMoves.map((move) =>*/}
      {/*  <MoveCircle*/}
      {/*    onFigureMove={onFigureMove}*/}
      {/*    selectedFigure={selectedFigure}*/}
      {/*    key={move[0].toString() + move[1].toString() + move[2].toString() + Math.random()}*/}
      {/*    position={move}/>,*/}
      {/*)}*/}
    </>
  )
}
