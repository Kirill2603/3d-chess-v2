import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Board } from './components/Board/Board'
import { useAppDispatch, useAppSelector } from './store/store'
import { selectFigure } from './store/selectedSlice'
import { getAvailableMoves, resetMoves } from './store/movesSlice'

function App() {

  const dispatch = useAppDispatch()
  const board = useAppSelector(state => state.board)
  const figures = useAppSelector(state => state.figures)
  const selectedFigure = useAppSelector(state => state.selectedFigure.id)
  const availableMoves = useAppSelector(state => state.moves.availableMoves)

  const onFigureSelect = (id: string, position: [number, number, number]) => {
    dispatch(resetMoves())
    dispatch(selectFigure(id))
    dispatch(getAvailableMoves({ id, position }))

  }

  return (
    <Canvas style={{ width: '100vw', height: '100vh' }} shadows>
      <directionalLight
        castShadow
        position={[2.5, 8, 5]}
        intensity={1.5}
      />
      <OrbitControls />
      <Environment preset='apartment' background />
      <Suspense fallback={null}>
        <Environment preset='dawn' background />
        {figures.map(({ Figure, id, color, position }) => {
          return (
            <Figure
              key={id}
              id={id}
              color={(id === selectedFigure) ? 'green' : color}
              position={position}
              onFigureSelect={onFigureSelect}
            />
          )
        })}
        <Board board={board} availableMoves={availableMoves} />
      </Suspense>
    </Canvas>
  )
}

export default App
