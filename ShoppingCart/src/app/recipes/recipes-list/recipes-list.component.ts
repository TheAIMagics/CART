import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { Recipe } from '../recipe';
import { recipeService } from '../recipe.service';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {


  recipes :Recipe[] ;

  constructor( private recService : recipeService , private router : Router,
  private route : ActivatedRoute)
   { }

  ngOnInit() {
    this.recipes= this.recService.getRecipes()
  }

  onNewRecipeCreated(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  

}
