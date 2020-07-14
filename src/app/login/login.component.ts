import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm : FormGroup;
loading=false;
submitted=false;
returnUrl:string;
color1:string='white';
menus ={ allMenu :false };
cc ={ green :'' }
  constructor(private formGroup: FormBuilder,) { }
  ngOnInit (): void {
    this.loginForm = this.formGroup.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
  }
  onSubmit(){
  this.color1='red';
}
changeCategory(allMenu){
  console.log(this.loginForm);
  
  this.menus.allMenu=true;
}
changeCategor(green){
  console.log(this.loginForm.value);
  
  this.cc.green='green';
}
}
