import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initialStateType = {
  id: string
}

const initialState: initialStateType = {
  id: '',
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
