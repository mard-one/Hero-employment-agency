import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './components/crisis-list/crisis-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { HeroesModule } from './components/heroes/heroes.module';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  imports: [
    BrowserModule,
    HeroesModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CrisisListComponent,
    NotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
