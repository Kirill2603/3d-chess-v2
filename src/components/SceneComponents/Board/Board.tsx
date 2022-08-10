import React, { FC } from 'react'
import { BoardDesk, FigureType } from '../../../store/gameSlice'
import Cell from './Cell'
import Figure from '../Figures/Figure'
import { Move, Square } from 'chess.js'
import { Text } from '@react-three/drei'

type BoardPropsType = {
  board: BoardDesk
  figures: Array<Array<FigureType | null>>
  selectedCell: Square | null
  onCellSelect: (cell: Square) => void
  availableMoves: Array<Move> | []
  onFigureMove: (targetCell: Square) => void
}

const rowNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

const Board: FC<BoardPropsType> = ({
  board,
  figures,
  onCellSelect,
  selectedCell,
  availableMoves,
  onFigureMove,
}) => {
  return (
    <group position={[-3.5, 0, 3.5]}>
      {board.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          <Text
            rotation={[-1.6, 0, 1.6]}
            position={[rowIndex, 0, 1]}
            color={'black'}
            fontSize={0.5}
            children={8 - rowIndex}
          />
          {row.map((cell, cellIndex) => (
            <Cell
              availableMoves={availableMoves}
              onFigureMove={onFigureMove}
              onCellSelect={onCellSelect}
              key={rowIndex.toString() + cellIndex.toString()}
              cell={cell}
              color={(cellIndex + rowIndex) % 2 === 0 ? 'white' : 'black'}
              position={{ x: rowIndex, y: -cellIndex }}
            />
          ))}
          <Text
            rotation={[-1.6, 0, -1.6]}
            position={[rowIndex, 0, -8]}
            color={'black'}
            fontSize={0.5}
            children={8 - rowIndex}
          />
        </React.Fragment>
      ))}
      {figures.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((figure, cellIndex) => (
            <Figure
              key={rowIndex.toString() + cellIndex.toString()}
              position={{ x: rowIndex, y: -cellIndex }}
              selected={!!(figure && figure.square === selectedCell)}
              figure={figure}
            />
          ))}
        </React.Fragment>
      ))}
      <group>
        {rowNames.map((cellText, index) => (
          <Text
            key={cellText + index}
            rotation={[-1.6, 0, -1.6]}
            position={[-1, 0, -index]}
            color={'black'}
            fontSize={0.5}
            children={cellText}
          />
        ))}
      </group>
      <group>
        {rowNames.map((cellText, index) => (
          <Text
            key={index + cellText}
            rotation={[-1.6, 0, 1.6]}
            position={[8, 0, -index]}
            color={'black'}
            fontSize={0.5}
            children={cellText}
          />
        ))}
      </group>
    </group>
  )
}

export default Board
