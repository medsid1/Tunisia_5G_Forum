import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpcomingEventsRoutingModule } from './upcomingevents-routing.module';
import { UpcomingEventsComponent } from './upcomingevents.component';

import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
    imports: [CommonModule, UpcomingEventsRoutingModule,FormsModule,
        NgbModalModule,
        FlatpickrModule.forRoot(),
        CalendarModule.forRoot({
          provide: DateAdapter,
          useFactory: adapterFactory
        })],
    declarations: [UpcomingEventsComponent],
    exports:[UpcomingEventsComponent]
})
export class UpcomingEventsModule {}