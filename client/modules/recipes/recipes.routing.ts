import { Routes, RouterModule } from '@angular/router';
import { RecipesAllComponent } from "./all/recipes-all.component";

export const routes: Routes = [
    { path: 'recipe', component: RecipesAllComponent, pathMatch: "full" }
];

export const routing = RouterModule.forChild(routes);