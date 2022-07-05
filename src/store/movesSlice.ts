import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Pawn } from '../components/figures/Pawn'

type AvailableMovesType = {
  availableMoves: Array<[number, number, number]>
}

const initialState: AvailableMovesType = {
  availableMoves: [],
}

export const movesSlice = createSlice({
  name: 'availableMoves',
  initialState,
  reducers: {
    getAvailableMoves: (state, action: PayloadAction<{ id: string | null, position: [number, number, number] }>) => {
      const [x, y, z] = action.payload.position
      console.log(action.payload.id)
      if (action.payload.id && action.payload.id.includes('Pawn')) {
        if (action.payload.id[0] === 'W') {
          if (x === 1) {
            state.availableMoves.push([x + 1, y, z], [x + 2, y, z])
          } else {
            state.availableMoves.push([x + 1, y, z])
          }
        } else if (action.payload.id[0] === 'B') {
          if (x === 6) {
            state.availableMoves.push([x - 1, y, z], [x - 2, y, z])
          } else {
            state.availableMoves.push([x - 1, y, z])
          }
        }
      }

      if (action.payload.id && action.payload.id.includes('Castle')) {
        let i = 1
        while (i !== 8) {
          if (!((x + i) >= 8)) {
            state.availableMoves.push([x + i, y, z])
          }
          if (!((z + i) >= 8)) {
            state.availableMoves.push([x, y, z + i])
          }
          if (!((x - i) < 0)) {
            state.availableMoves.push([x - i, y, z])
          }
          if (!((z - i) < 0)) {
            state.availableMoves.push([x, y, z - i])
          }
          i++
        }
      }

      // if (action.payload.id.includes('King')) {
      //   console.log('King', 'position:', action.payload.position, 'color', action.payload.id[0])
      // }
      //
      if (action.payload.id && action.payload.id.includes('Rook')) {
        let i = 1
        while ((x+i)<8 && (z+i)<8) {
          state.availableMoves.push([x + i, y, z + i])
          i++
        }
        i = 1
        while ((x-i)>=0 && (z-i)>=0) {
          state.availableMoves.push([x - i, y, z - i])
          i++
        }
        i = 1
        while ((x+i)<8 && (z-i)>=0) {
          state.availableMoves.push([x + i, y, z - i])
          i++
        }
        while ((x-i)>=0 && (z+i)<8) {
          state.availableMoves.push([x - i, y, z + i])
          i++
        }
      }
      //
      // if (action.payload.id.includes('Queen')) {
      //   console.log('Queen', 'position:', action.payload.position, 'color', action.payload.id[0])
      // }
      //
      // if (action.payload.id.includes('Knight')) {
      //   console.log('Knight', 'position:', action.payload.position, 'color', action.payload.id[0])
      // }
    },
    resetMoves: (state) => {
      state.availableMoves = []
    },
  },
})

export const { getAvailableMoves, resetMoves } = movesSlice.actions
