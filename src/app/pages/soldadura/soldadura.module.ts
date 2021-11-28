import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoldaduraPageRoutingModule } from './soldadura-routing.module';

import { SoldaduraPage } from './soldadura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoldaduraPageRoutingModule
  ],
  declarations: [SoldaduraPage]
})
export class SoldaduraPageModule {}
