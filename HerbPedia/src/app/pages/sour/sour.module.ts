import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SourPageRoutingModule } from './sour-routing.module';

import { SourPage } from './sour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SourPageRoutingModule
  ],
  declarations: [SourPage]
})
export class SourPageModule {}
