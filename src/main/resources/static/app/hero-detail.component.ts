
// Keep the Input import for now, we'll remove it later:
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import {HeroService} from "./hero.service";
import {Hero} from "./hero";

@Component({
    selector: 'my-hero-detail',
    template: `
      <div *ngIf="selectedHero">
        <h2>
          {{selectedHero.name | uppercase}} is my hero
        </h2>
        <button (click)="gotoDetail()">View Details</button>
      </div>
  `,
  styleUrls: ['app/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

    ngOnInit(): void {
      this.route.params.forEach((params: Params) => {
        let id = +params['id'];
        this.heroService.getHero(id)
          .then(hero => this.hero = hero);
      });
    }
    goBack(): void {
      this.location.back();
    }

  


}
