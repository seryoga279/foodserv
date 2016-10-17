import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../../service/api.service";

@Component({
    selector: "form",
    templateUrl: `client/modules/groceries/all/groceries-all.component.html`
})
export class GroceriesAllComponent implements OnInit {
    private groceriesArray: any[];

    constructor(private apiService: ApiService) {}

    ngOnInit() {
        this.apiService
            .getGroceries()
            .subscribe( (data) => { this.groceriesArray = data; } );
    }
}
