import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JutemallowPageRoutingModule } from './jutemallow-routing.module';

import { JutemallowPage } from './jutemallow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JutemallowPageRoutingModule
  ],
  declarations: [JutemallowPage]
})
export class JutemallowPageModule {}
