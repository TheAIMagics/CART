import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { recipeService } from '../recipe.service';
import { ActivatedRoute ,Params , Router} from '@angular/router';
@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

   recipe : Recipe;
  
   id:number;

  constructor( private recService : recipeService, 
    private route:ActivatedRoute, private router : Router ) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.recipe = this.recService.getRecipe( this.id);
      }
    );
  }

  onAddtoShoppingList(){
    this.recService.addIngridentstoShoppingList(this.recipe.ingridents);
  }
  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo : this.route});
  }

}
