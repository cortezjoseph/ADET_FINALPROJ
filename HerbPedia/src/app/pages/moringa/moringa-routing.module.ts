import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoringaPage } from './moringa.page';

const routes: Routes = [
  {
    path: '',
    component: MoringaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoringaPageRoutingModule {}
