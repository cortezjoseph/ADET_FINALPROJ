import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RingwormPage } from './ringworm.page';

const routes: Routes = [
  {
    path: '',
    component: RingwormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RingwormPageRoutingModule {}
