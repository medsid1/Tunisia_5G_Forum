import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { The5gpresentationRoutingModule } from './5gpresentation-routing.module';
import { The5gpresentationComponent } from './5gpresentation.component';

@NgModule({
    imports: [CommonModule, The5gpresentationRoutingModule],
    declarations: [The5gpresentationComponent]
})
export class The5gpresentationModule {}