import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( public auntenticar: AngularFireAuth,
    public FireStore: AngularFirestore) { }

    LoginEmail(data){

      return this.auntenticar.signInWithEmailAndPassword(data.email, data.password);
  
    }
    async signup(data) {
      return this.auntenticar.createUserWithEmailAndPassword(data.email, data.password,);
    }
    saveDetails(data) {
      return this.FireStore.collection("users").doc(data.uid).set(data);
    }
    getDetails(data) {
      return this.FireStore.collection("users").doc(data.uid).valueChanges();
    }
}
