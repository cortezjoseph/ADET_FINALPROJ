import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlackcurrantPage } from './blackcurrant.page';

const routes: Routes = [
  {
    path: '',
    component: BlackcurrantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlackcurrantPageRoutingModule {}
