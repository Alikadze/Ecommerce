import { Injectable } from '@angular/core';
import {ApiService} from "../core/services";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AuthPayload, AuthResponce} from "../core/interfaces/auth-payload";
import {Observable} from "rxjs";
import {User} from "../core/interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {
  override aipUrl = environment.firebaseAuthUrl
  apiKey = environment.apiKey


  register(params: AuthPayload): Observable<AuthResponce> {
    return this.post<AuthResponce>(`accounts:signUp?key=${this.apiKey}`, params)
  }


  login(payload: AuthPayload) {
    return this.post<AuthResponce>(`accounts:signInWithPassword?key=${this.apiKey}`, {
      ...payload,
      returnSecureToken: true
    })
  }

  sendOobCode(email: string) {
    return this.post(`accounts:sendOobCode?key=${this.apiKey}`, {
      requestType: 'PASSWORD_RESET',
      email
    })
  }

  resetPassword(oobCode: string, newPassword: string) {
    return this.post(`accounts:resetPassword?key=${this.apiKey}`, {
      oobCode,
      newPassword
    })
  }

  lookup(idToken: string) {
    return this.post<{
      users: User[]
    }>(`accounts:lookup?key=${this.apiKey}`, {
      idToken
    })
  }

  changePassword(idToken: string, password: string) {
    return this.post<AuthResponce>(`accounts:update?key=${this.apiKey}`, {
      idToken,
      password,
      returnSecureToken: true
    })
  }
}