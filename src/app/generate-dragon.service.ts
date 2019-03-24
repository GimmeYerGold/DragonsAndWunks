import { DiceRollService } from './dice-roll.service';
import { Injectable } from '@angular/core';

export interface IDragon {
    name: string;
    food: string;
    fight: number;
    breath: number;
    speed: number;
    friends: number;
    actions: number;
}

@Injectable()

export class GenerateDragonService {
    constructor(private diceRollService: DiceRollService) {}
    diceRoll(min: number, max: number) {
        return this.diceRollService.diceRoll(min, max);
      }
    generateDragon(totalDragons: number): IDragon {
        const dragon =  {} as IDragon;

        dragon.fight = this.diceRoll(3, 18);
        dragon.breath = this.diceRoll(3, 18);
        dragon.speed = this.diceRoll(2, 12);
        dragon.friends = 0;
        dragon.actions = 0;

        return dragon;
    }
}
