import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoldaduraPage } from './soldadura.page';

const routes: Routes = [
  {
    path: '',
    component: SoldaduraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoldaduraPageRoutingModule {}
