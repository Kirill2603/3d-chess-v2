import React from 'react'
import Scene from './components/SceneComponents/Scene'
import Sidebar from './components/Sidebar/Sidebar'
import styles from './app.module.css'
import PlayerStats from './components/PlayerStats'
import { useAppSelector } from './store/store'

function App() {

  const { history, isCheck, isMate } = useAppSelector(state => state.game)

  return (
    <div className={styles.app}>
      <div className={styles.appBlock}>
        <PlayerStats player='b' isCheck={isCheck} isMate={isMate} />
        <Scene />
        <PlayerStats player='w' isCheck={isCheck} isMate={isMate} />
      </div>
      <Sidebar history={history}/>
    </div>

  )
}

export default App
