import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingComponent } from './slList/shopping/shopping.component';

const appRoutes : Routes =[
    { path:'' , redirectTo:'/recipes', pathMatch: 'full'},
    { path:'recipes', component: RecipesComponent},
    { path:'shopping-list', component: ShoppingComponent},
];

@NgModule({
imports:[ RouterModule.forRoot(appRoutes)],
exports:[ RouterModule ]
})

export class AppRoutingModule{

}