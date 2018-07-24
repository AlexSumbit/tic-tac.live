import { Player } from "./player";
import { GameResult } from "./game-result";

export class GameState {
    constructor(
        public players: Array<Player>,
        public gameMode: string,
        public currentPlayer: Player,
        public moveCount: number = 0,
        public result: GameResult = null
    ) {

    }
}
