import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColeusPageRoutingModule } from './coleus-routing.module';

import { ColeusPage } from './coleus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColeusPageRoutingModule
  ],
  declarations: [ColeusPage]
})
export class ColeusPageModule {}
