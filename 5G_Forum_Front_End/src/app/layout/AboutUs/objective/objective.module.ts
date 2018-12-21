import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObjectiveRoutingModule } from './objective-routing.module';
import { ObjectiveComponent } from './objective.component';

@NgModule({
    imports: [CommonModule, ObjectiveRoutingModule],
    declarations: [ObjectiveComponent]
})
export class ObjectiveModule {}