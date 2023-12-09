import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  protected baseUrl = environment.apiUrl; // Votre URL de base

  constructor(private http: HttpClient) { }

  protected get<T>(endpoint: string): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.get<T>(url);
  }

  protected post<T>(endpoint: string, body: any): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.post<T>(url, body);
  }

  protected put<T>(endpoint: string, body: any): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.put<T>(url, body);
  }

  protected delete<T>(endpoint: string): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.delete<T>(url);
  }
}
