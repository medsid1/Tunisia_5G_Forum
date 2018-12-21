import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalCooperationComponent } from './globalcooperation.component';

const routes: Routes = [
    {
        path: '',
        component: GlobalCooperationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GlobalCooperationRoutingModule {}