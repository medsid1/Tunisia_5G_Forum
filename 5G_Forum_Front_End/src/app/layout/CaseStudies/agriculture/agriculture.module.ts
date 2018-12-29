import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgricultureRoutingModule } from './agriculture-routing.module';
import { AgricultureComponent } from './agriculture.component';

@NgModule({
    imports: [CommonModule, AgricultureRoutingModule],
    declarations: [AgricultureComponent]
})
export class AgricultureModule {}