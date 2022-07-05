import { Vector3 } from '@react-three/fiber'

export type FiguresPropsType = {
  id: string,
  color: 'white' | 'black' | 'green'
  position: Vector3,
  onFigureSelect: (id: string) => void
}
