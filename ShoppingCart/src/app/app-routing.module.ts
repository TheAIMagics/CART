import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingComponent } from './slList/shopping/shopping.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';

const appRoutes : Routes =[
    { path:'' , redirectTo:'/recipes', pathMatch: 'full'},
    { path:'recipes', component: RecipesComponent,children:[
        {path:'',component : RecipesStartComponent },
        {path: 'new' , component : RecipesEditComponent},
        {path:':id',component : RecipesDetailComponent }, 
        {path: ':id/edit' , component : RecipesEditComponent}
    ]},
    { path:'shopping-list', component: ShoppingComponent},
];

@NgModule({
imports:[ RouterModule.forRoot(appRoutes)],
exports:[ RouterModule ]
})

export class AppRoutingModule{

}