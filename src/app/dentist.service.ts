import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DENTIST } from './dentist';

@Injectable({
  providedIn: 'root'
})

export class DentistService {
  private baseUrl = "http://localhost:3000/add";

  constructor(private http: HttpClient) { }

  post(user: DENTIST): Observable<DENTIST> {
    return this.http.post<DENTIST>(this.baseUrl, user);
  }
}
