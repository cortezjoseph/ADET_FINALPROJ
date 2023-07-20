import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LemongrassPageRoutingModule } from './lemongrass-routing.module';

import { LemongrassPage } from './lemongrass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LemongrassPageRoutingModule
  ],
  declarations: [LemongrassPage]
})
export class LemongrassPageModule {}
