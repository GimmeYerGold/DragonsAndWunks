import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiceRollService } from './dice-roll.service';
import { GenerateDragonService } from './generate-dragon.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DiceRollService,
    GenerateDragonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
