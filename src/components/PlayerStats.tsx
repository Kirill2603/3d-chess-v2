import React, { FC } from 'react'
import styles from './PlayerStats.module.css'
import { ReactComponent as UserIcon } from 'assets/user.svg'
import { ReactComponent as PawnIcon } from 'assets/pawn.svg'

type PlayerStatsProps = {
  player: 'w' | 'b'
  isCheck: boolean
  isMate: boolean
}

const PlayerStats: FC<PlayerStatsProps> = ({ player }) => {
  return (
    <div className={styles.playerStats}>
      <UserIcon className={player === 'w' ? styles.w : styles.b}/>
      <div className={styles.statsWrapper}>
        <div className={styles.player}>{player === 'w' ? 'White Player' : 'Black Player'}</div>
        <div className={styles.capturedFigures}>
          <ul>
            <li><PawnIcon className={styles.figureIco}/></li>
            <li><PawnIcon className={styles.figureIco}/></li>
            <li><PawnIcon className={styles.figureIco}/></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PlayerStats