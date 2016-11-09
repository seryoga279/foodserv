import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { AuthHttp } from "angular2-jwt";
import { Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';

import "rxjs/add/operator/map";

@Injectable()
export class ApiService {

    constructor(private authHttp: AuthHttp, private http: Http) {}

    get(url: string) {
        return this
            .authHttp
            .get(url)
            .map((response: Response) => response.json());
    }

    getRecipes() {
        return this
            .http
            .get('/api/recipe/')
            .map((response: Response) => response.json());
    }

    getRecipe(id: number) {
        return this
            .http
            .get(`/api/recipe/${id}`)
            .map((response: Response) => response.json());
    }

    addRecipe(name: String, description: String):Observable<any> {
        let params = { name, description };
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this
            .http
            .put('/api/recipe/', params, options)
            .map((response: Response) => response.json());
    }


    getGroceries() {
        return this
            .http
            .get('/api/grocery/')
            .map((response: Response) => response.json());
    }
}
