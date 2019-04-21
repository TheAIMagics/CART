import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule} from './app-routing.module'
import { AppComponent } from './app.component';
import { HeaderComponent } from "./Header/header.component";
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';

import { HttpModule} from '@angular/http'
import { dropDown } from './shared/dropDown.directive';
import { recipeService } from './recipes/recipe.service';
import { ShoppingComponent } from './slList/shopping/shopping.component';
import { EditComponent } from './slList/edit/edit.component';
import { ShoppingService } from './slList/shopping.service';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { dataStorageService } from './shared/data-storage.service'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    dropDown,
    ShoppingComponent,
    EditComponent,
    RecipesStartComponent,
    RecipesEditComponent
    
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule,ReactiveFormsModule,
    HttpModule
  ],
  providers:[ShoppingService,recipeService,dataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
