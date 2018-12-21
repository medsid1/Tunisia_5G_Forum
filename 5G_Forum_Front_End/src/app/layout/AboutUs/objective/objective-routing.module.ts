import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObjectiveComponent } from './objective.component';

const routes: Routes = [
    {
        path: '',
        component: ObjectiveComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ObjectiveRoutingModule {}