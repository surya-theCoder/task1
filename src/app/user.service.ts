import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from '../environments/environment';
import { LoginRequest } from './auth/auth/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  authenticate(requestBody: LoginRequest) {
    return this.http.post(`${environment.apiURL}/v1/login`, requestBody, { observe: 'response' });
  }
}
