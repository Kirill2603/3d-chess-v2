import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
