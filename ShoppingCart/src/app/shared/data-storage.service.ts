import { Injectable } from '@angular/core';
import { recipeService } from '../recipes/recipe.service';
import { Http ,Response} from '@angular/http';
import { Recipe } from '../recipes/recipe'
@Injectable()
export class dataStorageService{

    constructor( private http : Http, private recipeService : recipeService){}

    storeRecipes( ){
        return this.http.put('https://sample-59cfd.firebaseio.com/recipes.json',
        this.recipeService.getRecipes());
    }

    getRecipes(){
        return this.http.get('https://sample-59cfd.firebaseio.com/recipes.json')
        .subscribe(
            ( response : Response)=>{
                const recipes: Recipe[] = response.json();
                this.recipeService.setRecipes( recipes);
                console.log(response)
            }
        )
    }

}