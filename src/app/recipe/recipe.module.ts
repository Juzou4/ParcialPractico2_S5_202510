import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';



@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RecipeModule { }
