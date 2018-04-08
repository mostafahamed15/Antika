import {  Http } from '@angular/http';
import {Injectable} from '@angular/core'
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AppService{
    constructor( private http :  Http ){

    }
    getMessages(){
       return this.http.get('http://localhost:1234').toPromise();
    }
}