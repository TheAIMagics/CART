import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe';
import { recipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipe : Recipe;

  
  constructor( private recService : recipeService ) { }

  ngOnInit() {
  }

  selectedItem(){
   this.recService.recipeSelected.emit(this.recipe);
  }
  

}
