import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TunisianEcosystemRoutingModule } from './tunisianecosystem-routing.module';
import { TunisianEcosystemComponent } from './tunisianecosystem.component';

@NgModule({
    imports: [CommonModule, TunisianEcosystemRoutingModule],
    declarations: [TunisianEcosystemComponent]
})
export class TunisianEcosystemModule {}