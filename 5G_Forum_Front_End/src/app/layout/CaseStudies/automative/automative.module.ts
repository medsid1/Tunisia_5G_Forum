import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutomativeRoutingModule } from './automative-routing.module';
import { AutomativeComponent } from './automative.component';

@NgModule({
    imports: [CommonModule, AutomativeRoutingModule],
    declarations: [AutomativeComponent]
})
export class AutomativeModule {}