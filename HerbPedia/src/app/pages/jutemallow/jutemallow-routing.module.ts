import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JutemallowPage } from './jutemallow.page';

const routes: Routes = [
  {
    path: '',
    component: JutemallowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JutemallowPageRoutingModule {}
