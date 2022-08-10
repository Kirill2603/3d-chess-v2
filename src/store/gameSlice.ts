import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Chess, Move, PieceType, Square } from 'chess.js'

export let chess = new Chess()

export type BoardDesk = Array<Square[]>

export type FigureType = {
  square: Square
  type: PieceType
  color: 'b' | 'w'
}

type BoardStateType = {
  board: BoardDesk
  figures: Array<Array<FigureType | null>>
  selectedCell: Square | null
  availableMoves: Array<Move> | []
  AiAvailableMoves: Array<string> | []
  history: Array<Move>
  whoseMove: 'w' | 'b'
  gameType: 'singlePlayer' | 'AI'
  isCheck: boolean
  isMate: boolean
}
const initialState: BoardStateType = {
  board: [
    ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8'],
    ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
    ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
    ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
    ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
    ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
    ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
    ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
  ],
  figures: chess.board(),
  selectedCell: null,
  availableMoves: [],
  AiAvailableMoves: [],
  whoseMove: 'w',
  history: chess.history({ verbose: true }),
  gameType: 'AI',
  isCheck: chess.in_check(),
  isMate: chess.game_over(),
}

export const gameSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    moveFigure: (state, action: PayloadAction<{ target: Square }>) => {
      if (state.selectedCell && state.gameType === 'singlePlayer') {
        chess.move({ from: state.selectedCell, to: action.payload.target, promotion: 'q' })
        state.selectedCell = null
        state.availableMoves = []
        state.history = chess.history({ verbose: true })
        state.whoseMove === 'w' ? state.whoseMove = 'b' : state.whoseMove = 'w'
        state.isCheck = chess.in_check()
        state.isMate = chess.game_over()
        state.figures = chess.board()
      }
      if (state.gameType === 'AI' && state.selectedCell) {
        chess.move({ from: state.selectedCell, to: action.payload.target, promotion: 'q' })
        state.selectedCell = null
        state.availableMoves = []
        state.history = chess.history({ verbose: true })
        state.AiAvailableMoves = chess.moves()
        const randomMove = Math.floor(Math.random() * state.AiAvailableMoves.length)
        chess.move(state.AiAvailableMoves[randomMove])
        state.isCheck = chess.in_check()
        state.isMate = chess.game_over()
        state.figures = chess.board()
      }
    },
    setSelectCell: (state, action: PayloadAction<Square>) => {
      const colorOfSelectedFigure = chess.get(action.payload)?.color
      if (colorOfSelectedFigure === state.whoseMove) {
        state.selectedCell = action.payload
        state.availableMoves = chess.moves({ square: action.payload, verbose: true, legal: true })
      }
    },
    setGameType: (state, action: PayloadAction<'singlePlayer' | 'AI'>) => {
      state.gameType = action.payload
      chess = new Chess()
      state.figures = chess.board()
      state.selectedCell = null
      state.history =[]
    }
  },
})

export const { setSelectCell, moveFigure, setGameType } = gameSlice.actions

