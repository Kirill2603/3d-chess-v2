import React, { FC } from 'react'
import { Flex, Grid, GridItem, Icon, Text } from '@chakra-ui/react'
import {
  FaChessBishop,
  FaChessKing,
  FaChessKnight,
  FaChessPawn,
  FaChessQueen,
  FaChessRook,
  FaUser,
} from 'react-icons/fa'
import { Move, PieceType } from 'chess.js'

type MovesListProps = {
  history: Move[]
  whoseMove: 'w' | 'b'
}

export const MovesLIst: FC<MovesListProps> = ({ history, whoseMove }) => {
  const figureIco = (piese: PieceType) => {
    if (piese === 'p') {
      return FaChessPawn
    }
    if (piese === 'n') {
      return FaChessKnight
    }
    if (piese === 'b') {
      return FaChessBishop
    }
    if (piese === 'r') {
      return FaChessRook
    }
    if (piese === 'k') {
      return FaChessKing
    }
    if (piese === 'q') {
      return FaChessQueen
    }
  }

  return (
    <Flex as='aside' flexDir='column' h='100%' px={2} justify='center'>
      <Text
        w='min'
        px={2}
        roundedTop={'lg'}
        bgColor={whoseMove === 'b' ? 'green.300' : 'gray.400'}
        fontSize='4xl'
        fontWeight={'bold'}>
        05:00
      </Text>
      <Flex px={2} alignItems='center' bgColor={'gray.400'} roundedTopRight={'lg'}>
        <Icon as={FaUser} mr={1} />
        <Text fontSize='lg' fontWeight='bold' pr={4}>Player 2</Text>
        {history.map(
          moves =>
            moves.captured &&
            moves.color === 'b' && <Icon fill='gray.200' as={figureIco(moves.captured)} />,
        )}
      </Flex>

      <Grid
        gridTemplateColumns={'1fr 3fr 3fr'}
        gridAutoRows={'min-content'}
        minH='40vh'
        maxH='4vh'
        gap={1}
        px={2}
        backgroundColor='gray.500'
        overflowY={'auto'}
        justifyContent='start'>
        {history.map((move, index) => {
          return (
            <React.Fragment key={move.from + move.to + Math.random()}>
              {index % 2 === 0 ? <GridItem key={move.from + move.to + Math.random()}>{index / 2 + 1}</GridItem> : null}
              <GridItem key={move.from + move.to + Math.random()}>
                <Icon as={figureIco(move.piece)} />
                {move.to}
              </GridItem>
            </React.Fragment>
          )
        })}
      </Grid>

      <Flex
        px={2}
        alignItems='center'
        bgColor={'gray.400'}
        roundedBottomRight={'lg'}
        flexWrap='wrap'>
        <Icon as={FaUser} mr={1} />
        <Text fontSize='lg' fontWeight='bold' pr={4}>Player 1</Text>
        {history.map(
          moves =>
            moves.captured &&
            moves.color === 'b' && <Icon fill='gray.600' as={figureIco(moves.captured)} />,
        )}
      </Flex>

      <Text
        w='min'
        px={2}
        roundedBottom={'lg'}
        bgColor={whoseMove === 'w' ? 'green.300' : 'gray.400'}
        fontSize='4xl'
        fontWeight={'bold'}>
        05:00
      </Text>
    </Flex>
  )
}
