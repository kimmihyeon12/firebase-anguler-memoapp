import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor() {}
  setInfo(userId: string) {
    sessionStorage.setItem('id', userId);
  }
  getInfo(): string | null {
    return sessionStorage.getItem('id');
  }

  logOut() {
    //로그아웃 기능은 아래와 같은식으로
    sessionStorage.removeItem('id');
  }
}
