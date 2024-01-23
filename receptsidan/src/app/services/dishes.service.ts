import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface Recipe {
  id: number;
  rating: number;
}

@Injectable({
  providedIn: 'root',
})
export class DishesService {
  private apiUrl =
    'https://raw.githubusercontent.com/elliot9802/recipeapi/main/recipesData.json';

  constructor(private http: HttpClient) {}

  getDishes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }

  getDishesById(id: string): Observable<Recipe | undefined> {
    return this.http
      .get<Recipe[]>(this.apiUrl)
      .pipe(
        map((recipes: Recipe[]) =>
          recipes.find((recipe: Recipe) => recipe.id === +id)
        )
      );
  }
}
