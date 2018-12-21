import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { The5gnewsComponent } from './5gnews.component';

const routes: Routes = [
    {
        path: '',
        component: The5gnewsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class The5gnewsRoutingModule {}