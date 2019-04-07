import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Params} from '@angular/router';
import { FormGroup,FormControl,FormArray } from '@angular/forms';
import { recipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {

  id: number;
  editMode=false;
  recipeForm : FormGroup;

  constructor( private route : ActivatedRoute , private recipeService : recipeService ) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      ( params : Params) =>{

        this.id = +params['id'];
        this.editMode = params['id'] != null;
        //console.log(this.editMode)
        this.initForm();
      }
    )
  }
  onSubmit(){
    console.log(this.recipeForm)
  }
  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
  private initForm(){

    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngridents = new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeService.getRecipe( this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.decription;

      if(recipe['ingridents']){
        for( let ingrident of recipe.ingridents){
          recipeIngridents.push(
            new FormGroup({
              'name' : new FormControl(ingrident.name),
              'amount' : new FormControl(ingrident.amount)
            })
          )
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName),
      'imagePath' : new FormControl(recipeImagePath),
      'description' : new FormControl ( recipeDescription),
      'ingridents' : recipeIngridents
    });
    
  }

}
