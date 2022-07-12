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

interface FigureType {
  id: string,
  x: number,
  y: number,
  color: Colors,
  Figure: Figures
}

type initialStateType = {
  figures: FigureType[],
  board: Array<FigureType[] | {}>
}

// const board: Array<FigureType[] | {}> = [
//   [
//     { id: 'WCastle1', x: 0, y: 0, color: Colors.WHITE, Figure: Figures.CASTLE },
//     { id: 'WCastle2', x: 7, y: 0, color: Colors.WHITE, Figure: Figures.CASTLE },
//     { id: 'WKnight1', x: 1, y: 0, color: Colors.WHITE, Figure: Figures.KNIGHT },
//     { id: 'WKnight2', x: 6, y: 0, color: Colors.WHITE, Figure: Figures.KNIGHT },
//     { id: 'WRook1', x: 2, y: 0, color: Colors.WHITE, Figure: Figures.ROOK },
//     { id: 'WRook2', x: 5, y: 0, color: Colors.WHITE, Figure: Figures.ROOK },
//     { id: 'WKing', x: 4, y: 0, color: Colors.WHITE, Figure: Figures.KING },
//     { id: 'WQueen', x: 3, y: 0, color: Colors.WHITE, Figure: Figures.QUEEN },
//   ],
//   [
//     { id: 'WPawn1', x: 0, y: 1, color: Colors.WHITE, Figure: Figures.PAWN },
//     { id: 'WPawn2', x: 1, y: 1, color: Colors.WHITE, Figure: Figures.PAWN },
//     { id: 'WPawn3', x: 2, y: 1, color: Colors.WHITE, Figure: Figures.PAWN },
//     { id: 'WPawn4', x: 3, y: 1, color: Colors.WHITE, Figure: Figures.PAWN },
//     { id: 'WPawn5', x: 4, y: 1, color: Colors.WHITE, Figure: Figures.PAWN },
//     { id: 'WPawn6', x: 5, y: 1, color: Colors.WHITE, Figure: Figures.PAWN },
//     { id: 'WPawn7', x: 6, y: 1, color: Colors.WHITE, Figure: Figures.PAWN },
//     { id: 'WPawn8', x: 7, y: 1, color: Colors.WHITE, Figure: Figures.PAWN },
//   ],
//   [
//     {},{},{},{},{},{},{},{}
//   ],
//   [
//     {},{},{},{},{},{},{},{}
//   ],
//   [
//     {},{},{},{},{},{},{},{}
//   ],
//   [
//     {},{},{},{},{},{},{},{}
//   ],
//   [
//     { id: 'BPawn1', x: 0, y: 6, color: Colors.BLACK, Figure: Figures.PAWN },
//     { id: 'BPawn2', x: 1, y: 6, color: Colors.BLACK, Figure: Figures.PAWN },
//     { id: 'BPawn3', x: 2, y: 6, color: Colors.BLACK, Figure: Figures.PAWN },
//     { id: 'BPawn4', x: 3, y: 6, color: Colors.BLACK, Figure: Figures.PAWN },
//     { id: 'BPawn5', x: 4, y: 6, color: Colors.BLACK, Figure: Figures.PAWN },
//     { id: 'BPawn6', x: 5, y: 6, color: Colors.BLACK, Figure: Figures.PAWN },
//     { id: 'BPawn7', x: 6, y: 6, color: Colors.BLACK, Figure: Figures.PAWN },
//     { id: 'BPawn8', x: 7, y: 6, color: Colors.BLACK, Figure: Figures.PAWN },
//   ],
//   [
//     { id: 'BCastle1', x: 0, y: 7, color: Colors.BLACK, Figure: Figures.CASTLE },
//     { id: 'BCastle2', x: 7, y: 7, color: Colors.BLACK, Figure: Figures.CASTLE },
//     { id: 'BKnight1', x: 1, y: 7, color: Colors.BLACK, Figure: Figures.KNIGHT },
//     { id: 'BKnight2', x: 6, y: 7, color: Colors.BLACK, Figure: Figures.KNIGHT },
//     { id: 'BRook1', x: 2, y: 7, color: Colors.BLACK, Figure: Figures.ROOK },
//     { id: 'BRook2', x: 5, y: 7, color: Colors.BLACK, Figure: Figures.ROOK },
//     { id: 'BKing', x: 4, y: 7, color: Colors.BLACK, Figure: Figures.KING },
//     { id: 'BQueen', x: 3, y: 7, color: Colors.BLACK, Figure: Figures.QUEEN },
//   ],
// ]

