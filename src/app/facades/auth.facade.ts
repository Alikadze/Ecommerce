import {inject, Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {AuthPayload} from "../core/interfaces/auth-payload";
import {StorageService} from "../core/services";
import {map, Observable, tap} from "rxjs";
import {Router} from "@angular/router";
import {User} from "../core/interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {
  authSevice = inject(AuthService)
  storageService = inject(StorageService)
  router = inject(Router)

  get isAuthenticated(): boolean {
    return !!this.token
  }

  get token(): string {
    return this.storageService.getItem('token')
  }

  get refreshToken() {
    return this.storageService.getItem('refreshToken')
  }

  get user() {
    return this.storageService.getItem('user')
  }

  register(payload: AuthPayload) {
    return this.authSevice.register(payload)
      .pipe(
        tap(res => {
          this.storageService.setItem('token', res.idToken)
          this.storageService.setItem('refreshToken', res.refreshToken)
          this.storageService.setItem('user', {
            email: res.email,
            id: res.localId
          })
        })
      )
  }

  login(payload: AuthPayload) {
    return this.authSevice.login(payload)
      .pipe(
        tap(res => {
          this.storageService.setItem('token', res.idToken)
          this.storageService.setItem('refreshToken', res.refreshToken)
          this.storageService.setItem('user', {
            email: res.email,
            id: res.localId
          })
        })
      )
  }

  sendOobCode(email: string) {
    return this.authSevice.sendOobCode(email)
  }

  resetPassword(oobCode: string, newPassword: string) {
    return this.authSevice.resetPassword(oobCode, newPassword)
  }

  logOut() {
    this.storageService.clear()
    this.router.navigate(['/'])
  }


  getUser(): Observable<User> {
    return this.authSevice.lookup(this.token)
      .pipe(
        map(res => {
          if (res.users.length) {
            return res.users[0]
          }
          return {} as User
        })
      )
  }

  changePassword(password:string) {
    return this.authSevice.changePassword(this.token, password)
      .pipe(
        tap(res => {
          this.storageService.setItem('token', res.idToken)
          this.storageService.setItem('refreshToken', res.refreshToken)
          this.storageService.setItem('user', {
            email: res.email,
            id: res.localId
          })
        })
      )
  }

}