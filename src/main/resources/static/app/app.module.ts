import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {HeroesComponent} from "./heroes.component";
import {DashboardComponent} from "./dashboard.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "./hero.service";
import {SettingComponent} from "./setting.component";
import {HttpModule} from "@angular/http";

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
      HttpModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'setting',
        component: SettingComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },

    ]) 
    ],
  declarations: [AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent, SettingComponent],
  bootstrap: [AppComponent],
  providers: [HeroService]
})
export class AppModule { }
