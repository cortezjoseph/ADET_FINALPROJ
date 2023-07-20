import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsthmaweedPageRoutingModule } from './asthmaweed-routing.module';

import { AsthmaweedPage } from './asthmaweed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsthmaweedPageRoutingModule
  ],
  declarations: [AsthmaweedPage]
})
export class AsthmaweedPageModule {}
