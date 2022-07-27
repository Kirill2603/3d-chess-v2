import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { useAppDispatch, useAppSelector } from './store/store'
import { Board } from './components/Board/Board'
import { setSelectCell } from './store/selectedSlice'
import { chess } from './store/boardSlice'
import { getAvailableMoves } from './store/figuresSlice'

function App() {

  const dispatch = useAppDispatch()
  const { board, figures } = useAppSelector(state => state.board)
  const { selectedCell } = useAppSelector(state => state.selectedCell)
  const { availableMoves } = useAppSelector(state => state.figures)

  const onCellSelect = (cell: string) => {
    dispatch(setSelectCell(cell))
    dispatch(getAvailableMoves(chess.moves({square: cell})))
  }

  const onFigureMove = () => {

  }

  return (
    <Canvas style={{ width: '100%', height: '100%' }} shadows>
      <directionalLight
        castShadow
        position={[1, 5, 1]}
        intensity={5.5}
        receiveShadow
      />
      <OrbitControls />
      <Environment preset='forest' background />
      <Board board={board} figures={figures} selectedCell={selectedCell} onCellSelect={onCellSelect} availableMoves={availableMoves}/>
    </Canvas>
  )
}

export default App
