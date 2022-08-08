import {
  Avatar,
  HStack,
  Flex,
  Heading,
  Icon,
  IconButton,
  useColorMode,
} from '@chakra-ui/react'
import React from 'react'
import { FaChessPawn, FaMoon, FaSun } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

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
