import { HttpInterceptorFn } from '@angular/common/http';
import {catchError, throwError} from "rxjs";

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req)
    .pipe(
      catchError((err: any) => {
        console.error(err)
        return throwError(() => err)
      })
    )
};