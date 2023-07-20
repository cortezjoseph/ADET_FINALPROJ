import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiveleavedPageRoutingModule } from './fiveleaved-routing.module';

import { FiveleavedPage } from './fiveleaved.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiveleavedPageRoutingModule
  ],
  declarations: [FiveleavedPage]
})
export class FiveleavedPageModule {}
