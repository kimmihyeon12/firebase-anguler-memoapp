import { Component, OnInit } from '@angular/core';
import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'; // ← 추가
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public authService: AuthService) {}
  ngOnInit(): void {}
}
