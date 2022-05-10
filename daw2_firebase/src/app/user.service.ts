import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }

  getUsers() {
    return this.firestore.collection("users-list").snapshotChanges();
  }

  getUserById(id) {
    return this.firestore.collection("users-list").doc(id).valueChanges();
  }

  createUser(user: User){
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection("users-list").add(user).then( (response) => { console.log(response) }, (error) => { reject(error) });
    });
  }

  updateUser(user: User, id){
    return this.firestore.collection("users-list").doc(id).update({
      userNickname: user.userNickname,
      userRealname: user.userRealname,
    });
  }

  deleteUser(user){
    return this.firestore.collection("users-list").doc(user.id).delete();
  }
}
