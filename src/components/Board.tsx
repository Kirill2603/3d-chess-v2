import React from 'react'
import Cell from './Cell'
import { Vector3 } from 'three'

export const Board = () => {

  let boardState: Array<{id: string, position: Vector3, color: 'white' | 'black'}> = [
  ]
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      boardState.push({id: i.toString() + j.toString(), position: new Vector3(i, -0.36, j), color: (i+j) % 2 === 0 ? 'white': 'black'} )
    }
  }

  return (
    <>
      {/*<Cell position={new Vector3(0, 0, 0)} color={(1+1) % 2 === 0 ? 'black' : 'white'}/>*/}
      {boardState.map(cell =>
      <Cell key={cell.id} position={cell.position} color={cell.color} />
      )}
    </>
  )
}
