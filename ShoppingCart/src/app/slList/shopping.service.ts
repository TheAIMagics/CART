
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingrident';
import { Subject } from '../../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  ingridentChanged = new Subject<Ingredient[]>();

  constructor() { }

  ingridents : Ingredient[]=[
    new Ingredient('salt',1),
    new Ingredient('pepper',2),
    new Ingredient('flour',3),
  ];

  getIngridents(){
    return this.ingridents.slice();
  }

  onIngridentAdded(ingrident: Ingredient){
    this.ingridents.push(ingrident);
    this.ingridentChanged.next(this.ingridents.slice());
  }

  onIngridentsAddedFromShopping(ingridents: Ingredient[]){
    this.ingridents.push(...ingridents);
    this.ingridentChanged.next(this.ingridents.slice());
  }

}
