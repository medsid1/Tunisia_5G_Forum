import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { the5GComponent } from './5G.component';

const routes: Routes = [
    {
        path: '', component: the5GComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class the5GRoutingModule {
}
