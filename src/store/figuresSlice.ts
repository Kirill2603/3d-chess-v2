import { Pawn } from '../components/figures/Pawn'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FiguresPropsType } from '../components/figures/types'
import { Castle } from '../components/figures/Castle'
import { Knight } from '../components/figures/Knight'
import { Rook } from '../components/figures/Rook'
import { Queen } from '../components/figures/Queen'
import { King } from '../components/figures/King'

export type FigureType = {
  id: string,
  position: [number, number, number]
  color: 'white' | 'black',
  Figure: (props: FiguresPropsType) => JSX.Element | null
}

export type BoardStateType = {
  figures: FigureType[],
  availableMoves: Array<[number, number, number]>,
  beatMoves: Array<[number, number, number]>
}

const initialState: BoardStateType = {
  figures: [
    { id: 'WPawn1', position: [1, 0, 0], color: 'white', Figure: Pawn },
    { id: 'WPawn2', position: [1, 0, 1], color: 'white', Figure: Pawn },
    { id: 'WPawn3', position: [1, 0, 2], color: 'white', Figure: Pawn },
    { id: 'WPawn4', position: [1, 0, 3], color: 'white', Figure: Pawn },
    { id: 'WPawn5', position: [1, 0, 4], color: 'white', Figure: Pawn },
    { id: 'WPawn6', position: [1, 0, 5], color: 'white', Figure: Pawn },
    { id: 'WPawn7', position: [1, 0, 6], color: 'white', Figure: Pawn },
    { id: 'WPawn8', position: [1, 0, 7], color: 'white', Figure: Pawn },
    { id: 'WCastle1', position: [0, 0, 7], color: 'white', Figure: Castle },
    { id: 'WCastle2', position: [0, 0, 0], color: 'white', Figure: Castle },
    { id: 'WKnight1', position: [0, 0, 1], color: 'white', Figure: Knight },
    { id: 'WKnight2', position: [0, 0, 6], color: 'white', Figure: Knight },
    { id: 'WRook1', position: [0, 0, 2], color: 'white', Figure: Rook },
    { id: 'WRook2', position: [0, 0, 5], color: 'white', Figure: Rook },
    { id: 'WQueen', position: [0, 0, 3], color: 'white', Figure: Queen },
    { id: 'WKing', position: [0, 0, 4], color: 'white', Figure: King },

    { id: 'BPawn1', position: [6, 0, 0], color: 'black', Figure: Pawn },
    { id: 'BPawn2', position: [6, 0, 1], color: 'black', Figure: Pawn },
    { id: 'BPawn3', position: [6, 0, 2], color: 'black', Figure: Pawn },
    { id: 'BPawn4', position: [6, 0, 3], color: 'black', Figure: Pawn },
    { id: 'BPawn5', position: [6, 0, 4], color: 'black', Figure: Pawn },
    { id: 'BPawn6', position: [6, 0, 5], color: 'black', Figure: Pawn },
    { id: 'BPawn7', position: [6, 0, 6], color: 'black', Figure: Pawn },
    { id: 'BPawn8', position: [6, 0, 7], color: 'black', Figure: Pawn },
    { id: 'BCastle1', position: [7, 0, 7], color: 'black', Figure: Castle },
    { id: 'BCastle2', position: [7, 0, 0], color: 'black', Figure: Castle },
    { id: 'BKnight1', position: [7, 0, 1], color: 'black', Figure: Knight },
    { id: 'BKnight2', position: [7, 0, 6], color: 'black', Figure: Knight },
    { id: 'BRook1', position: [7, 0, 2], color: 'black', Figure: Rook },
    { id: 'BRook2', position: [7, 0, 5], color: 'black', Figure: Rook },
    { id: 'BQueen', position: [7, 0, 4], color: 'black', Figure: Queen },
    { id: 'BKing', position: [7, 0, 3], color: 'black', Figure: King },
  ],
  availableMoves: [],
  beatMoves: [],
}

const filterMoves = (moves: Array<[number, number, number]>): Array<[number, number, number]> => {
  return moves.filter((move) => {
    if ((move[0] < 0 || move[2] < 0) || (move[0] >= 8 || move[2] >= 8)) {
      return false
    } else {
      return move
    }
  })
}

