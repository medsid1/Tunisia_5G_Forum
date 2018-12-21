import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { The5gservicesRoutingModule } from './5gservices-routing.module';
import { The5gservicesComponent } from './5gservices.component';

@NgModule({
    imports: [CommonModule, The5gservicesRoutingModule],
    declarations: [The5gservicesComponent]
})
export class The5gservicesModule {}