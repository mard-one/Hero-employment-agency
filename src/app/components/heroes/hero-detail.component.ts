import { Component, Input } from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero$ | async as hero">
      <h2>{{hero.name}} details!</h2>
      <div>
        <label>id: </label>{{hero.id}}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]='hero.name' placeholder="name"/>
      </div>
      <button (click)='gotoHeroes(hero)'> Back to heroes</button>
    </div>
  `
})
export class HeroDetailComponent {
  private hero$;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {}


  ngOnInit(){
    this.hero$ = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.heroService.getHero(+params.get('id')));
    // Debuging purposes
    // this.hero$.subscribe((returnFeed: Hero[]) => {console.log(returnFeed)})
  }

  gotoHeroes(hero: Hero) {
    let heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }

}
