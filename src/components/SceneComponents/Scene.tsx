import React, { useCallback } from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import Board from './Board/Board'
import { Canvas } from '@react-three/fiber'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { Square } from 'chess.js'
import { moveFigure, setSelectCell } from '../../store/gameSlice'

const Scene = () => {

  const dispatch = useAppDispatch()
  const { board, figures, selectedCell, availableMoves } = useAppSelector(state => state.game)

  const onCellSelect = useCallback((cell: Square) => {
    dispatch(setSelectCell(cell))
  }, [dispatch])

  const onFigureMove = useCallback((target: Square) => {
    dispatch(moveFigure({ target }))
  }, [dispatch])

  return (
    <main>
      <Canvas camera={{ fov: 90, position: [4, 5, -0.5] }} style={{width: '700px', height: '700px'}}>
        <directionalLight
          position={[1, 10, 10]}
          intensity={1.5}
        />
        <pointLight position={[4,4,4]}/>
        <OrbitControls enablePan={false} minDistance={4} maxDistance={10} />
        <Environment preset='forest' background />
        <Board
          board={board}
          figures={figures}
          selectedCell={selectedCell}
          onCellSelect={onCellSelect}
          availableMoves={availableMoves}
          onFigureMove={onFigureMove} />
      </Canvas>
    </main>
  )
}

export default Scene
