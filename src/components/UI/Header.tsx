import {
  Avatar,
  HStack,
  Flex,
  Heading,
  Icon,
  IconButton,
  useColorMode,
  ButtonGroup,
  Button,
} from '@chakra-ui/react'
import React, { FC } from 'react'
import { FaChessPawn, FaMoon, FaSun } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { setGameType } from 'store/gameSlice'
import { useAppDispatch } from 'store/store'

type HeaderProps = {
  gameType: 'singlePlayer' | 'AI'
}

export const Header: FC<HeaderProps> = ({ gameType }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const dispatch = useAppDispatch()

  const onSetGame = (type: 'singlePlayer' | 'AI') => {
    dispatch(setGameType(type))
  }

  return (
    <Flex
      as='header'
      justify='space-between'
      width={'100%'}
      p='2'
      // css={{ backdropFilter: 'blur(10px)' }}
      alignItems='center'>
      <HStack>
        <Icon as={FaChessPawn} boxSize={'2em'} />
        <Heading as='h1' size='xl'>
          3D Chess
        </Heading>
      </HStack>

      <HStack>
        <ButtonGroup isAttached>
          <Button
            isActive={gameType === 'singlePlayer'}
            onClick={() => onSetGame('singlePlayer')}>
            Single
          </Button>
          <Button isActive={gameType === 'AI'} onClick={() => onSetGame('AI')}>
            AI
          </Button>
        </ButtonGroup>
      </HStack>

      <HStack>
        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        <IconButton
          aria-label='toggle theme'
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        />
        <IconButton aria-label='settings' icon={<IoMdSettings />} />
      </HStack>
    </Flex>
  )
}
