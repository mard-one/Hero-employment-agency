import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  template: `
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes"
      [class.selected]="hero.id == selectedId"
      [routerLink]="['/hero', hero.id]">
      <span class="badge">{{hero.id}}</span> <span class='text'>{{hero.name}}</span>
    </li>
  </ul>
`,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      height: 1.6em;
      border-radius: 2px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      padding-left: 30px;

    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      background-color: #607D8B;
      position: absolute;
      height: 100%;
      border-radius: 2px 0 0 2px;
      line-height: 18px;
    }

    `],
  providers: [HeroService]
})
export class HeroListComponent implements OnInit {
  private heroes$: Observable<Hero[]>;
  private heroes: Hero[];
  private selectedId;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.heroes$ = this.route.paramMap.switchMap((params: ParamMap) => {
      this.selectedId = params.get('id');
      return this.heroService.getHeroes();
    });
     this.heroes$.subscribe((heroes: Hero[]) => {
       this.heroes = heroes
     })
     // debuging purposes
    // this.heroes$.subscribe((returnFeed: Hero[]) => {console.log(returnFeed)})
  }
}
