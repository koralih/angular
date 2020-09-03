import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from "rxjs";
import { Router, } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
isLoggedIn : Observable<boolean>;
  constructor(private userService: UserService, private router : Router) {this.isLoggedIn = userService.isLoggedIn(); }

  ngOnInit(): void {
  }
   logout(){

         this.userService.logout();
         this.router.navigateByUrl('/login')
   }

}
