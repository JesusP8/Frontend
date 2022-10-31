import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public postData = {
    username: '',
    clave: ''
  };

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  ingresar(){
    console.log(this.postData);
  }

}
