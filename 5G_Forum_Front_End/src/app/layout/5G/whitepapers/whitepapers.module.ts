import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhitepapersRoutingModule } from './whitepapers-routing.module';
import { WhitepapersComponent } from './whitepapers.component';

@NgModule({
    imports: [CommonModule, WhitepapersRoutingModule],
    declarations: [WhitepapersComponent]
})
export class WhitepapersModule {}