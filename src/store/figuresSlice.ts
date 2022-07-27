import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type BoardStateType = {
  availableMoves: Array<string>
  beatMoves: any
}

const initialState: BoardStateType = {
  availableMoves: [],
  beatMoves: [],
}

export const figuresSlice = createSlice({
  name: 'figures',
  initialState,
  reducers: {
    move: (state, action: PayloadAction) => {

    },
    getAvailableMoves: (state, action: PayloadAction<Array<string>>) => {
      state.availableMoves = action.payload
    },
    resetMoves: (state) => {

    },
  },
})

export const { move, getAvailableMoves, resetMoves } = figuresSlice.actions
