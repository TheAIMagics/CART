import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { Ingredient } from '../../shared/ingrident';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @ViewChild('inputName') nameRef : ElementRef;
  @ViewChild('inputAmount') amountRef : ElementRef;

  constructor(private slservice : ShoppingService) { }

  ngOnInit() {
    
  }

  IngridentAdded(){
    const name = this.nameRef.nativeElement.value;
    const amount = this.amountRef.nativeElement.value;
    const newIngrident = new Ingredient(name,amount);
   // console.log(ingrident)
   this.slservice.onIngridentAdded(newIngrident);

  }

}
