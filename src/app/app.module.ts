import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { Map00Component } from './map00/map00.component';
import { Map01Component } from './map01/map01.component';
import { Map10Component } from './map10/map10.component';
import { Map11Component } from './map11/map11.component';
import { CombatComponent } from './combat/combat.component';
import { Map20Component } from './map20/map20.component';
import { Map21Component } from './map21/map21.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccueilComponent } from './accueil/accueil.component';
import { Map02Component } from './map02/map02.component';
import { Map44Component } from './map44/map44.component';
import { Map43Component } from './map43/map43.component';
import { Map42Component } from './map42/map42.component';
import { Map41Component } from './map41/map41.component';
import { Map03Component } from './map03/map03.component';
import { Map04Component } from './map04/map04.component';
import { Map12Component } from './map12/map12.component';
import { Map13Component } from './map13/map13.component';
import { Map14Component } from './map14/map14.component';
import { Map22Component } from './map22/map22.component';
import { Map23Component } from './map23/map23.component';
import { Map24Component } from './map24/map24.component';
import { Map30Component } from './map30/map30.component';
import { Map31Component } from './map31/map31.component';
import { Map32Component } from './map32/map32.component';
import { Map33Component } from './map33/map33.component';
import { Map34Component } from './map34/map34.component';
import { Map40Component } from './map40/map40.component';
import { DialogComponent } from './dialog/dialog.component';
import { IntroComponent } from './intro/intro.component';
import { GameoverComponent } from './gameover/gameover.component';
import { VictoireComponent } from './victoire/victoire.component';
import { WantedPageComponent } from './wanted-page/wanted-page.component';
import { SisterPageComponent } from './sister-page/sister-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Map00Component,
    Map01Component,
    Map02Component,
    Map03Component,
    Map04Component,
    Map10Component,
    Map11Component,
    Map12Component,
    Map13Component,
    Map14Component,
    Map20Component,
    Map21Component,
    Map22Component,
    Map23Component,
    Map24Component,
    Map30Component,
    Map31Component,
    Map32Component,
    Map33Component,
    Map34Component,
    Map40Component,
    Map41Component,
    Map42Component,
    Map43Component,
    Map44Component,
    AccueilComponent,
    CombatComponent,
    DialogComponent,
    IntroComponent,
    GameoverComponent,
    VictoireComponent,
    WantedPageComponent,
    SisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
