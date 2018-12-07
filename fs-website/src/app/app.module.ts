import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './core/header-component/header.component';
import { FooterComponent } from './core/footer-component/footer.component';
import { MissionComponent } from './mission/mission.component';
import { HelpPlanetComponent } from './help-planet/help-planet.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MissionComponent,
    HelpPlanetComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
