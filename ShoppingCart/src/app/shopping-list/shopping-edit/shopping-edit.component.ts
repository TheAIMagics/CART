import { Component, OnInit, ViewChild, ElementRef ,Output,EventEmitter } from '@angular/core';
import { Ingredient  } from '../../shared/ingrident';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName') inputNameRef : ElementRef;
  @ViewChild('inputAmount') inputAmountRef : ElementRef;
  @Output() itemAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onItemAdded(){
     const ingName = this.inputNameRef.nativeElement.value;
     const ingAmount = this.inputAmountRef.nativeElement.value;
     const newIngrident = new Ingredient(ingName,ingAmount);

     this.itemAdded.emit(newIngrident);

  }
 

}
