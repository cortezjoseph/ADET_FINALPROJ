import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GarlicPage } from './garlic.page';

const routes: Routes = [
  {
    path: '',
    component: GarlicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GarlicPageRoutingModule {}
