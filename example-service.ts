
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  constructor(private http: HttpClient) { }

  queryBackend(queryParam: string): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/your-route?query=${queryParam}`);
  }
}
