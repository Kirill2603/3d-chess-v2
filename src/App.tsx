import { Grid, GridItem } from '@chakra-ui/react'

import { Header } from 'components/UI/Header'
import { MovesLIst } from 'components/UI/MovesLIst'
import React from 'react'
import { useAppSelector } from 'store/store'
import Scene from './components/SceneComponents/Scene'

function App() {
   const { history, isCheck, isMate, player } = useAppSelector(state => state.game)

  return (
    <Grid
      h='full'
      templateAreas={`" header header"
                  " main movesList"
                  " footer footer"`}
      gridTemplateRows={'auto 8fr auto'}
      gridTemplateColumns={'3fr 1fr'}
      gap='1'>
      <GridItem area={'header'}>
        <Header />
      </GridItem>
      <GridItem area={'movesList'}>
        <MovesLIst history={history} player={player}/>
      </GridItem>
      <GridItem area={'main'} borderRadius='md' overflow={'hidden'}>
        <Scene />
      </GridItem>
      <GridItem area={'footer'}>Footer</GridItem>
    </Grid>
  )
}

export default App
