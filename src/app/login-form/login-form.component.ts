import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  logUser(e){
    var username = e.target.elements[0].value;
    var psw = e.target.elements[1].value;
    console.log(username,psw);
    
    if(username == 'admin' && psw == 'admin'){
      this.router.navigate(['dashboard']);
    }
  }
}
