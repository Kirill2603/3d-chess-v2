import { Vector3 } from 'three'
import { createSlice } from '@reduxjs/toolkit'

type BoardStateType = Array<{
  id: string,
  position: Vector3,
  color: 'white' | 'black'
}>

const initialState: BoardStateType = [
]

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    initialState.push({
      id: i.toString() + j.toString(),
      position: new Vector3(i, -0.36, j),
      color: (i + j) % 2 === 0 ? 'white' : 'black',
    })
  }
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {

  }
})

