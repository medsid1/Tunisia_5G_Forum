import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseStudiesRoutingModule } from './CaseStudies-routing.module';
import { CaseStudiesComponent } from './CaseStudies.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, CaseStudiesRoutingModule, PageHeaderModule],
    declarations: [CaseStudiesComponent]
})
export class CaseStudiesModule {}
