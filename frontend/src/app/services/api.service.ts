import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { API_URL } from '../api-token';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(
    private http: HttpClient, 
    private auth: AuthService,
    @Inject(API_URL) private apiUrl: string
  ) {}

  getChart() {
    return this.http.get<any>('/api/chart');
  }
}
