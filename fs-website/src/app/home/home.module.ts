import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AboutComponentComponent } from './about-component/about-component.component';
import { BannerComponentComponent } from './banner-component/banner-component.component';
import { BuiltPlatformComponent } from './built-platform/built-platform.component';
import { BuyerComponentComponent } from './buyer-component/buyer-component.component';
import { BuyerFeatureComponent } from './buyer-feature/buyer-feature.component';
import { FaqComponentComponent } from './faq-component/faq-component.component';
import { HelpYrselfComponentComponent } from './help-yrself-component/help-yrself-component.component';
import { JobPostingComponent } from './job-posting/job-posting.component';
import { JobPostPlanComponent } from './job-post-plan/job-post-plan.component';
import { OurLocationComponentComponent } from './our-location-component/our-location-component.component';
import { RfqFeaturesComponent } from './rfq-features/rfq-features.component';
import { SegmentsComponentComponent } from './segments-component/segments-component.component';
import { StockFeatureComponent } from './stock-feature/stock-feature.component';
import { SupplierComponentComponent } from './supplier-component/supplier-component.component';
import { SupplierSubscriptionComponentComponent } from './supplier-subscription-component/supplier-subscription-component.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormComponentComponent } from './form-component/form-component.component';

@NgModule({
    declarations: [
        AboutComponentComponent,
        BannerComponentComponent,
        BuiltPlatformComponent,
        BuyerComponentComponent,
        BuyerFeatureComponent,
        FaqComponentComponent,
        HelpYrselfComponentComponent,
        JobPostingComponent,
        JobPostPlanComponent,
        OurLocationComponentComponent,
        RfqFeaturesComponent,
        SegmentsComponentComponent,
        StockFeatureComponent,
        SupplierComponentComponent,
        SupplierComponentComponent,
        SupplierSubscriptionComponentComponent,
        FormComponentComponent,
        HomeComponent
    ],
    imports:[
        CommonModule,
        NgbModule,
        HomeRoutingModule
    ],
    exports: [

    ],
    providers: []
})
export class HomeModule {

}