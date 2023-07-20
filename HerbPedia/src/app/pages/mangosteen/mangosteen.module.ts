import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MangosteenPageRoutingModule } from './mangosteen-routing.module';

import { MangosteenPage } from './mangosteen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MangosteenPageRoutingModule
  ],
  declarations: [MangosteenPage]
})
export class MangosteenPageModule {}
