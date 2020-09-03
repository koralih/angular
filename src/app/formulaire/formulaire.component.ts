import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormControl } from '@angular/forms';
import{User} from '../User'
import { UserService } from '../user.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  loginForm : FormGroup;
  email1:string;
  input1:string;
  input2:string;
  loading=false;
  submitted=false;
  returnUrl:string;
  color1:string='white';
  menus ={ allMenu :false };
  user: User = new User();
  cc ={ green :'' }
    constructor(private FormGroup: FormBuilder,private userService: UserService) { }
    ngOnInit (): void {
      this.loginForm = this.FormGroup.group({
        email: new FormControl ('',[Validators.required,Validators.email]),
        password: new FormControl ('',[Validators.required,Validators.minLength(8),Validators.pattern('[a-zA-Z ]*')])

      });
      

      console.log(this.user);
    }
    onSubmit(){
 this.userService.regester(this.email.value,this.password.value)    
  }
  get email() { return this.loginForm.get('email');
 }
 get password () { return this.loginForm.get('password');}
myfunction(){
  this.input1 = this.email.value;
  this.input2 = this.password.value;
}
  
}