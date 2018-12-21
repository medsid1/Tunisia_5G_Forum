import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contactus-routing.module';
import { ContactUsComponent } from './contactus.component';

@NgModule({
    imports: [CommonModule, ContactUsRoutingModule],
    declarations: [ContactUsComponent]
})
export class ContactUsModule {}