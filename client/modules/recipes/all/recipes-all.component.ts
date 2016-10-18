import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../../service/api.service";

@Component({
    selector: "form",
    templateUrl: `client/modules/recipes/all/recipes-all.component.html`
})
export class RecipesAllComponent implements OnInit {
    private recipesArray: any[];

    constructor(
        private apiService: ApiService, 
        private router: Router) {}

    showRecipe(id: number) {
        this.router.navigate(['/recipe', id]);
    }

    ngOnInit() {
        this.apiService
            .getRecipes()
            .subscribe( (data) => { this.recipesArray = data; } );
    }
}
