import React, { useEffect, useState } from 'react'
import { Chess } from 'chess.js'
import { Cell } from './components/Cell'
import { BoardDesk } from './components/BoardDesk'

function App() {

  const chess = new Chess()
  const board = chess.board()
  const [moves, setMoves] = useState<string[]>([])

  // useEffect(() => {
  //   setMoves(chess.moves({square: selected}))
  // }, [selected])

  console.log(chess.board())

  return (
    <>
      <BoardDesk />
    </>
  )
}

export default App
