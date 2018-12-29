import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufacturingRoutingModule } from './manufacturing-routing.module';
import { ManufacturingComponent } from './manufacturing.component';

@NgModule({
    imports: [CommonModule, ManufacturingRoutingModule],
    declarations: [ManufacturingComponent]
})
export class ManufacturingModule {}