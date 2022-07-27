import React, { useState } from 'react'
import { useAppSelector } from '../store/store'

export const BoardDesk = () => {

  // const boardDesk = [
  //   ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8'],
  //   ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
  //   ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
  //   ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
  //   ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
  //   ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
  //   ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
  //   ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
  // ]

  // const board2: Array<Array<{ x: number, y: number, figure?: string }>> = [
  //   [
  //     { x: 0, y: 0, figure: 'WCastle' },
  //     { x: 0, y: 1, figure: 'WKnight' },
  //     { x: 0, y: 2, figure: 'WRook' },
  //     { x: 0, y: 3, figure: 'WQueen' },
  //     { x: 0, y: 4, figure: 'WKing' },
  //     { x: 0, y: 5, figure: 'WRook' },
  //     { x: 0, y: 6, figure: 'WKnight' },
  //     { x: 0, y: 7, figure: 'WCastle' },
  //   ],
  //   [
  //     { x: 1, y: 0, figure: 'WPawn' },
  //     { x: 1, y: 1, figure: 'WPawn' },
  //     { x: 1, y: 2, figure: 'WPawn' },
  //     { x: 1, y: 3, figure: 'WPawn' },
  //     { x: 1, y: 4, figure: 'WPawn' },
  //     { x: 1, y: 5, figure: 'WPawn' },
  //     { x: 1, y: 6, figure: 'WPawn' },
  //     { x: 1, y: 7, figure: 'WPawn' },
  //   ],
  //   [
  //     { x: 2, y: 0 },
  //     { x: 2, y: 1 },
  //     { x: 2, y: 2 },
  //     { x: 2, y: 3 },
  //     { x: 2, y: 4 },
  //     { x: 2, y: 5 },
  //     { x: 2, y: 6 },
  //     { x: 2, y: 7 },
  //   ],
  //   [
  //     { x: 3, y: 0 },
  //     { x: 3, y: 1 },
  //     { x: 3, y: 2 },
  //     { x: 3, y: 3 },
  //     { x: 3, y: 4 },
  //     { x: 3, y: 5 },
  //     { x: 3, y: 6 },
  //     { x: 3, y: 7 },
  //   ],
  //   [
  //     { x: 4, y: 0 },
  //     { x: 4, y: 1 },
  //     { x: 4, y: 2 },
  //     { x: 4, y: 3 },
  //     { x: 4, y: 4 },
  //     { x: 4, y: 5 },
  //     { x: 4, y: 6 },
  //     { x: 4, y: 7 },
  //   ],
  //   [
  //     { x: 5, y: 0 },
  //     { x: 5, y: 1 },
  //     { x: 5, y: 2 },
  //     { x: 5, y: 3 },
  //     { x: 5, y: 4 },
  //     { x: 5, y: 5 },
  //     { x: 5, y: 6 },
  //     { x: 5, y: 7 },
  //   ],
  //   [
  //     { x: 6, y: 0, figure: 'BPawn' },
  //     { x: 6, y: 1, figure: 'BPawn' },
  //     { x: 6, y: 2, figure: 'BPawn' },
  //     { x: 6, y: 3, figure: 'BPawn' },
  //     { x: 6, y: 4, figure: 'BPawn' },
  //     { x: 6, y: 5, figure: 'BPawn' },
  //     { x: 6, y: 6, figure: 'BPawn' },
  //     { x: 6, y: 7, figure: 'BPawn' },
  //   ],
  //   [
  //     { x: 7, y: 0, figure: 'BCastle' },
  //     { x: 7, y: 1, figure: 'BKnight' },
  //     { x: 7, y: 2, figure: 'BRook' },
  //     { x: 7, y: 3, figure: 'BQueen' },
  //     { x: 7, y: 4, figure: 'BKing' },
  //     { x: 7, y: 5, figure: 'BRook' },
  //     { x: 7, y: 6, figure: 'BKnight' },
  //     { x: 7, y: 7, figure: 'BCastle' },
  //   ],
  //
  // ]
  const board = useAppSelector(state => state.game.board)

  const [selected, setSelected] = useState<{ x: number, y: number } | null>(null)
  const style = {
    width: '60px',
    height: '60px',
    border: '1px solid black',
  }

  let colorIterator = 0

  const onSelectCell = (x: number, y: number) => {
    if (x === selected?.x && y === selected?.y) {
      setSelected(null)
    } else {
      setSelected({x,y})
    }

    if (selected) {

    }
  }

  return (
    <>
      {board.map((row,index) => {
        colorIterator++
        return (
          <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {row.map((cell, index) => {
              return (
                <span
                  key={index}
                  onClick={() => onSelectCell( cell.x, cell.y )}
                  style={{
                    backgroundColor: (colorIterator + index) % 2 === 0 ? 'white' : 'black',
                    color: (colorIterator + index) % 2 === 0 ? 'black' : 'white',
                    height: '40px',
                    width: '40px' }}
                >
                  {cell.figure && cell.x === selected?.x && cell.y === selected?.y ? <div>0</div> : null}
                  {cell && cell?.figure}
                </span>
              )
            })}
          </div>
        )
      })}
    </>
  )
}
