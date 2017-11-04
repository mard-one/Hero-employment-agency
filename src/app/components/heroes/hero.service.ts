import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  getHeroes() { return Observable.of(HEROES); }

  getHero(id: number | string) {
    return this.getHeroes()
      // (+) before `id` turns the string into a number
      .map(heroes => heroes.find(hero => hero.id === +id));
  }

  // See the "Take it slow" appendix
  // getHeroesSlowly(): Promise<Hero[]> {
  //   return new Promise(resolve => {
  //     // Simulate server latency with 2 second delay
  //     setTimeout(() => resolve(this.getHeroes()), 2000);
  //   });
  // }
}
