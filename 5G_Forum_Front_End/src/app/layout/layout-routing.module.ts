import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'Home', pathMatch: 'prefix' },
            { path: 'Home', loadChildren: './Home/Home.module#HomeModule' },
            { path: 'AboutUs', loadChildren: './AboutUs/AboutUs.module#AboutUsModule' },
            { path: '5G', loadChildren: './5G/5G.module#the5GModule' },
            { path: 'GOVandORG', loadChildren: './GOVandORG/GOVandORG.module#GOVandORGModule' },
            { path: 'Events', loadChildren: './Events/Events-element.module#EventsModule' },
            { path: 'CaseStudies', loadChildren: './CaseStudies/CaseStudies.module#CaseStudiesModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
