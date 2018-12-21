import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GovernanceModelComponent } from './governancemodel.component';

const routes: Routes = [
    {
        path: '',
        component: GovernanceModelComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GovernanceModelRoutingModule {}