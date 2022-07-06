import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Board } from './components/Board/Board'
import { useAppDispatch, useAppSelector } from './store/store'
import { selectFigure } from './store/selectedSlice'
import { getAvailableMoves, resetMoves } from './store/movesSlice'
import { move } from './store/figuresSlice'

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

  const onFigureMove = (id: string, position: [number, number, number]) => {
    dispatch(move({ id, position }))
    dispatch(resetMoves())
    dispatch(selectFigure(''))
  }

  return (
    <Canvas style={{ width: '100vw', height: '100vh' }} shadows>
      <directionalLight
        castShadow
        position={[1, 5, 1]}
        intensity={5.5}
        receiveShadow
      />
      <OrbitControls />
      <Suspense fallback={null}>
        <Environment preset='forest' background />
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
        <Board
          board={board}
          availableMoves={availableMoves}
          selectedFigure={selectedFigure}
          onFigureMove={onFigureMove}
        />
      </Suspense>
    </Canvas>
  )
}

export default App
