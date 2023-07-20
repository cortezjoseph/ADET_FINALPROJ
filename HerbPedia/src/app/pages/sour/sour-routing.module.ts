import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SourPage } from './sour.page';

const routes: Routes = [
  {
    path: '',
    component: SourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SourPageRoutingModule {}
