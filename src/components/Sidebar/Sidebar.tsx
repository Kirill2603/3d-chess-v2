import React, { FC } from 'react'
import styles from './Sidebar.module.css'
import { Move, PieceType } from 'chess.js'
import { ReactComponent as PawnIcon } from 'assets/pawn.svg'
import { ReactComponent as KnightIcon } from 'assets/knight.svg'
import { ReactComponent as BishopIcon } from 'assets/bishop.svg'
import { ReactComponent as RookIcon } from 'assets/rook.svg'
import { ReactComponent as QueenIcon } from 'assets/queen.svg'
import { ReactComponent as KingIcon } from 'assets/knight.svg'

type SidebarProps = {
  history: Array<Move>
}

const Sidebar: FC<SidebarProps> = ({ history }) => {

  const figureIcon = (piece: PieceType, color: 'w' | 'b') => {
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

  return (
    <aside className={styles.sidebar}>
      <ul>
        {history.map((move, index) =>
          <li key={index + move.to + move.from}>
            {index + 1 + ': '}
            {figureIcon(move.piece, move.color)}
            <span className='flex flex-row justify-around w-full'><p>{move.from}</p> <p>{'=>'}</p> <p>{move.to}</p></span>
          </li>)}
      </ul>
    </aside>
  )
}

export default Sidebar