import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalCooperationRoutingModule } from './globalcooperation-routing.module';
import { GlobalCooperationComponent } from './globalcooperation.component';

@NgModule({
    imports: [CommonModule, GlobalCooperationRoutingModule],
    declarations: [GlobalCooperationComponent]
})
export class GlobalCooperationModule {}