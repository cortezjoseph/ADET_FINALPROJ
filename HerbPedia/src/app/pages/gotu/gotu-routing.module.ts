import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GotuPage } from './gotu.page';

const routes: Routes = [
  {
    path: '',
    component: GotuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GotuPageRoutingModule {}
