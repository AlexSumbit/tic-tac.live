import { Player } from "./player";

export class Cell {
    constructor(
        public x:number,
        public y:number,
        public player: Player = null
    ) {

    }
}