const knightMovePattern = (position: [number, number, number]): Array<[number, number, number]> => {
  const [x, y, z] = position
  const moves: Array<[number, number, number]> = []
  moves.push(
    [x + 2, y, z + 1],
    [x + 1, y, z + 2],
    [x - 1, y, z - 2],
    [x - 2, y, z - 1],
    [x - 2, y, z + 1],
    [x + 1, y, z - 2],
    [x - 1, y, z + 2],
    [x + 2, y, z - 1],
  )
  return filterMoves(moves)
}

const queenMovesPattern = (position: [number, number, number]): Array<[number, number, number]> => {
  const [x, y, z] = position
  const moves: Array<[number, number, number]> = []
  let i = 1
  while (i < 8) {
    moves.push(
      [x + i, y, z + i],
      [x - i, y, z - i],
      [x + i, y, z - i],
      [x - i, y, z + i],
      [x, y, z + i],
      [x, y, z - i],
      [x + i, y, z],
      [x - i, y, z],
    )
    i++
  }
  return filterMoves(moves)
}

const castleMovesPattern = (position: [number, number, number]): Array<[number, number, number]> => {
  const [x, y, z] = position
  const moves: Array<[number, number, number]> = []
  let i = 1
  while (i < 8) {
    moves.push(
      [x, y, z + i],
      [x, y, z - i],
      [x + i, y, z],
      [x - i, y, z],
    )
    i++
  }
  return filterMoves(moves)
}

const rookMovesPattern = (position: [number, number, number]): Array<[number, number, number]> => {
  const [x, y, z] = position
  const moves: Array<[number, number, number]> = []
  let i = 1
  while (i < 8) {
    moves.push(
      [x + i, y, z + i],
      [x - i, y, z - i],
      [x + i, y, z - i],
      [x - i, y, z + i])
    i++
  }
  return filterMoves(moves)
}

const kingMovePattern = (position: [number, number, number]): Array<[number, number, number]> => {
  const [x, y, z] = position
  const moves: Array<[number, number, number]> = []
  moves.push(
    [x + 1, y, z - 1],
    [x + 1, y, z],
    [x + 1, y, z + 1],
    [x, y, z + 1],
    [x, y, z - 1],
    [x - 1, y, z + 1],
    [x - 1, y, z],
    [x - 1, y, z - 1],
  )
  return filterMoves(moves)
}

export const figuresSlice = createSlice({
  name: 'figures',
  initialState,
  reducers: {
    move: (state, action: PayloadAction<{ id: string, position: [number, number, number] }>) => {
      const figure = state.figures.findIndex(figure => figure.id === action.payload.id)
      state.figures[figure] = { ...state.figures[figure], position: action.payload.position }
    },
    getAvailableMoves: (state, action: PayloadAction<{ id: string | null, position: [number, number, number] }>) => {

      if (action.payload.id && action.payload.id.includes('Pawn')) {
        debugger
        const [x, y, z] = action.payload.position
        if (action.payload.id[0] === 'W') {
          if (x === 1) {
            state.availableMoves.push([x + 1, y, z], [x + 2, y, z])
          } else {
            state.availableMoves.push([x + 1, y, z])
          }
        } else if (action.payload.id[0] === 'B') {
          if (x === 6) {
            state.availableMoves.push([x - 1, y, z], [x - 2, y, z])
          } else {
            state.availableMoves.push([x - 1, y, z])
          }
        }
      }

      if (action.payload.id && action.payload.id.includes('King')) {
        const availableMoves = kingMovePattern(action.payload.position)
        state.availableMoves.push(...availableMoves)
      }

      if (action.payload.id && action.payload.id.includes('Rook')) {
        const availableMoves = rookMovesPattern(action.payload.position)
        state.availableMoves.push(...availableMoves)
      }

      if (action.payload.id && action.payload.id.includes('Castle')) {
        const availableMoves = castleMovesPattern(action.payload.position)
        state.availableMoves.push(...availableMoves)
      }

      if (action.payload.id && action.payload.id.includes('Queen')) {
        const availableMoves = queenMovesPattern(action.payload.position)
        state.availableMoves.push(...availableMoves)
      }

      if (action.payload.id && action.payload.id.includes('Knight')) {
        const availableMoves = knightMovePattern(action.payload.position)
        state.availableMoves.push(...availableMoves)
      }


    },
    resetMoves: (state) => {
      state.availableMoves = []
    },
  },
})

export const { move, getAvailableMoves, resetMoves } = figuresSlice.actions
