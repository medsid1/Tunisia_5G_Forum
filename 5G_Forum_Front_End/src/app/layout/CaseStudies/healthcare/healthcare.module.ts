import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthcareRoutingModule } from './healthcare-routing.module';
import { HealthcareComponent } from './healthcare.component';

@NgModule({
    imports: [CommonModule, HealthcareRoutingModule],
    declarations: [HealthcareComponent]
})
export class HealthcareModule {}