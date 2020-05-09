import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MessageBox, MessageBoxButton } from '../shared/message-box';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private dialog: MatDialog,
) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap({
        next: (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
          }
        },
        error: (err: any) => {
          let errorMsg = '';
          if (typeof err.message !== 'undefined') {
            errorMsg = err.message;
          }
          else if (typeof err.error !== 'undefined') {
            errorMsg = err.error;
          }
          else {
            errorMsg = err.error.message;
          }

          MessageBox.show(this.dialog, 'Error', errorMsg, MessageBoxButton.Ok, '350px');
      },
        complete: () => { }
      })
      );
  }
}
