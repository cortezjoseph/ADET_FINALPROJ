import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GarlicPageRoutingModule } from './garlic-routing.module';

import { GarlicPage } from './garlic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GarlicPageRoutingModule
  ],
  declarations: [GarlicPage]
})
export class GarlicPageModule {}
