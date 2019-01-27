import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipesListComponent } from '../recipes-list/recipes-list.component';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  @Input() recipe : Recipe;

  constructor() { }

  ngOnInit() {
  }

}
