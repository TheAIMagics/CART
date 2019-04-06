
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingrident';
import { Subject } from '../../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  ingridentChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  constructor() { }

  ingridents : Ingredient[]=[
    new Ingredient('salt',1),
    new Ingredient('pepper',2),
    new Ingredient('flour',3),
  ];

  getIngridents(){
    return this.ingridents.slice();
  }

  getIngrident( index : number ){
    return this.ingridents[index];
  }

  onIngridentAdded(ingrident: Ingredient){
    this.ingridents.push(ingrident);
    this.ingridentChanged.next(this.ingridents.slice());
  }

  onIngridentsAddedFromShopping(ingridents: Ingredient[]){
    this.ingridents.push(...ingridents);
    this.ingridentChanged.next(this.ingridents.slice());
  }
  
  updateIngrident( index : number , newIngrident : Ingredient ){
    this.ingridents[index] = newIngrident;
    this.ingridentChanged.next( this.ingridents.slice()); 
  }

  deleteIngrident( index : number ){
    this.ingridents.splice( index,1 );
    this.ingridentChanged.next( this.ingridents.slice()); 
  }

}
