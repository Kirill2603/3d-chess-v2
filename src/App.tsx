import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { useAppDispatch, useAppSelector } from './store/store'
import { Board } from './components/Board/Board'

function App() {

  const dispatch = useAppDispatch()
  const { board, figures } = useAppSelector(state => state.board)
  const selectedFigure = useAppSelector(state => state.selectedFigure.id)
  const availableMoves = useAppSelector(state => state.figures.availableMoves)

  console.log(figures)

  const onFigureSelect = () => {

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
      <Board board={board} figures={figures}/>
    </Canvas>
  )
}

export default App
