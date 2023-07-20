import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlackcurrantPageRoutingModule } from './blackcurrant-routing.module';

import { BlackcurrantPage } from './blackcurrant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlackcurrantPageRoutingModule
  ],
  declarations: [BlackcurrantPage]
})
export class BlackcurrantPageModule {}
