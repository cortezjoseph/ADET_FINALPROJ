import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KingPage } from './king.page';

const routes: Routes = [
  {
    path: '',
    component: KingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KingPageRoutingModule {}
