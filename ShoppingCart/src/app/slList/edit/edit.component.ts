import { Component, OnInit, ViewChild  } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { Ingredient } from '../../shared/ingrident';
import { NgForm } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @ViewChild('f') slForm : NgForm;
  editMode = false;
  eidtedItemIndex : number;
  subscription : Subscription;
  editedItem : Ingredient;

  constructor(private slservice : ShoppingService) { }

  ngOnInit() {
    this.subscription = this.slservice.startedEditing.subscribe(
      (index : number )=>{
        this.eidtedItemIndex = index; 
        this.editMode = true;
        this.editedItem = this.slservice.getIngrident( index );
        this.slForm.setValue({
          name : this.editedItem.name,
          amount : this.editedItem.amount
        });

      }
    );
  }

  IngridentAdded( form : NgForm){
    const value = form.value;
    const newIngrident = new Ingredient(value.name,value.amount);
   // console.log(ingrident)

   if(this.editMode){
     this.slservice.updateIngrident(this.eidtedItemIndex, newIngrident)
   }
   else{
    this.slservice.onIngridentAdded(newIngrident);
   }
   this.editMode = false;
   form.reset();
  }
  onReset(){
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete( index : number ){
   
    this.slservice.deleteIngrident(index);
    this.onReset();
  }

}
