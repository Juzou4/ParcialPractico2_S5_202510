import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail!: Recipe;

  // Punto 4: ingrediente con mayor cantidad
  maxIngredientName = '';
  maxIngredientAmount = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.recipeService.getRecipe(id).subscribe((recipe) => {
      if (!recipe) {
        // si el id no existe, regresamos al listado
        this.router.navigate(['/recipe']);
        return;
      }
      this.recipeDetail = recipe;
      this.calculateMaxIngredient();
    });
  }

  private calculateMaxIngredient(): void {
    if (!this.recipeDetail.ingredientes || this.recipeDetail.ingredientes.length === 0) return;

    const max = this.recipeDetail.ingredientes.reduce((prev, curr) =>
      curr.cantidad > prev.cantidad ? curr : prev
    );

    this.maxIngredientName = max.nombre;
    this.maxIngredientAmount = max.cantidad;
  }

  goBack(): void {
    this.router.navigate(['/recipe']);
  }
}
