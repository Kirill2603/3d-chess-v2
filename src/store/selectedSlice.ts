import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initialStateType = {
  selectedCell: string
}

const initialState: initialStateType = {
  selectedCell: '',
}

export const selectedSlice = createSlice({
  name: 'selectedFigure',
  initialState,
  reducers: {
    setSelectCell: (state, action: PayloadAction<string>) => {
        state.selectedCell = action.payload
    },
  },
})

export const { setSelectCell } = selectedSlice.actions
