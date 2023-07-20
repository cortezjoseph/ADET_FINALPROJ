import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForestteaPage } from './foresttea.page';

const routes: Routes = [
  {
    path: '',
    component: ForestteaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForestteaPageRoutingModule {}
