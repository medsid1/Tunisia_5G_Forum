import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GOVandORGComponent } from './GOVandORG.component';

const routes: Routes = [
    {
        path: '', component: GOVandORGComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GOVandORGRoutingModule {
}
