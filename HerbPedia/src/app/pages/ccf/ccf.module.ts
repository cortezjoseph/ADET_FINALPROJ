import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CcfPageRoutingModule } from './ccf-routing.module';

import { CcfPage } from './ccf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CcfPageRoutingModule
  ],
  declarations: [CcfPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CcfPageModule {}
