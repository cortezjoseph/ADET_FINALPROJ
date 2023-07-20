import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GingerPageRoutingModule } from './ginger-routing.module';

import { GingerPage } from './ginger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GingerPageRoutingModule
  ],
  declarations: [GingerPage]
})
export class GingerPageModule {}
