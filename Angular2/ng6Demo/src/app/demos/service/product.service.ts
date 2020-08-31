import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private API_URL = `${environment.API_URL}`;

  constructor(private http: HttpClient) { }

  GetProducts(): Observable<any> {
    return this.http.get(this.API_URL + '/products', {withCredentials: true})
      .pipe(tap((res) => {
        return res;
    }));
  }

}
