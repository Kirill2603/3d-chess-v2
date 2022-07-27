import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type BoardStateType = {
  figures: any
  availableMoves: any
  beatMoves: any
}

const initialState: BoardStateType = {
  figures: [],
  availableMoves: [],
  beatMoves: [],
}

export const figuresSlice = createSlice({
  name: 'figures',
  initialState,
  reducers: {
    move: (state, action: PayloadAction) => {

    },
    getAvailableMoves: (state, action: PayloadAction) => {

    },
    resetMoves: (state) => {

    },
  },
})

export const { move, getAvailableMoves, resetMoves } = figuresSlice.actions
