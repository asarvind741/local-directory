import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './core/header-component/header.component';
import { FooterComponent } from './core/footer-component/footer.component';
import { MissionComponent } from './mission/mission.component';
import { HelpPlanetComponent } from './help-planet/help-planet.component';
import { PartnerIffComponent } from './partner-iff/partner-iff.component';
import { HoverDirective } from './directives/show-popup.directive';
import { ProductListingComponent } from './product-listing/product-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MissionComponent,
    HelpPlanetComponent,
    PartnerIffComponent,
    FooterComponent,
    HoverDirective,
    ProductListingComponent
  ],
  imports: [
    BrowserModule,
    // Ng2PageScrollModule,
    NgxPageScrollModule,
    NgxSpinnerModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
