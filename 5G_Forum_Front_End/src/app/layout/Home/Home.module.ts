import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeRoutingModule } from './Home-routing.module';
import { HomeComponent } from './Home.component';
import { FormsModule } from '@angular/forms';
import { StatModule } from '../../shared';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        HomeRoutingModule,
        StatModule,
        FormsModule,
        ToastrModule.forRoot()
    ],
    declarations: [
        HomeComponent,
        
    ]
})
export class HomeModule {}
