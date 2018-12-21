import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { The5gnewsRoutingModule } from './5gnews-routing.module';
import { The5gnewsComponent } from './5gnews.component';

@NgModule({
    imports: [CommonModule, The5gnewsRoutingModule],
    declarations: [The5gnewsComponent]
})
export class The5gnewsModule {}