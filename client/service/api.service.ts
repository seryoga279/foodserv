import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { AuthHttp } from "angular2-jwt";
import { Response, Request } from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiService {
    private data: Observable<Array<any>>;
    constructor(private authHttp: AuthHttp, private http: Http) { }

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

    getMeasures() {
        // if(!this.data){
        //     this.data =  new Observable(observer => {


        //     }
        // }
        return this
            .http
            .get('/api/measure/')
            .map((response: Response) => response.json());
    }

    getGroceries() {
        return this
            .http
            .get('/api/grocery/')
            .map((response: Response) => response.json());
    }

    postCreateMeasure(name: String, type: String, power: number) {
        let params = JSON.stringify({ name: name, type: type, power: power });
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this
            .http
            .post("/api/measure/", params, { headers: headers })
            .map(res => res.json())
    }

    putUpdateMeasure(id: number, name: String, type: String, power: number) {
        let params = JSON.stringify({ id: id, name: name, type: type, power: power });
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this
            .http
            .put(`/api/measure/${id}`, params, { headers: headers })
            .map(res => res.json())
    }


    deleteMeasure(id: number) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this
            .http
            .delete(`/api/measure/${id}`, { headers: headers })
            .map(res => res.json())

    }





}
