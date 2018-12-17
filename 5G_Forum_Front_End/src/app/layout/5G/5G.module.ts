import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { the5GRoutingModule } from './5G-routing.module';
import { the5GComponent } from './5G.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, the5GRoutingModule, PageHeaderModule],
    declarations: [the5GComponent]
})
export class the5GModule {}
