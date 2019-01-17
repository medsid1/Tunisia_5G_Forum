import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactUsRoutingModule } from './contactus-routing.module';
import { ContactUsComponent } from './contactus.component';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
    imports: [CommonModule, ContactUsRoutingModule, FormsModule,
        ToastrModule.forRoot() ],
    declarations: [ContactUsComponent]
})
export class ContactUsModule {}