import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router, } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm : FormGroup;
input1:string;
input2:string;
loading=false;
submitted=false;
returnUrl:string;
color1:string='white';
menus ={ allMenu :false };
cc ={ green :'' }
  constructor(private formGroup: FormBuilder,private router: Router,private userService: UserService) { }
  ngOnInit (): void {
    this.loginForm = this.formGroup.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
    
  }
  onSubmit(){
    
  this.color1='red';
}
login(){
  let r =this.userService.login(this.input1,this.input2);
  console.log(r);
  
  if (r){this.router.navigateByUrl('/affichage')}
  else{alert("error")}
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
