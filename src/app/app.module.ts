import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AffichageComponent } from './affichage/affichage.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SkillsComponent } from './skills/skills.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import { ParentComponent } from './parent/parent.component';
import { Chlid1Component } from './parent/chlid1/chlid1.component';
import { Chlid2Component } from './parent/chlid2/chlid2.component';

const MaterielComponents=[
  MatButtonModule
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormulaireComponent,
    NavbarComponent,
    AffichageComponent,
    SkillsComponent,
    ParentComponent,
    Chlid1Component,
    Chlid2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatChipsModule,
    MatIconModule
   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
