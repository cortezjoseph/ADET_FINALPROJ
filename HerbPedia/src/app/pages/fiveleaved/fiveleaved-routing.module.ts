import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiveleavedPage } from './fiveleaved.page';

const routes: Routes = [
  {
    path: '',
    component: FiveleavedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiveleavedPageRoutingModule {}
