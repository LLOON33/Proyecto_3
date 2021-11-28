import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor() {}

  componentes : Componente[] =[
    {
      icon: "home-outline",
      name: "Inicio",
      redirecTo: "/inicio"
    },

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
    {
      icon: 'sunny-outline', 
      name: 'registro', 
      redirecTo: '/regist'
    },
  ]
}

