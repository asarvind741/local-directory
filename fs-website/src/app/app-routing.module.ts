import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionComponent } from './mission/mission.component';
import { HelpPlanetComponent } from './help-planet/help-planet.component';

const routes: Routes = [
  { path: 'mission', component: MissionComponent},
  { path: 'heplp-planet', component: HelpPlanetComponent},
  { path: '', loadChildren: './home/home.module#HomeModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }