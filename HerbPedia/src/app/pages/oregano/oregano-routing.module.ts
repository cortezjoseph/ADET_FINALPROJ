import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OreganoPage } from './oregano.page';

const routes: Routes = [
  {
    path: '',
    component: OreganoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OreganoPageRoutingModule {}
