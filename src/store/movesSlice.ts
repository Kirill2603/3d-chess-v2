import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AvailableMovesType = {
  availableMoves: Array<[number, number, number]>
}

const initialState: AvailableMovesType = {
  availableMoves: [],
}

const filterMoves = (moves: Array<[number, number, number]>): Array<[number, number, number]> => {
  return moves.filter((move) => {
    if ((move[0] < 0 || move[2] < 0) || (move[0] >= 8 || move[2] >= 8)) {
      return false
    } else {
      return move
    }
  })
}

const knightMovePattern = (position: [number, number, number]): Array<[number, number, number]> => {
  const [x, y, z] = position
  const moves: Array<[number, number, number]> = []
  moves.push(
    [x + 2, y, z + 1],
    [x + 1, y, z + 2],
    [x - 1, y, z - 2],
    [x - 2, y, z - 1],
    [x - 2, y, z + 1],
    [x + 1, y, z - 2],
    [x - 1, y, z + 2],
    [x + 2, y, z - 1],
  )
  return filterMoves(moves)
}

const queenMovesPattern = (position: [number, number, number]): Array<[number, number, number]> => {
  const [x, y, z] = position
  const moves: Array<[number, number, number]> = []
  let i = 1
  while (i < 8) {
    moves.push(
      [x + i, y, z + i],
      [x - i, y, z - i],
      [x + i, y, z - i],
      [x - i, y, z + i],
      [x, y, z + i],
      [x, y, z - i],
      [x + i, y, z],
      [x - i, y, z],
    )
    i++
  }
  return filterMoves(moves)
}

const castleMovesPattern = (position: [number, number, number]): Array<[number, number, number]> => {
  const [x, y, z] = position
  const moves: Array<[number, number, number]> = []
  let i = 1
  while (i < 8) {
    moves.push(
      [x, y, z + i],
      [x, y, z - i],
      [x + i, y, z],
      [x - i, y, z],
    )
    i++
  }
  return filterMoves(moves)
}

const rookMovesPattern = (position: [number, number, number]): Array<[number, number, number]> => {
  const [x, y, z] = position
  const moves: Array<[number, number, number]> = []
  let i = 1
  while (i < 8) {
    moves.push(
      [x + i, y, z + i],
      [x - i, y, z - i],
      [x + i, y, z - i],
      [x - i, y, z + i])
    i++
  }
  return filterMoves(moves)
}

const kingMovePattern = (position: [number, number, number]): Array<[number, number, number]> => {
  const [x, y, z] = position
  const moves: Array<[number, number, number]> = []
  moves.push(
    [x + 1, y, z - 1],
    [x + 1, y, z],
    [x + 1, y, z + 1],
    [x, y, z + 1],
    [x, y, z - 1],
    [x - 1, y, z + 1],
    [x - 1, y, z],
    [x - 1, y, z - 1],
  )
  return filterMoves(moves)
}

export const movesSlice = createSlice({
  name: 'availableMoves',
  initialState,
  reducers: {
    getAvailableMoves: (state, action: PayloadAction<{ id: string | null, position: [number, number, number] }>) => {
      const [x, y, z] = action.payload.position

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

      if (action.payload.id && action.payload.id.includes('King')) {
        const availableMoves = kingMovePattern(action.payload.position)
        state.availableMoves.push(...availableMoves)
      }

      if (action.payload.id && action.payload.id.includes('Rook')) {
        const availableMoves = rookMovesPattern(action.payload.position)
        state.availableMoves.push(...availableMoves)
      }

      if (action.payload.id && action.payload.id.includes('Castle')) {
        const availableMoves = castleMovesPattern(action.payload.position)
        state.availableMoves.push(...availableMoves)
      }

      if (action.payload.id && action.payload.id.includes('Queen')) {
        const availableMoves = queenMovesPattern(action.payload.position)
        state.availableMoves.push(...availableMoves)
      }

      if (action.payload.id && action.payload.id.includes('Knight')) {
        const availableMoves = knightMovePattern(action.payload.position)
        state.availableMoves.push(...availableMoves)
      }


    },
    resetMoves: (state) => {
      state.availableMoves = []
    },
  },
})

export const { getAvailableMoves, resetMoves } = movesSlice.actions
