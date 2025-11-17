import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import {Recipe} from './recipe';


@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  private apiUrl: string = environment.baseUrl + 'recipes.json';
  constructor(private http: HttpClient) { }

   getRecipes(): Observable<Recipe[]> {
   return this.http.get<Recipe[]>(this.apiUrl);
 }


}
