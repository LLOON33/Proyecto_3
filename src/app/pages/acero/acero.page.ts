import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-acero',
  templateUrl: './acero.page.html',
  styleUrls: ['./acero.page.scss'],
})
export class AceroPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() { 
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
}
