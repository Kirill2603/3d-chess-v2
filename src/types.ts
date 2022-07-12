export enum Colors {
    WHITE = "white",
    BLACK = "black",
}

export enum Figures {
    BISHOP = 'castle',
    KING = 'king',
    KNIGHT = 'knight',
    PAWN = 'pawn',
    QUEEN = 'queen',
    ROOK = 'rook',
}

export interface FigureData {
    id: string,
    name: Figures,
    x: number,
    y: number,
    color: Colors
}
