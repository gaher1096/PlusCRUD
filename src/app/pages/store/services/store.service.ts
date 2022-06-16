import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})
export class StoreServices{
    constructor(private readonly http: HttpClient){}

    store():Observable<any>{
        const params = {
            origin:'*'
        }
        return this.http.get<any>(environment.api+'/stores', {params:params})
    }
}
