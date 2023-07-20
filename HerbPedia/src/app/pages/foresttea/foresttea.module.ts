import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForestteaPageRoutingModule } from './foresttea-routing.module';

import { ForestteaPage } from './foresttea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForestteaPageRoutingModule
  ],
  declarations: [ForestteaPage]
})
export class ForestteaPageModule {}
