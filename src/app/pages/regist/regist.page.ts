import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.page.html',
  styleUrls: ['./regist.page.scss'],
})
export class RegistPage implements OnInit {
    public nombre:any;
    public edad:any;
    public genero:any;
    public email:any;
    public password:any;

  
  constructor( public fireService:UserService) { }

  ngOnInit() {
  }
  signup(){
    this.fireService.signup({email:this.email,password:this.password}).then(res=>{
      if(res.user.uid){
        let data = {
          email:this.email,
          password:this.password,
          nombre:this.nombre,
          genero:this.genero,
          edad:this.edad,
          uid:res.user.uid
        }
        this.fireService.saveDetails(data).then(res=>{
         alert('Account Created!');
        },err=>{
          console.log(err);
        })
      }
    },err=>{
      alert(err.message);

      console.log(err);
    })
  }
}
