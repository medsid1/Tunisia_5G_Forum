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
            { path: 'vision', loadChildren: './AboutUs/vision/vision.module#VisionModule' },
            { path: 'motivation', loadChildren: './AboutUs/motivation/motivation.module#MotivationModule' },           
            { path: 'objective', loadChildren: './AboutUs/objective/objective.module#ObjectiveModule' },           
            { path: 'contactus', loadChildren: './AboutUs/contactus/contactus.module#ContactUsModule' },
            

            { path: '5G', loadChildren: './5G/5G.module#the5GModule' },
            { path: '5gpresentation', loadChildren: './5G/5gpresentation/5gpresentation.module#The5gpresentationModule' },
            { path: '5gnews', loadChildren: './5G/5gnews/5gnews.module#The5gnewsModule' },
            { path: '5gwhitepapers', loadChildren: './5G/whitepapers/whitepapers.module#WhitepapersModule' },
            { path: '5gservices', loadChildren: './5G/5gservices/5gservices.module#The5gservicesModule' },
            { path: '5gvideos', loadChildren: './5G/5gvideos/5gvideos.module#The5gvideosModule' },


            { path: 'GOVandORG', loadChildren: './GOVandORG/GOVandORG.module#GOVandORGModule' },
            { path: 'tunisianecosystem', loadChildren: './GOVandORG/tunisianecosystem/tunisianecosystem.module#TunisianEcosystemModule' },
            { path: 'globalcooperation', loadChildren: './GOVandORG/globalcooperation/globalcooperation.module#GlobalCooperationModule' },
            { path: 'governancemodel', loadChildren: './GOVandORG/governancemodel/governancemodel.module#GovernanceModelModule' },


            { path: 'Events', loadChildren: './Events/Events-element.module#EventsModule' },
            { path: 'upcomingevents', loadChildren: './Events/upcomingevents/upcomingevents.module#UpcomingEventsModule' },
            { path: 'pastevents', loadChildren: './Events/pastevents/pastevents.module#PastEventsModule' },


            { path: 'CaseStudies', loadChildren: './CaseStudies/CaseStudies.module#CaseStudiesModule' },
            { path: 'healthcare', loadChildren: './CaseStudies/healthcare/healthcare.module#HealthcareModule' },
            { path: 'agriculture', loadChildren: './CaseStudies/agriculture/agriculture.module#AgricultureModule' },
            { path: 'education', loadChildren: './CaseStudies/education/education.module#EducationModule' },
            { path: 'entertainment', loadChildren: './CaseStudies/entertainment/entertainment.module#EntertainmentModule' },
            { path: 'manufacturing', loadChildren: './CaseStudies/manufacturing/manufacturing.module#ManufacturingModule' },
            { path: 'automative', loadChildren: './CaseStudies/automative/automative.module#AutomativeModule' },
           
            

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
