import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { AboutUsRoutingModule } from './AboutUs-routing.module';
import { AboutUsComponent } from './AboutUs.component';
import { PageHeaderModule } from '../../shared';
import { VisionComponent } from './vision/vision.component';

@NgModule({
    imports: [CommonModule, Ng2Charts, AboutUsRoutingModule, PageHeaderModule],
    declarations: [AboutUsComponent]
})
export class AboutUsModule {}
