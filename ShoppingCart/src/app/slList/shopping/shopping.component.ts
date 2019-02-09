import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { Ingredient } from '../../shared/ingrident';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  ingridents : Ingredient[]

  constructor(private slservice : ShoppingService) { }

  ngOnInit() {
    this.ingridents= this.slservice.getIngridents();
    this.slservice.ingridentChanged
    .subscribe(
      (ingridents : Ingredient[])=>
      {
        this.ingridents = ingridents
      }
    );
  }

}
