import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhitepapersComponent } from './whitepapers.component';

const routes: Routes = [
    {
        path: '',
        component: WhitepapersComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WhitepapersRoutingModule {}