import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { recipeService } from '../recipe.service'
@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  @Input() recipe : Recipe;

  constructor( private recService : recipeService ) { }

  ngOnInit() {
  }

  onAddtoShoppingList(){
    this.recService.addIngridentstoShoppingList(this.recipe.ingridents);
  }

}
