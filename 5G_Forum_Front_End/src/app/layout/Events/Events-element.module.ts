import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './Events-element-routing.module';
import { EventsComponent } from './Events-element.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, EventsRoutingModule, PageHeaderModule],
    declarations: [EventsComponent]
})
export class EventsModule {}
