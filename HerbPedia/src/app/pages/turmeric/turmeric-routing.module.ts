import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurmericPage } from './turmeric.page';

const routes: Routes = [
  {
    path: '',
    component: TurmericPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TurmericPageRoutingModule {}
