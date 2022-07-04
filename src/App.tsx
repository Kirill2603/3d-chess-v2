import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Castle } from './components/figures/Castle'
import { King } from './components/figures/King'
import { Knight } from './components/figures/Knight'
import { Pawn } from './components/figures/Pawn'
import { Queen } from './components/figures/Queen'
import { Rook } from './components/figures/Rook'
import { Board } from './components/Board'

function App() {
  return (
      <Canvas style={{width: '100vw', height: '100vh'}} >
        <directionalLight
          castShadow
          position={[2.5, 8, 5]}
          intensity={1.5}
        />
        <OrbitControls />
        <Environment preset='apartment' background />
        <Castle />
        <King />
        <Knight />
        <Pawn />
        <Queen />
        <Rook />
        <Board/>
      </Canvas>
  )
}

export default App
