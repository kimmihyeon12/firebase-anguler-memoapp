import { Injectable } from '@angular/core';
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
  getAuth,
} from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;
  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service,
    public router: Router
  ) {
    this.afAuth.authState.subscribe((user) => {
      console.log(this.userData);
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }
  facebookAuth() {
    return this.AuthLogin(new FacebookAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        localStorage.setItem('user', JSON.stringify(result.user));
        this.router.navigate(['memos']);
      })
      .catch((error) => {
        console.log('error');
        console.log(error);
      });
  }
  logout() {
    return this.afAuth.signOut().then(() => {
      localStorage.setItem('user', 'null');
      this.router.navigate(['login']);
    });
    console.log('logout');
    const auth = getAuth();
    console.log(auth);
    signOut(auth)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log('error');
        console.log(error);
      });
  }

  isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }
}
