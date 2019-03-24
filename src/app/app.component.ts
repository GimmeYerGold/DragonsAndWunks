import { Component, OnInit } from '@angular/core';
import { DiceRollService } from './dice-roll.service';
import { IDragon, GenerateDragonService } from './generate-dragon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Dragons and Wunks';
  constructor(
    private diceRollService: DiceRollService,
    private generateDragonService: GenerateDragonService,
    ) {}
  totalDragons: number;
  dragon: IDragon;

  generateDragon(totalDragons: number) {
    this.dragon = this.generateDragonService.generateDragon(totalDragons);
  }

  ngOnInit(): void {
    this.generateDragon(1);
  }

}



