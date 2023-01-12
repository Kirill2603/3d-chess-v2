import {
  Menu,
  MenuButton,
  MenuList,
  HStack,
  Flex,
  Heading,
  Icon,
  IconButton,
  useColorMode,
  ButtonGroup,
  Button,
  MenuOptionGroup,
  MenuItemOption,
  FormControl,
  FormLabel,
  Switch,
  MenuDivider,
} from '@chakra-ui/react'
import React, { FC } from 'react'
import { FaChessPawn } from 'react-icons/fa'
import { SceneBackgrounds, setGameType, setSceneBackground } from 'store/gameSlice'
import { useAppDispatch } from 'store/store'
import { HamburgerIcon } from '@chakra-ui/icons'

type HeaderProps = {
  gameType: 'singlePlayer' | 'AI'
  sceneBackground: SceneBackgrounds
}

export const Header: FC<HeaderProps> = ({ gameType, sceneBackground }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const dispatch = useAppDispatch()

  const onSetGame = (type: 'singlePlayer' | 'AI') => {
    dispatch(setGameType(type))
  }

  const sceneBackgrounds: SceneBackgrounds[] = [
    'apartment',
    'city',
    'dawn',
    'forest',
    'lobby',
    'night',
    'park',
    'studio',
    'sunset',
    'warehouse',
  ]

  const onSetBackground = (background: SceneBackgrounds) => {
    dispatch(setSceneBackground(background))
  }

  return (
    <Flex
      as='header'
      justify='space-between'
      width={'100%'}
      p='2'
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


      <Menu>
        <MenuButton as='div'>
          <IconButton aria-label='asd' icon={<HamburgerIcon />} />
        </MenuButton>
        <MenuList>
          <MenuOptionGroup title='Background' type='checkbox'>
            <MenuItemOption value='theme'>
              <FormControl display='flex' alignItems='center'>
                <FormLabel htmlFor='theme' mb='0'>
                  Dark theme
                </FormLabel>
                <Switch id='theme' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
              </FormControl>
            </MenuItemOption>
          </MenuOptionGroup>
          <MenuDivider />
          <MenuOptionGroup title='Background' type='radio' defaultValue={sceneBackground}>
            {sceneBackgrounds.map(background =>
              <MenuItemOption key={background} value={background} isChecked={(background === sceneBackground)}
                              onClick={() => onSetBackground(background)}>{background}</MenuItemOption>,
            )}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Flex>
  )
}
