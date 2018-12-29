import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManufacturingComponent } from './manufacturing.component';

const routes: Routes = [
    {
        path: '',
        component: ManufacturingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManufacturingRoutingModule {}