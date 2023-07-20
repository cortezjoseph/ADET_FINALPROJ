import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RangoonPage } from './rangoon.page';

const routes: Routes = [
  {
    path: '',
    component: RangoonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RangoonPageRoutingModule {}
