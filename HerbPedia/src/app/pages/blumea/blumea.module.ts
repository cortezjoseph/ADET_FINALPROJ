import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlumeaPageRoutingModule } from './blumea-routing.module';

import { BlumeaPage } from './blumea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlumeaPageRoutingModule
  ],
  declarations: [BlumeaPage]
})
export class BlumeaPageModule {}
