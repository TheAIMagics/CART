import { Component, OnInit,OnDestroy } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { Ingredient } from '../../shared/ingrident';
import { Subscription } from '../../../../node_modules/rxjs';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit ,OnDestroy{

  ingridents : Ingredient[];

  private subscription:Subscription;
  constructor(private slservice : ShoppingService) { }

  ngOnInit() {
    this.ingridents= this.slservice.getIngridents();
    this.subscription = this.slservice.ingridentChanged
    .subscribe(
      (ingridents : Ingredient[])=>
      {
        this.ingridents = ingridents
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();// to prevent any memory leaks
  }

}
