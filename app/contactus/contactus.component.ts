import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  ngOnInit(): void {
  }

    title="Contact-Us";
  
    name=new FormControl('',[Validators.required,Validators.minLength(5)]);
  
    emailid=new FormControl('',[Validators.required,Validators.minLength(12),
      Validators.maxLength(60),Validators.pattern('^[a-zA-Z0-9.@]+$')]);
  
      telephone=new FormControl('',[Validators.required,Validators.minLength(10),
        Validators.pattern('^[0-9]+$')]);
  
        constructor(private builder:FormBuilder){}
  
        contactUsForm:FormGroup=this.builder.group(
          {
            name:this.name,
            emailid:this.emailid,
            telephone:this.telephone
          })
          contactUsFormData:any
          confirmationMessage:boolean=false
          onSubmitContactUsForm():void{
            console.log(this.contactUsForm)
            this.contactUsFormData=this.contactUsForm.value
            this.confirmationMessage=true
          }
  }

