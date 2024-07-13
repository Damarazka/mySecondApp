import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudtwoPageRoutingModule } from './crudtwo-routing.module';

import { CrudtwoPage } from './crudtwo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudtwoPageRoutingModule
  ],
  declarations: [CrudtwoPage]
})
export class CrudtwoPageModule {}
