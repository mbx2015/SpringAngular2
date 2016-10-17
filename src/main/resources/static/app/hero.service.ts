/**
 * Created by MBX on 10/7/2016.
 */
import {Injectable} from "@angular/core";
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class HeroService {

    constructor(private http: Http){}


    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getHeroes());
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
                    .then(heroes => heroes.find(hero => hero.id === id));
    }

    getUsers(): Observable<any> {
        return this.http.get("/users");
    }




}
