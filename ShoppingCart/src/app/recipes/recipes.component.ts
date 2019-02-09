import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';
import { recipeService } from './recipe.service'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[recipeService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe : Recipe;

  constructor(  private recService : recipeService ) { }

  ngOnInit() {
    this.recService.recipeSelected
    .subscribe(
      (recipe : Recipe ) =>{
        this.selectedRecipe= recipe;
      }
    );
  }

  
}
