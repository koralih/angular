import { Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';
// import {UpperCasePipeComponent}  from './uppercasepipe.component';
// import {LowerCasePipeComponent}  from './lowercasepipe.component';
@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.scss']
})

export class AffichageComponent implements OnInit {
  fsubList:Array<any>;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fsubList =  this.userService.affich()
     
  }


  
}

