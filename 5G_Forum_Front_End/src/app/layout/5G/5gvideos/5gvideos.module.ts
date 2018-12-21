import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { The5gvideosRoutingModule } from './5gvideos-routing.module';
import { The5gvideosComponent } from './5gvideos.component';

@NgModule({
    imports: [CommonModule, The5gvideosRoutingModule],
    declarations: [The5gvideosComponent]
})
export class The5gvideosModule {}