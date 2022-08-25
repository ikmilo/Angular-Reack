import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myLoginForm:FormGroup
  constructor(
    private loginFb:FormBuilder
  ) { 
    this.myLoginForm=this.loginFb.group({
      email:["",[Validators.email,Validators.required]],
      password:["",[Validators.required,Validators.minLength(6)]]
    })
  }
  login(){
    console.log(this.myLoginForm.value)
    alert("Login con éxito")
  }
  ngOnInit(): void {
  }

}
