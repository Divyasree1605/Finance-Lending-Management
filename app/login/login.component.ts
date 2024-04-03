import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }
  title = 'login-page';
  username=new FormControl('',[Validators.required,Validators.minLength(5)]);

  password=new FormControl('',[Validators.required,Validators.minLength(12),
    Validators.maxLength(60),Validators.pattern('^[a-zA-Z0-9.@]+$')]);

    constructor(private builder:FormBuilder){}

    loginForm:FormGroup=this.builder.group(
      {
        username:this.username,
        password:this.password
      })
      loginFormData:any
      confirmationMessage:boolean=false
      onSubmitLoginForm():void{
        console.log(this.loginForm)
        this.loginFormData=this.loginForm.value
        this.confirmationMessage=true
      }
    
}

