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
      labemail:'mail'
    
  }
  get email() { return this.loginForm.get('email');
 }
 get password () { return this.loginForm.get('password');}

}