import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AffichageComponent } from './affichage/affichage.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'formulaire', component: FormulaireComponent},
  {path: 'affichage', component: AffichageComponent},
  {path: 'skills', component: SkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
