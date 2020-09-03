import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UserService {
 isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
  
  constructor() { }
private hasToken() : boolean {
    return !!localStorage.getItem('token');
  }
  login( input1:string, input2:string){
      let item = JSON.parse(localStorage.getItem('user')) || [];
    const  found = item.find(el => input1==el.email && input2==el.password);
    
    if (found==undefined){
return false;
    }
    else { 
      localStorage.setItem('token', 'JWT');
  this.isLoginSubject.next(true);
  return true;
    }
  }
  logout(){
  localStorage.removeItem('token');
  this.isLoginSubject.next(false);
}
  regester(email,password){
    let item = JSON.parse(localStorage.getItem('user')) || [];
  
    let obj = new Object();
    obj= {email , password}
    item.push(obj);
    localStorage.setItem('user', JSON.stringify(item));
    console.log(item);
  
  }
  isLoggedIn() : Observable<boolean> {
 return this.isLoginSubject.asObservable();
}
  affich(){
      let item = JSON.parse(localStorage.getItem('user')) || [];
   return item;
}
}