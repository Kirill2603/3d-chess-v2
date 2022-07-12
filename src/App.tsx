import React from 'react'
import { useAppSelector } from './store/store'

function App() {

  const { figures } = useAppSelector(state => state.game)

  return (
   <div>

   </div>
  )
}

export default App
