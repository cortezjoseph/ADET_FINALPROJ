import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurmericPageRoutingModule } from './turmeric-routing.module';

import { TurmericPage } from './turmeric.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurmericPageRoutingModule
  ],
  declarations: [TurmericPage]
})
export class TurmericPageModule {}
