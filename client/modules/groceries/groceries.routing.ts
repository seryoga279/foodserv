import { Routes, RouterModule } from '@angular/router';
import { GroceriesAllComponent } from "./all/groceries-all.component";

export const routes: Routes = [
    { path: 'grocery', component: GroceriesAllComponent, pathMatch: "full" }
];

export const routing = RouterModule.forChild(routes);