const initialState: initialStateType = {
  figures: [
    { id: 'WPawn1', x: 0, y: 1, color: Colors.WHITE, Figure: Figures.PAWN },
    { id: 'WPawn2', x: 1, y: 1, color: Colors.WHITE, Figure: Figures.PAWN },
    { id: 'WPawn3', x: 2, y: 1, color: Colors.WHITE, Figure: Figures.PAWN },
    { id: 'WPawn4', x: 3, y: 1, color: Colors.WHITE, Figure: Figures.PAWN },
    { id: 'WPawn5', x: 4, y: 1, color: Colors.WHITE, Figure: Figures.PAWN },
    { id: 'WPawn6', x: 5, y: 1, color: Colors.WHITE, Figure: Figures.PAWN },
    { id: 'WPawn7', x: 6, y: 1, color: Colors.WHITE, Figure: Figures.PAWN },
    { id: 'WPawn8', x: 7, y: 1, color: Colors.WHITE, Figure: Figures.PAWN },
    { id: 'WCastle1', x: 0, y: 0, color: Colors.WHITE, Figure: Figures.CASTLE },
    { id: 'WCastle2', x: 7, y: 0, color: Colors.WHITE, Figure: Figures.CASTLE },
    { id: 'WKnight1', x: 1, y: 0, color: Colors.WHITE, Figure: Figures.KNIGHT },
    { id: 'WKnight2', x: 6, y: 0, color: Colors.WHITE, Figure: Figures.KNIGHT },
    { id: 'WRook1', x: 2, y: 0, color: Colors.WHITE, Figure: Figures.ROOK },
    { id: 'WRook2', x: 5, y: 0, color: Colors.WHITE, Figure: Figures.ROOK },
    { id: 'WKing', x: 4, y: 0, color: Colors.WHITE, Figure: Figures.KING },
    { id: 'WQueen', x: 3, y: 0, color: Colors.WHITE, Figure: Figures.QUEEN },

    { id: 'BPawn1', x: 0, y: 6, color: Colors.BLACK, Figure: Figures.PAWN },
    { id: 'BPawn2', x: 1, y: 6, color: Colors.BLACK, Figure: Figures.PAWN },
    { id: 'BPawn3', x: 2, y: 6, color: Colors.BLACK, Figure: Figures.PAWN },
    { id: 'BPawn4', x: 3, y: 6, color: Colors.BLACK, Figure: Figures.PAWN },
    { id: 'BPawn5', x: 4, y: 6, color: Colors.BLACK, Figure: Figures.PAWN },
    { id: 'BPawn6', x: 5, y: 6, color: Colors.BLACK, Figure: Figures.PAWN },
    { id: 'BPawn7', x: 6, y: 6, color: Colors.BLACK, Figure: Figures.PAWN },
    { id: 'BPawn8', x: 7, y: 6, color: Colors.BLACK, Figure: Figures.PAWN },
    { id: 'BCastle1', x: 0, y: 7, color: Colors.BLACK, Figure: Figures.CASTLE },
    { id: 'BCastle2', x: 7, y: 7, color: Colors.BLACK, Figure: Figures.CASTLE },
    { id: 'BKnight1', x: 1, y: 7, color: Colors.BLACK, Figure: Figures.KNIGHT },
    { id: 'BKnight2', x: 6, y: 7, color: Colors.BLACK, Figure: Figures.KNIGHT },
    { id: 'BRook1', x: 2, y: 7, color: Colors.BLACK, Figure: Figures.ROOK },
    { id: 'BRook2', x: 5, y: 7, color: Colors.BLACK, Figure: Figures.ROOK },
    { id: 'BKing', x: 4, y: 7, color: Colors.BLACK, Figure: Figures.KING },
    { id: 'BQueen', x: 3, y: 7, color: Colors.BLACK, Figure: Figures.QUEEN },
  ],
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
})

