import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { AppRoutingModule } from './app-routing.module';
import { HeroesComponent } from './heroes.component'
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }


