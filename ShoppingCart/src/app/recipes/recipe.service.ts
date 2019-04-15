import { EventEmitter ,Injectable} from '@angular/core';
import { Recipe } from './recipe'
import { Ingredient } from '../shared/ingrident';
import { ShoppingService } from '../slList/shopping.service';
import { Subject} from 'rxjs'
@Injectable()

export class recipeService{

   recipeChanged = new Subject<Recipe[]>();
    
    recipes : Recipe[] = [

        new Recipe('Pasta','Test Recipe',
        'https://sandbox-uploads.imgix.net/u/1548402925-1a76d09a91c147e7516d5f19ddf5526f?w=600',
         [
             new Ingredient('pasta',1),
             new Ingredient('pepper',4),
         ]
        ),
        new Recipe('PanCake','Test Recipe',
        'https://sandbox-uploads.imgix.net/u/1548404361-99faca462541d45079a23c26f322e7e2?w=600',
         [
            new Ingredient('buns',1),
            new Ingredient('chillies',4),
         ]
        )
      ];
    
      constructor(private slservice : ShoppingService) { }

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe( index: number){
        return this.recipes[index];
    }
    
    addIngridentstoShoppingList(ingrident : Ingredient[]){
        this.slservice.onIngridentsAddedFromShopping(ingrident);
    }

    addRecipe( recipe : Recipe ){
        this.recipes.push( recipe );
        this.recipeChanged.next( this.recipes.slice());
    }

    updateRecipe( index : number , newRecipe : Recipe){
        this.recipes[ index] = newRecipe;
        this.recipeChanged.next( this.recipes.slice());
    }

}