import {Component, OnInit} from "@angular/core";
import {ApiService} from "../../../service/api.service";
import {Router} from "@angular/router";

@Component({
    selector: "form",
    templateUrl: `client/modules/groceries/all/groceries-all.component.html`
})
export class GroceriesAllComponent implements OnInit {
    private groceriesArray: any[];
    private groceries: any = {};

    constructor(private apiService: ApiService,
                private router: Router) {}

    showGrocery(id: number) {
        this.router.navigate(['/grocery', id]);
    }


    remGrocery(id: number) {
        this.apiService.remGrocery(id).subscribe( );

    }

    createGrocery(groceries: any){
        console.log(groceries);
        this.apiService.createGrocery(groceries).subscribe((data)=>{this.showGrocery(data.id)});


    }
    onRowClick(event){
        console.log(event.target.outerText);
    }

    ngOnInit() {
        this.apiService
            .getGroceries()
            .subscribe((data) => {
                this.groceriesArray = data;
            });
    }
}
