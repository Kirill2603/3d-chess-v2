import { createSlice, PayloadAction } from '@reduxjs/toolkit'

enum Colors {
  WHITE = 'white',
  BLACK = 'black',
}

enum Figures {
  CASTLE = 'castle',
  KING = 'king',
  KNIGHT = 'knight',
  PAWN = 'pawn',
  QUEEN = 'queen',
  ROOK = 'rook',
}


type initialStateType = {
  board: Array<Array<{ x: number, y: number, figure?: Figures, color?: Colors }>>
}

const initialState: initialStateType = {
  board: [
  [
    { x: 0, y: 0, figure: Figures.CASTLE, color: Colors.WHITE },
    { x: 0, y: 1, figure: Figures.KNIGHT, color: Colors.WHITE },
    { x: 0, y: 2, figure: Figures.ROOK, color: Colors.WHITE },
    { x: 0, y: 3, figure: Figures.QUEEN, color: Colors.WHITE },
    { x: 0, y: 4, figure: Figures.KING, color: Colors.WHITE },
    { x: 0, y: 5, figure: Figures.ROOK, color: Colors.WHITE },
    { x: 0, y: 6, figure: Figures.KNIGHT, color: Colors.WHITE },
    { x: 0, y: 7, figure: Figures.CASTLE, color: Colors.WHITE },
  ],
  [
    { x: 1, y: 0, figure: Figures.PAWN, color: Colors.WHITE },
    { x: 1, y: 1, figure: Figures.PAWN, color: Colors.WHITE },
    { x: 1, y: 2, figure: Figures.PAWN, color: Colors.WHITE },
    { x: 1, y: 3, figure: Figures.PAWN, color: Colors.WHITE },
    { x: 1, y: 4, figure: Figures.PAWN, color: Colors.WHITE },
    { x: 1, y: 5, figure: Figures.PAWN, color: Colors.WHITE },
    { x: 1, y: 6, figure: Figures.PAWN, color: Colors.WHITE },
    { x: 1, y: 7, figure: Figures.PAWN, color: Colors.WHITE },
  ],
  [
    { x: 2, y: 0 },
    { x: 2, y: 1 },
    { x: 2, y: 2 },
    { x: 2, y: 3 },
    { x: 2, y: 4 },
    { x: 2, y: 5 },
    { x: 2, y: 6 },
    { x: 2, y: 7 },
  ],
  [
    { x: 3, y: 0 },
    { x: 3, y: 1 },
    { x: 3, y: 2 },
    { x: 3, y: 3 },
    { x: 3, y: 4 },
    { x: 3, y: 5 },
    { x: 3, y: 6 },
    { x: 3, y: 7 },
  ],
  [
    { x: 4, y: 0 },
    { x: 4, y: 1 },
    { x: 4, y: 2 },
    { x: 4, y: 3 },
    { x: 4, y: 4 },
    { x: 4, y: 5 },
    { x: 4, y: 6 },
    { x: 4, y: 7 },
  ],
  [
    { x: 5, y: 0 },
    { x: 5, y: 1 },
    { x: 5, y: 2 },
    { x: 5, y: 3 },
    { x: 5, y: 4 },
    { x: 5, y: 5 },
    { x: 5, y: 6 },
    { x: 5, y: 7 },
  ],
  [
    { x: 6, y: 0, figure: Figures.PAWN, color: Colors.BLACK },
    { x: 6, y: 1, figure: Figures.PAWN, color: Colors.BLACK },
    { x: 6, y: 2, figure: Figures.PAWN, color: Colors.BLACK },
    { x: 6, y: 3, figure: Figures.PAWN, color: Colors.BLACK },
    { x: 6, y: 4, figure: Figures.PAWN, color: Colors.BLACK },
    { x: 6, y: 5, figure: Figures.PAWN, color: Colors.BLACK },
    { x: 6, y: 6, figure: Figures.PAWN, color: Colors.BLACK },
    { x: 6, y: 7, figure: Figures.PAWN, color: Colors.BLACK },
  ],
  [
    { x: 7, y: 0, figure: Figures.CASTLE, color: Colors.BLACK },
    { x: 7, y: 1, figure: Figures.KNIGHT, color: Colors.BLACK },
    { x: 7, y: 2, figure: Figures.ROOK, color: Colors.BLACK },
    { x: 7, y: 3, figure: Figures.QUEEN, color: Colors.BLACK },
    { x: 7, y: 4, figure: Figures.KING, color: Colors.BLACK },
    { x: 7, y: 5, figure: Figures.ROOK, color: Colors.BLACK },
    { x: 7, y: 6, figure: Figures.KNIGHT, color: Colors.BLACK },
    { x: 7, y: 7, figure: Figures.CASTLE, color: Colors.BLACK },
  ],

]
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
})

