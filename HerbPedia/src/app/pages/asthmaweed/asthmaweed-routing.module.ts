import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsthmaweedPage } from './asthmaweed.page';

const routes: Routes = [
  {
    path: '',
    component: AsthmaweedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsthmaweedPageRoutingModule {}
