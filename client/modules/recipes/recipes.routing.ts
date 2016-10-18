import { Routes, RouterModule } from '@angular/router';
import { RecipesAllComponent } from "./all/recipes-all.component";
import { RecipeItemComponent } from './item/recipe-item.component';

export const routes: Routes = [
    { path: 'recipe', component: RecipesAllComponent, pathMatch: "full" },
    { path: 'recipe/:id', component: RecipeItemComponent }
];

export const routing = RouterModule.forChild(routes);