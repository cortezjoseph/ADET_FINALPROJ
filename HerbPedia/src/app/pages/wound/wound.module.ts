import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WoundPageRoutingModule } from './wound-routing.module';

import { WoundPage } from './wound.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WoundPageRoutingModule
  ],
  declarations: [WoundPage]
})
export class WoundPageModule {}
