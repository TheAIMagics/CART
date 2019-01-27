import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipe : Recipe;

  @Output() selectedRecipe =new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }

  selectedItem(){
    this.selectedRecipe.emit();
  }
  

}
