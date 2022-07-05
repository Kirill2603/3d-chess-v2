import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { resetMoves } from './movesSlice'
import { useAppDispatch } from './store'

type initialStateType = {
  id: string | null
}

const initialState: initialStateType = {
  id: null,
}

export const selectedSlice = createSlice({
  name: 'selectedFigure',
  initialState,
  reducers: {
    selectFigure: (state, action: PayloadAction<string>) => {

        state.id = action.payload

    },
  },
})

export const { selectFigure } = selectedSlice.actions
