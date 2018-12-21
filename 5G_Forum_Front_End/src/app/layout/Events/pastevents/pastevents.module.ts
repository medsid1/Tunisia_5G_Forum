import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PastEventsRoutingModule } from './pastevents-routing.module';
import { PastEventsComponent } from './pastevents.component';

@NgModule({
    imports: [CommonModule, PastEventsRoutingModule],
    declarations: [PastEventsComponent]
})
export class PastEventsModule {}