import { Routes, RouterModule }   from '@angular/router';
import { MeasureAllComponent }    from "./all/measure-all.component";



export const routes: Routes = [
    { path: 'measure', component: MeasureAllComponent, pathMatch: "full" },
    { path: 'measure/create-measure', component: MeasureAllComponent},
    { path: 'measure/create-measure/:id', component: MeasureAllComponent},
   
];

export const routing = RouterModule.forChild(routes);