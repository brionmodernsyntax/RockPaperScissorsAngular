import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { FistComponent } from './components/fist/fist.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ScoreboardComponent,
    FistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
