import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../../service/api.service";
import { FormControl } from "@angular/forms";

@Component({
    selector: "recipes-all",
    templateUrl: `client/modules/recipes/all/recipes-all.component.html`
})
export class RecipesAllComponent implements OnInit {
    private recipesArray: any[];
    private name: FormControl = new FormControl('');
    private descr: FormControl = new FormControl('');

    constructor(
        private apiService: ApiService, 
        private router: Router) {}

    updateRecipies() {
        console.log(2);
        this.apiService
            .getRecipes()
            .subscribe( (data) => { this.recipesArray = data; } );
    }

    showRecipe(id: number) {
        this.router.navigate(['/recipe', id]);
    }

    createRecipe(name: String, description: String) {
        this.apiService
            .addRecipe(name, description)
            .subscribe(recipe => this.recipesArray.push(recipe));
    }

    ngOnInit() {
        this.updateRecipies();
    }
}
