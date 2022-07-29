import React, { FC } from 'react'
import styles from './PlayerStats.module.css'
import { Move, PieceType } from 'chess.js'
import { ReactComponent as UserIcon } from 'assets/user.svg'
import { ReactComponent as PawnIcon } from 'assets/pawn.svg'
import { ReactComponent as KingIcon, ReactComponent as KnightIcon } from '../assets/knight.svg'
import { ReactComponent as BishopIcon } from '../assets/bishop.svg'
import { ReactComponent as RookIcon } from '../assets/rook.svg'
import { ReactComponent as QueenIcon } from '../assets/queen.svg'

type PlayerStatsProps = {
  player: 'w' | 'b'
  activePlayer: 'w' | 'b'
  isCheck: boolean
  isMate: boolean
  history: Array<Move>
}

export const figureIcon = (piece: PieceType, color: 'w' | 'b') => {
  if (piece === 'p') {
    return <PawnIcon fill={color === 'w' ? 'white' : 'black'} />
  }
  if (piece === 'n') {
    return <KnightIcon fill={color === 'w' ? 'white' : 'black'} />
  }
  if (piece === 'b') {
    return <BishopIcon fill={color === 'w' ? 'white' : 'black'} />
  }
  if (piece === 'r') {
    return <RookIcon fill={color === 'w' ? 'white' : 'black'} />
  }
  if (piece === 'q') {
    return <QueenIcon fill={color === 'w' ? 'white' : 'black'} />
  }
  if (piece === 'k') {
    return <KingIcon fill={color === 'w' ? 'white' : 'black'} />
  }
}

const PlayerStats: FC<PlayerStatsProps> = ({ player, activePlayer, history }) => {

  return (
    <div className={player === activePlayer ? styles.active : styles.noActive}>
      <div className={styles.playerStats}>
        <UserIcon className={player === 'w' ? styles.w : styles.b} />
        <div className={styles.statsWrapper}>
          <div className={styles.player}>{player === 'w' ? 'White Player' : 'Black Player'}</div>
          <div className={styles.capturedFigures}>
            <ul>
              {history.map((move, index) =>
                (move.color === player && move.captured)
                  ?
                  <li key={index + move.to + move.from}>{figureIcon(move.captured, player === 'w' ? 'b' : 'w')}</li>
                  :
                  null)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerStats