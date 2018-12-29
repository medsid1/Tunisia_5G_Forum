import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgricultureComponent } from './agriculture.component';

const routes: Routes = [
    {
        path: '',
        component: AgricultureComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AgricultureRoutingModule {}