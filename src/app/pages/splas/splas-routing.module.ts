import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplasPage } from './splas.page';

const routes: Routes = [
  {
    path: '',
    component: SplasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplasPageRoutingModule {}
