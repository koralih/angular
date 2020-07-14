import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormulaireComponent } from './formulaire/formulaire.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'formulaire', component: FormulaireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
