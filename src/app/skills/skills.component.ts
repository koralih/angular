import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

export interface Skills {
  name: string;
}

export interface Experience {
  name: string;
}


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})


export class SkillsComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  form: FormGroup;
  tab=[];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  skills: Skills[] = [
    {name: 'node'},
    {name: 'Angular'},
  ];

  exp: Experience[] = [
    {name: 'work'},
  ];

  removeExp(exp: Experience): void {
    const index = this.exp.indexOf(exp);

    if (index >= 0) {
      this.exp.splice(index, 1);
    }
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.skills.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(skills: Skills): void {
    const index = this.skills.indexOf(skills);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  addExp(){

  }
  
  
  
    
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      published: true,
      credentials: this.fb.array([]),
    });
   }

   addCreds() {
    const creds = this.form.controls.credentials as FormArray;
    creds.push(this.fb.group({
      exp: '',
    }));
  }

  deleteCreds(index: number) {
    const creds = this.form.controls.credentials as FormArray;
  creds.removeAt(index);
  }


  ngOnInit(): void {
  
  } 

}