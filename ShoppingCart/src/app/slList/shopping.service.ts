import { EventEmitter} from '@angular/core';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingrident';
@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  ingridentChanged = new EventEmitter<Ingredient[]>();

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
    this.ingridentChanged.emit(this.ingridents.slice());
  }

}
