import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CcfPage } from './ccf.page';

const routes: Routes = [
  {
    path: '',
    component: CcfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CcfPageRoutingModule {}
