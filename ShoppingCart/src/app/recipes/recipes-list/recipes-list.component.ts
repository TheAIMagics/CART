import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { recipeService } from '../recipe.service'

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {


  recipes :Recipe[] ;

  constructor( private recService : recipeService ) { }

  ngOnInit() {
    this.recipes= this.recService.getRecipes()
  }


  

}
