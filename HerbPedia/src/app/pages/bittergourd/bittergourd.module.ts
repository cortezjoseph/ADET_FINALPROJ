import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BittergourdPageRoutingModule } from './bittergourd-routing.module';

import { BittergourdPage } from './bittergourd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BittergourdPageRoutingModule
  ],
  declarations: [BittergourdPage]
})
export class BittergourdPageModule {}
