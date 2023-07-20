import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OreganoPageRoutingModule } from './oregano-routing.module';

import { OreganoPage } from './oregano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OreganoPageRoutingModule
  ],
  declarations: [OreganoPage]
})
export class OreganoPageModule {}
