import React  from 'react'
import Scene from './components/SceneComponents/Scene'
import Sidebar from './components/Sidebar/Sidebar'
import styles from './app.module.css'
import PlayerStats from './components/PlayerStats'

function App() {

  return (
    <div className={styles.app}>
      <div className={styles.appBlock}>
        <PlayerStats />
        <Scene />
        <PlayerStats />
      </div>
      <Sidebar />
    </div>

  )
}

export default App
