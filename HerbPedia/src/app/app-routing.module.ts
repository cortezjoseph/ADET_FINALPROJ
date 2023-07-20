import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'asthmaweed',
    loadChildren: () => import('./pages/asthmaweed/asthmaweed.module').then( m => m.AsthmaweedPageModule)
  },
  {
    path: 'bittergourd',
    loadChildren: () => import('./pages/bittergourd/bittergourd.module').then( m => m.BittergourdPageModule)
  },
  {
    path: 'blackcurrant',
    loadChildren: () => import('./pages/blackcurrant/blackcurrant.module').then( m => m.BlackcurrantPageModule)
  },
  {
    path: 'cats',
    loadChildren: () => import('./pages/cats/cats.module').then( m => m.CatsPageModule)
  },
  {
    path: 'fiveleaved',
    loadChildren: () => import('./pages/fiveleaved/fiveleaved.module').then( m => m.FiveleavedPageModule)
  },
  {
    path: 'foresttea',
    loadChildren: () => import('./pages/foresttea/foresttea.module').then( m => m.ForestteaPageModule)
  },
  {
    path: 'garlic',
    loadChildren: () => import('./pages/garlic/garlic.module').then( m => m.GarlicPageModule)
  },
  {
    path: 'ginger',
    loadChildren: () => import('./pages/ginger/ginger.module').then( m => m.GingerPageModule)
  },
  {
    path: 'gotu',
    loadChildren: () => import('./pages/gotu/gotu.module').then( m => m.GotuPageModule)
  },
  {
    path: 'guava',
    loadChildren: () => import('./pages/guava/guava.module').then( m => m.GuavaPageModule)
  },
  {
    path: 'holybasil',
    loadChildren: () => import('./pages/holybasil/holybasil.module').then( m => m.HolybasilPageModule)
  },
  {
    path: 'jutemallow',
    loadChildren: () => import('./pages/jutemallow/jutemallow.module').then( m => m.JutemallowPageModule)
  },
  {
    path: 'king',
    loadChildren: () => import('./pages/king/king.module').then( m => m.KingPageModule)
  },
  {
    path: 'lemongrass',
    loadChildren: () => import('./pages/lemongrass/lemongrass.module').then( m => m.LemongrassPageModule)
  },
  {
    path: 'mangosteen',
    loadChildren: () => import('./pages/mangosteen/mangosteen.module').then( m => m.MangosteenPageModule)
  },
  {
    path: 'mint',
    loadChildren: () => import('./pages/mint/mint.module').then( m => m.MintPageModule)
  },
  {
    path: 'moringa',
    loadChildren: () => import('./pages/moringa/moringa.module').then( m => m.MoringaPageModule)
  },
  {
    path: 'oregano',
    loadChildren: () => import('./pages/oregano/oregano.module').then( m => m.OreganoPageModule)
  },
  {
    path: 'queen',
    loadChildren: () => import('./pages/queen/queen.module').then( m => m.QueenPageModule)
  },
  {
    path: 'rangoon',
    loadChildren: () => import('./pages/rangoon/rangoon.module').then( m => m.RangoonPageModule)
  },
  {
    path: 'ringworm',
    loadChildren: () => import('./pages/ringworm/ringworm.module').then( m => m.RingwormPageModule)
  },
  {
    path: 'seed',
    loadChildren: () => import('./pages/seed/seed.module').then( m => m.SeedPageModule)
  },
  {
    path: 'silver',
    loadChildren: () => import('./pages/silver/silver.module').then( m => m.SilverPageModule)
  },
  {
    path: 'sour',
    loadChildren: () => import('./pages/sour/sour.module').then( m => m.SourPageModule)
  },
  {
    path: 'turmeric',
    loadChildren: () => import('./pages/turmeric/turmeric.module').then( m => m.TurmericPageModule)
  },
  {
    path: 'ccf',
    loadChildren: () => import('./pages/ccf/ccf.module').then( m => m.CcfPageModule)
  },
  {
    path: 'ag',
    loadChildren: () => import('./pages/ag/ag.module').then( m => m.AgPageModule)
  },
  {
    path: 'diarrhea',
    loadChildren: () => import('./pages/diarrhea/diarrhea.module').then( m => m.DiarrheaPageModule)
  },
  {
    path: 'wound',
    loadChildren: () => import('./pages/wound/wound.module').then( m => m.WoundPageModule)
  },
  {
    path: 'other',
    loadChildren: () => import('./pages/other/other.module').then( m => m.OtherPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
