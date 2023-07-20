import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'cough',
    loadChildren: () => import('../pages/ccf/ccf.module').then( m => m.CcfPageModule)
  },
  {
    path: 'ag',
    loadChildren: () => import('../pages/ag/ag.module').then( m => m.AgPageModule)
  },
  {
    path: 'diarrhea',
    loadChildren: () => import('../pages/diarrhea/diarrhea.module').then( m => m.DiarrheaPageModule)
  },
  {
    path: 'wound',
    loadChildren: () => import('../pages/wound/wound.module').then( m => m.WoundPageModule)
  },
  {
    path: 'other',
    loadChildren: () => import('../pages/other/other.module').then( m => m.OtherPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
