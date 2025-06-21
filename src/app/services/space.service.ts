import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Space {
  id?: number;
  name: string;
  location: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  private baseUrl = 'http://localhost:8080/api/spaces';

  constructor(private http: HttpClient) {}

  getSpaces(): Observable<Space[]> {
    return this.http.get<Space[]>(this.baseUrl);
  }

  addSpace(space: Space): Observable<Space> {
    return this.http.post<Space>(this.baseUrl, space);
  }
}
