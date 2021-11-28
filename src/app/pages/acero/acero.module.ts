import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AceroPageRoutingModule } from './acero-routing.module';

import { AceroPage } from './acero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AceroPageRoutingModule
  ],
  declarations: [AceroPage]
})
export class AceroPageModule {}
