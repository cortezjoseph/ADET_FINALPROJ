import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuavaPageRoutingModule } from './guava-routing.module';

import { GuavaPage } from './guava.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuavaPageRoutingModule
  ],
  declarations: [GuavaPage]
})
export class GuavaPageModule {}
