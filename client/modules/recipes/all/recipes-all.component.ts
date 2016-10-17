import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../../service/api.service";

@Component({
    selector: "form",
    templateUrl: `client/modules/recipes/all/recipes-all.component.html`
})
export class RecipesAllComponent implements OnInit {
    private recipesArray: any[];

    constructor(private apiService: ApiService) {}

    ngOnInit() {
        this.apiService
            .getRecipes()
            .subscribe( (data) => { this.recipesArray = data; } );
    }
}
