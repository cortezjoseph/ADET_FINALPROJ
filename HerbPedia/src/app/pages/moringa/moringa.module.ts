import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoringaPageRoutingModule } from './moringa-routing.module';

import { MoringaPage } from './moringa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoringaPageRoutingModule
  ],
  declarations: [MoringaPage]
})
export class MoringaPageModule {}
