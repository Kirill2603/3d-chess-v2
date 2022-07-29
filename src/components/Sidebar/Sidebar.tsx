import React, { FC } from 'react'
import styles from './Sidebar.module.css'
import { Move } from 'chess.js'
import { figureIcon } from '../PlayerStats'

type SidebarProps = {
  history: Array<Move>
}

const Sidebar: FC<SidebarProps> = ({ history }) => {

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