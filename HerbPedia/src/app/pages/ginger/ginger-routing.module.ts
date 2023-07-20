import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GingerPage } from './ginger.page';

const routes: Routes = [
  {
    path: '',
    component: GingerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GingerPageRoutingModule {}
