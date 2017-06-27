import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service'
import { Hero } from './hero';
import { Router } from '@angular/router'

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
, providers: []
})

export class HeroesComponent implements OnInit {
  selectedHero: Hero ;
  heroes: Hero[];

  constructor(private heroService: HeroService, private router: Router) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}

