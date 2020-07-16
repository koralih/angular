import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormControl } from '@angular/forms';
import{User} from '../User'

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  loginForm : FormGroup;
  email1:string;
  loading=false;
  submitted=false;
  returnUrl:string;
  color1:string='white';
  menus ={ allMenu :false };
  user: User = new User();
  cc ={ green :'' }
    constructor(private FormGroup: FormBuilder,) { }
    ngOnInit (): void {
      this.loginForm = this.FormGroup.group({
        email: new FormControl ('',[Validators.required,Validators.email]),
        password: new FormControl ('',[Validators.required,Validators.minLength(8),Validators.pattern('[a-zA-Z ]*')])

      });
      

      console.log(this.user);
    }
    onSubmit(){
      this.show();
    
  }
  get email() { return this.loginForm.get('email');
 }
 get password () { return this.loginForm.get('password');}
 show(){
  console.log('helllllllllloooooooooo', this.email.value);
  console.log(this.password.value);
  let key = 'user';
  let item = JSON.parse(localStorage.getItem(key)) || [];
  console.log("iteeeeeeeeeeem"+item);

  let obj = new Object();
  obj= {email:this.email.value , password:this.password.value}
  item.push(obj);
  localStorage.setItem(key, JSON.stringify(item));
  console.log(item);

}
  
}