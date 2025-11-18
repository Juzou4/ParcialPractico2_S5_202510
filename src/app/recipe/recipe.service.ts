import { Injectable } from '@angular/core';
// import { HttpClient} from '@angular/common/http';
// import { environment } from '../../environments/environment.development';
import { Observable, of } from 'rxjs';
import {Recipe} from './recipe';
import { dataRecipes } from './dataRecipes';


@Injectable({
  providedIn: 'root',
})
export class RecipeService {

//   private apiUrl: string = environment.baseUrl + 'recipes.json';
//   constructor(private http: HttpClient) { }

//    getRecipes(): Observable<Recipe[]> {
//    return this.http.get<Recipe[]>(this.apiUrl);
//  }

constructor() {}
getRecipes(): Observable<Recipe[]> {
  return of(dataRecipes);
}

getRecipe(id: number): Observable<Recipe | undefined> {
  return of(dataRecipes.find(recipe => recipe.id === id));
  }
}
