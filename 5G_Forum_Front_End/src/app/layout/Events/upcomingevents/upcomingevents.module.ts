import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpcomingEventsRoutingModule } from './upcomingevents-routing.module';
import { UpcomingEventsComponent } from './upcomingevents.component';

@NgModule({
    imports: [CommonModule, UpcomingEventsRoutingModule],
    declarations: [UpcomingEventsComponent]
})
export class UpcomingEventsModule {}