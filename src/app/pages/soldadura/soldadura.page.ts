import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-soldadura',
  templateUrl: './soldadura.page.html',
  styleUrls: ['./soldadura.page.scss'],
})
export class SoldaduraPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
