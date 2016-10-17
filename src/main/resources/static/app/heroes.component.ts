import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {User} from "./user";


@Component({
  selector: 'my-heroes',
  templateUrl: 'app/main.html',
  styleUrls: ['app/styles.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  users: User[];

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
    this.getUsers();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  getUsers() {
    this.heroService.getUsers()
        .subscribe(users=>{
          this.users = JSON.parse(users._body);
          console.log("users: "+users);
        });
  }
}

 