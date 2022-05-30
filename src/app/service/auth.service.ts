import { Injectable } from '@angular/core';
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
  getAuth,
} from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { SessionService } from './session.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData?: any;

  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service,
    public router: Router,
    public sessionService: SessionService
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.sessionService.setInfo(JSON.stringify(user?.uid));
        this.userData = user;
        router.navigate(['memos']);
      }
    });
  }
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }
  // Sign in with facebook
  facebookAuth() {
    return this.AuthLogin(new FacebookAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.sessionService.setInfo(JSON.stringify(result.user?.uid));
        this.userData = result.user;
        this.router.navigate(['memos']);
      })
      .catch((error) => {
        console.log('error');
        console.log(error);
      });
  }
  logout() {
    return this.afAuth.signOut().then(() => {
      this.sessionService.logOut();
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
