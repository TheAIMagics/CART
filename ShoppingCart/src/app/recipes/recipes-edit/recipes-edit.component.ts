import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Params} from '@angular/router';
import { FormGroup,FormControl,FormArray,Validators } from '@angular/forms';
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
    
      if( this.editMode){
        this.recipeService.updateRecipe( this.id,this.recipeForm.value)
      }
      else{
        this.recipeService.addRecipe( this.recipeForm.value)
      }
      
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
              'name' : new FormControl(ingrident.name, Validators.required),
              'amount' : new FormControl(ingrident.amount,[
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          )
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName, Validators.required),
      'imagePath' : new FormControl(recipeImagePath, Validators.required),
      'description' : new FormControl ( recipeDescription ,Validators.required),
      'ingridents' : recipeIngridents
    });
    
  }

  onAddIngrident(){
   (<FormArray>this.recipeForm.get('ingridents')).push(
     new FormGroup({
       'name' : new FormControl( null,Validators.required),
       'amount' : new FormControl(null,[
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)
      ])
     })
   )
  }

}
