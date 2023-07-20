import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RingwormPageRoutingModule } from './ringworm-routing.module';

import { RingwormPage } from './ringworm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RingwormPageRoutingModule
  ],
  declarations: [RingwormPage]
})
export class RingwormPageModule {}
