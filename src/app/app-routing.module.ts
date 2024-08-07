import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splas',
    pathMatch: 'full'
  },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pickup-call',
    loadChildren: () => import('./pages/pickup-call/pickup-call.module').then( m => m.PickupCallPageModule)
  },
  {
    path: 'pickup-calls',
    loadChildren: () => import('./pages/pickup-calls/pickup-calls.module').then( m => m.PickupCallsPageModule)
  },
  {
    path: 'splas',
    loadChildren: () => import('./pages/splas/splas.module').then( m => m.SplasPageModule)
  },
  {
    path: 'filesystem',
    loadChildren: () => import('./pages/filesystem/filesystem.module').then( m => m.FilesystemPageModule)
  },
  {
    path: 'geolocation',
    loadChildren: () => import('./pages/geolocation/geolocation.module').then( m => m.GeolocationPageModule)
  },
  {
    path: 'crud',
    loadChildren: () => import('./pages/crud/crud.module').then( m => m.CrudPageModule)
  },
  {
    path: 'preferences',
    loadChildren: () => import('./pages/preferences/preferences.module').then( m => m.PreferencesPageModule)
  },
  {
    path: 'local-storage',
    loadChildren: () => import('./pages/local-storage/local-storage.module').then( m => m.LocalStoragePageModule)
  },
  {
    path: 'crudtwo',
    loadChildren: () => import('./pages/crudtwo/crudtwo.module').then( m => m.CrudtwoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
