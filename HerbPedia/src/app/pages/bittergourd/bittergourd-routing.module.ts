import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BittergourdPage } from './bittergourd.page';

const routes: Routes = [
  {
    path: '',
    component: BittergourdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BittergourdPageRoutingModule {}
