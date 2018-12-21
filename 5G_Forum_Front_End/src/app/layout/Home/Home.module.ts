import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeRoutingModule } from './Home-routing.module';
import { HomeComponent } from './Home.component';

import { StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        HomeRoutingModule,
        StatModule
    ],
    declarations: [
        HomeComponent,
        
    ]
})
export class HomeModule {}
