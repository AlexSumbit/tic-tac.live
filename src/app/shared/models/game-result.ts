import { Cell } from "./cell";
import { Player } from "./player";

export class GameResult {
    constructor(
        public player: Player,
        public winCells: Array<Cell> = null,
        public result: string = "win"
    ) {

    }
}
