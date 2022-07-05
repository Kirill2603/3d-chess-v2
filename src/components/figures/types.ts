export type FiguresPropsType = {
  id: string,
  color: 'white' | 'black' | 'green'
  position:  [number, number, number],
  onFigureSelect: (id: string, position:  [number, number, number]) => void
}
