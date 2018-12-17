import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GOVandORGRoutingModule } from './GOVandORG-routing.module';
import { GOVandORGComponent } from './GOVandORG.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, GOVandORGRoutingModule, PageHeaderModule],
    declarations: [GOVandORGComponent]
})
export class GOVandORGModule {}
