import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingrident';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredient[]=[
     new Ingredient('Palak Paneer',12),
     new Ingredient('Kellogs',20)
  ];

  constructor() { }

  ngOnInit() {
  }

  onItemAdded( ingrident : Ingredient){
    this.ingredients.push(ingrident);
  }
  

}
