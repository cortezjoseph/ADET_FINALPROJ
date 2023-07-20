import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GotuPageRoutingModule } from './gotu-routing.module';

import { GotuPage } from './gotu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GotuPageRoutingModule
  ],
  declarations: [GotuPage]
})
export class GotuPageModule {}
