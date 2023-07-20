import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RangoonPageRoutingModule } from './rangoon-routing.module';

import { RangoonPage } from './rangoon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RangoonPageRoutingModule
  ],
  declarations: [RangoonPage]
})
export class RangoonPageModule {}
