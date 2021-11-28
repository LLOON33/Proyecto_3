import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import  firebase  from '@firebase/app-compat';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email:any;
  public password:any;
  usuario= null;

  constructor(
    public router:Router,
    public fireService:UserService,
    public afAuth: AngularFireAuth
  ) { this.afAuth.authState.subscribe((usuario) => {
    this.usuario = usuario ? usuario : null;
  }); }

  ngOnInit() {
  }

  login(){
    this.fireService.LoginEmail({email:this.email,password:this.password}).then(res=>{
      console.log(res);
      if(res.user.uid){
        this.fireService.getDetails({uid:res.user.uid}).subscribe(res=>{
          console.log(res);
          alert('Bienvenido '+ res['nombre']);
          this.router.navigate(['/inicio'])
        },err=>{
          console.log(err);
        });
      }
    },err=>{
      alert(err.message)
      console.log(err);
    })
  }

  signup(){
    this.router.navigate(['/regist'])
  }


}
