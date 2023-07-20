import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MangosteenPage } from './mangosteen.page';

const routes: Routes = [
  {
    path: '',
    component: MangosteenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangosteenPageRoutingModule {}
