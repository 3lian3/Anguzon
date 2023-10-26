import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EntityService {

    serverUrl: string = environment.serverUrl;

  constructor(private http: HttpClient) { }

  getData(entity: string): Observable<any> {
    return this.http.get(this.serverUrl + entity)
  }

  searchData(entity: string, query: string): Observable<any> {
    return this.http.get(this.serverUrl + entity + '/search?' + query)
  }
}

