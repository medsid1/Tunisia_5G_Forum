import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TunisianEcosystemComponent } from './tunisianecosystem.component';

const routes: Routes = [
    {
        path: '',
        component: TunisianEcosystemComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TunisianEcosystemRoutingModule {}