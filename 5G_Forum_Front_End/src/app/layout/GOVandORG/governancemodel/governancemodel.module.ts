import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GovernanceModelRoutingModule } from './governancemodel-routing.module';
import { GovernanceModelComponent } from './governancemodel.component';

@NgModule({
    imports: [CommonModule, GovernanceModelRoutingModule ,NgbModule.forRoot(),],
    declarations: [GovernanceModelComponent]
})
export class GovernanceModelModule {}