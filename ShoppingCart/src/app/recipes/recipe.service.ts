import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe'

export class recipeService{

    recipeSelected = new EventEmitter<Recipe>();
    
    recipes : Recipe[] = [

        new Recipe('Pasta','Test Recipe',
        'https://sandbox-uploads.imgix.net/u/1548402925-1a76d09a91c147e7516d5f19ddf5526f?w=600'),
        new Recipe('PanCake','Test Recipe',
        'https://sandbox-uploads.imgix.net/u/1548404361-99faca462541d45079a23c26f322e7e2?w=600')
      ];

    getRecipes(){
        return this.recipes.slice();
    }
}