import { Pawn } from '../components/figures/Pawn'
import { createSlice } from '@reduxjs/toolkit'
import { FiguresPropsType } from '../components/figures/types'
import { Castle } from '../components/figures/Castle'
import { Knight } from '../components/figures/Knight'
import { Rook } from '../components/figures/Rook'
import { Queen } from '../components/figures/Queen'
import { King } from '../components/figures/King'

export type FiguresType = {
  id: string,
  position: [number, number, number]
  color: 'white' | 'black',
  Figure: (props: FiguresPropsType) => JSX.Element | null
}

const initialState: FiguresType[] = [
  {id: 'WPawn1', position: [1,0,0], color: 'white', Figure: Pawn},
  {id: 'WPawn2', position: [1,0,1], color: 'white', Figure: Pawn},
  {id: 'WPawn3', position: [1,0,2], color: 'white', Figure: Pawn},
  {id: 'WPawn4', position: [1,0,3], color: 'white', Figure: Pawn},
  {id: 'WPawn5', position: [1,0,4], color: 'white', Figure: Pawn},
  {id: 'WPawn6', position: [1,0,5], color: 'white', Figure: Pawn},
  {id: 'WPawn7', position: [1,0,6], color: 'white', Figure: Pawn},
  {id: 'WPawn8', position: [1,0,7], color: 'white', Figure: Pawn},
  {id: 'WCastle1', position: [0,0,7], color: 'white', Figure: Castle},
  {id: 'WCastle2', position: [0,0,0], color: 'white', Figure: Castle},
  {id: 'WKnight1', position: [0,0,1], color: 'white', Figure: Knight},
  {id: 'WKnight2', position: [0,0,6], color: 'white', Figure: Knight},
  {id: 'WRook1', position: [0,0,2], color: 'white', Figure: Rook},
  {id: 'WRook2', position: [0,0,5], color: 'white', Figure: Rook},
  {id: 'WQueen', position: [0,0,3], color: 'white', Figure: Queen},
  {id: 'WKing', position: [0,0,4], color: 'white', Figure: King},

  {id: 'BPawn1', position: [6,0,0], color: 'black', Figure: Pawn},
  {id: 'BPawn2', position: [6,0,1], color: 'black', Figure: Pawn},
  {id: 'BPawn3', position: [6,0,2], color: 'black', Figure: Pawn},
  {id: 'BPawn4', position: [6,0,3], color: 'black', Figure: Pawn},
  {id: 'BPawn5', position: [6,0,4], color: 'black', Figure: Pawn},
  {id: 'BPawn6', position: [6,0,5], color: 'black', Figure: Pawn},
  {id: 'BPawn7', position: [6,0,6], color: 'black', Figure: Pawn},
  {id: 'BPawn8', position: [6,0,7], color: 'black', Figure: Pawn},
  {id: 'BCastle1', position: [7,0,7], color: 'black', Figure: Castle},
  {id: 'BCastle2', position: [7,0,0], color: 'black', Figure: Castle},
  {id: 'BKnight1', position: [7,0,1], color: 'black', Figure: Knight},
  {id: 'BKnight2', position: [7,0,6], color: 'black', Figure: Knight},
  {id: 'BRook1', position: [7,0,2], color: 'black', Figure: Rook},
  {id: 'BRook2', position: [7,0,5], color: 'black', Figure: Rook},
  {id: 'BQueen', position: [7,0,4], color: 'black', Figure: Queen},
  {id: 'BKing', position: [7,0,3], color: 'black', Figure: King},
]

export const figuresSlice = createSlice({
  name: 'figures',
  initialState,
  reducers: {
    // move: (state, action: PayloadAction<{ id: string, position: { x: number, y: number } }>) => {
    //   const figure = state.findIndex(figure => figure.id === action.payload.id)
    // //   state[figure] = { ...state[figure], position: action.payload.position }
    // },
  },
})
