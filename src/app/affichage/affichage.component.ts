import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.scss']
})
export class AffichageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let key = 'user';
    let item = JSON.parse(localStorage.getItem(key)) || [];
    for (let i = 0; i<localStorage.length; i++){
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);
      console.log(key, value);
      console.log(item);
  }


  
}
}
