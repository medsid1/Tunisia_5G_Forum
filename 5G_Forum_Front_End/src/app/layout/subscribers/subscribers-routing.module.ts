import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscribersComponent } from './subscribers.component';

const routes: Routes = [
    {
        path: '', component: SubscribersComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SubscribersRoutingModule {
}
