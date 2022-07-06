import { createSlice } from '@reduxjs/toolkit'

type BoardStateType = Array<{
  id: string,
  position: [number, number, number],
  color: 'white' | 'black'
}>

const initialState: BoardStateType = []

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    initialState.push({
      id: i.toString() + j.toString(),
      position: [i, -0.36, j],
      color: (i + j) % 2 === 0 ? 'black' : 'white',
    })
  }
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
})

