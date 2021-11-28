import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AceroPage } from '../acero/acero.page';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes : Componente[] =[
    {
      icon: "cube-outline",
      name: "Tipos De Acero",
      redirecTo: "/acero"
    },
    {
      icon: "cube-outline",
      name: "Tipos De Soldadura",
      redirecTo: "/soldadura"
    },
    {
      icon: 'sunny-outline', 
      name: 'Datos', 
      redirecTo: '/datos'
    },
    {
      icon: 'alarm-outline', 
      name: 'Noticias', 
      redirecTo: '/noticias'
    },
  ]

  




  constructor(private menuController: MenuController)  { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
