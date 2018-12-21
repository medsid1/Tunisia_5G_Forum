import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { The5gpresentationComponent } from './5gpresentation.component';

const routes: Routes = [
    {
        path: '',
        component: The5gpresentationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class The5gpresentationRoutingModule {}