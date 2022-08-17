import { Grid, GridItem } from '@chakra-ui/react'
import { Header } from 'components/UI/Header'
import { MovesLIst } from 'components/UI/MovesLIst'
import React from 'react'
import { useAppSelector } from 'store/store'
import Scene from './components/SceneComponents/Scene'
import { Footer } from './components/UI/Footer'

function App() {
   const { history, whoseMove, gameType, isCheck, isMate, sceneBackground } = useAppSelector(state => state.game)

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
        <Header gameType={gameType} sceneBackground={sceneBackground}/>
      </GridItem>
      <GridItem area={'movesList'}>
        <MovesLIst history={history} whoseMove={whoseMove} isCheck={isCheck} isMate={isMate}/>
      </GridItem>
      <GridItem area={'main'} roundedRight='md' overflow={'hidden'}>
        <Scene />
      </GridItem>
      <GridItem area={'footer'}>
        <Footer />
      </GridItem>
    </Grid>
  )
}

export default App
