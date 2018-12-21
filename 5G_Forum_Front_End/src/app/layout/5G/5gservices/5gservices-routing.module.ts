import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { The5gservicesComponent } from './5gservices.component';

const routes: Routes = [
    {
        path: '',
        component: The5gservicesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class The5gservicesRoutingModule {}