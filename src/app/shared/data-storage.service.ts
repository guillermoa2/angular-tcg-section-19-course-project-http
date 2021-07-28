// Handling the HTTP requests in the recipe.service is perfectly fine & calling them on button click in the header template, but its saved here for easy finding/ referring back to the course material.
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { RecipeService } from "../recipes/recipe.service";


@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) {}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        // subscribe here b/c the header component will NOT be interested in whether the request is done or not.
        // The component has no interest in a response.
        this.http
            .put(
                'https://angular-tcg-sec-19-crsprj-http-default-rtdb.firebaseio.com/recipes.json',
                recipes
            )
            .subscribe(response => {
                console.log(response);
            });
    }
}