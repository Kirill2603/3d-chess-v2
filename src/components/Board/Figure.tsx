import React, { FC } from 'react'
import { FigureType } from '../../store/boardSlice'
import { Pawn } from '../figures/Pawn'
import { Knight } from '../figures/Knight'
import { Rook } from '../figures/Rook'
import { Castle } from '../figures/Castle'
import { Queen } from '../figures/Queen'
import { King } from '../figures/King'

type FigureProps = {
  figure: FigureType  | null
  position: {x: number, y: number}
  selected: boolean
}

const Figure: FC<FigureProps> = ({figure, position,selected}) => {
  if (figure && figure.type === 'p') {
    return <Pawn color={figure.color} position={position} selected={selected}/>
  }
  if (figure && figure.type === 'n') {
    return <Knight color={figure.color} position={position} selected={selected}/>
  }
  if (figure && figure.type === 'b') {
    return <Rook color={figure.color} position={position} selected={selected}/>
  }
  if (figure && figure.type === 'r') {
    return <Castle color={figure.color} position={position} selected={selected}/>
  }
  if (figure && figure.type === 'q') {
    return <Queen color={figure.color} position={position} selected={selected}/>
  }
  if (figure && figure.type === 'k') {
    return <King color={figure.color} position={position} selected={selected}/>
  }
  return null
}

export default Figure