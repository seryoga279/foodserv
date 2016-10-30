import {Component, OnInit,NgModule} from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { ApiService } from "../../../service/api.service";
import { Location }from '@angular/common';




@Component({
    selector: "form",
    templateUrl: `client/modules/groceries/item/groceries-add.component.html`,

})

export class GroceriesAddComponent implements OnInit {
    private groceries: any = {};


    constructor(
        private apiService: ApiService,
        private route: ActivatedRoute,
        private location: Location) {}


    ngOnInit() {
        this.route.params.forEach( (params: Params) => {
            this.apiService
                .getGrocery(params.id)
                .subscribe( (data) => { this.groceries = data; } );
        });

    }
    goBack(): void {
        this.location.back();
    }

}