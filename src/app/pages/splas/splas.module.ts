import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplasPageRoutingModule } from './splas-routing.module';

import { SplasPage } from './splas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplasPageRoutingModule
  ],
  declarations: [SplasPage]
})
export class SplasPageModule {}
