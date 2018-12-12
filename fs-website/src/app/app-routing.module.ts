import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionComponent } from './mission/mission.component';
import { HelpPlanetComponent } from './help-planet/help-planet.component';
import { PartnerIffComponent } from './partner-iff/partner-iff.component';

const routes: Routes = [
  { path: 'mission', component: MissionComponent },
  { path: 'help-planet', component: HelpPlanetComponent },
  { path: 'partner-iff', component: PartnerIffComponent },
  { path: '', loadChildren: './home/home.module#HomeModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }