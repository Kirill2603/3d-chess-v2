import React from 'react'
import { useAppSelector } from './store/store'

function App() {

  const { board } = useAppSelector(state => state.game)

  return (
   <div>
     {board.map((row) => {
       return (
         row.map
       )
     })}
   </div>
  )
}

export default App
