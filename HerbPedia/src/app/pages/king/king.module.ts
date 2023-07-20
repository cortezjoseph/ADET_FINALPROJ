import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KingPageRoutingModule } from './king-routing.module';

import { KingPage } from './king.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KingPageRoutingModule
  ],
  declarations: [KingPage]
})
export class KingPageModule {}
