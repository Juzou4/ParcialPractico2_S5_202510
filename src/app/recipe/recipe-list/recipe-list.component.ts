import { Component, OnInit } from '@angular/core';
import {Recipe} from'../recipe';
import { dataRecipes} from '../dataRecipes';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe>= [];
  constructor ( private recipeService:RecipeService) {}
//   selected: Boolean = false;
//   selectedRecipe = Recipe

// onSelected(recipe: Recipe): void {
//     this.selected = true;
//     this.selectedRecipe = recipe;
  //}

  // getRecipes(): void {
  //   this.recipeService.getRecipes().subscribe((recipes) => {
  //     this.recipes = recipes;
  //   });

  getRecipesList(): Array<Recipe> {
    this.recipeService.getRecipes().subscribe((data) =>{
      this.recipes = data;
    });
    return this.recipes;
  }

  ngOnInit () {
    this.getRecipesList();
  }

}
