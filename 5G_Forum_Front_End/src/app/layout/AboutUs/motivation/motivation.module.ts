import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotivationRoutingModule } from './motivation-routing.module';
import { MotivationComponent } from './motivation.component';

@NgModule({
    imports: [CommonModule, MotivationRoutingModule],
    declarations: [MotivationComponent]
})
export class MotivationModule {}