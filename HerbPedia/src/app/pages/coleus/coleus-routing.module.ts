import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColeusPage } from './coleus.page';

const routes: Routes = [
  {
    path: '',
    component: ColeusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColeusPageRoutingModule {}
