import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './core/header-component/header.component';
import { FooterComponent } from './core/footer-component/footer.component';
import { MissionComponent } from './mission/mission.component';
import { HelpPlanetComponent } from './help-planet/help-planet.component';
import { PartnerIffComponent } from './partner-iff/partner-iff.component';
import { HoverDirective } from './directives/show-popup.directive';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/ngx-spinner/ngx-spinner';


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
    SharedModule,
    NgxSpinnerModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
