import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { The5gvideosComponent } from './5gvideos.component';

const routes: Routes = [
    {
        path: '',
        component: The5gvideosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class The5gvideosRoutingModule {}