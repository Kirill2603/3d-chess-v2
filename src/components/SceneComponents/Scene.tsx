import React, { useCallback } from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import Board from './Board/Board'
import { Canvas } from '@react-three/fiber'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { Square } from 'chess.js'
import { moveFigure, setSelectCell } from '../../store/gameSlice'

// import asd from 'assets/kiara_1_dawn_1k.hdr'

const Scene = () => {

  const dispatch = useAppDispatch()
  const { board, figures, selectedCell, availableMoves, sceneBackground } = useAppSelector(state => state.game)

  const onCellSelect = useCallback((cell: Square) => {
    dispatch(setSelectCell(cell))
  }, [dispatch])

  const onFigureMove = useCallback((target: Square) => {
    dispatch(moveFigure({ target }))
  }, [dispatch])

  return (
    <main style={{ width: '100%', height: '100%' }}>
      <Canvas camera={{ fov: 90, position: [4, 5, -0.5] }}>
        <OrbitControls enablePan={false} minDistance={4} maxDistance={10} />
        <Environment files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@environment/public/img/venice_sunset_1k.hdr" background  />
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
