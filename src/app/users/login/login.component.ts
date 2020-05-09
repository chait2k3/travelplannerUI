import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { SharedService } from '../../services/shared.service';
import { MessageBox, MessageBoxButton } from '../../shared/message-box';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  logedUser: User = null;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private sharedService: SharedService ) {
      localStorage.removeItem('logedUser');
      this.sharedService.emitChange(null);
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  hasError(controlName: string, errorName: string): boolean {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  login(loginFormValue: any) {
    if (this.loginForm.valid) {
      if (loginFormValue.username === 'admin' && loginFormValue.password === 'admin') {
        MessageBox.show(this.dialog, 'Alert', 'Login Successfully', MessageBoxButton.Ok, '350px')
          .subscribe(result => {
            this.logedUser = new User();
            this.logedUser.username = loginFormValue.username;
            this.logedUser.password = loginFormValue.password;
            localStorage.setItem('logedUser', JSON.stringify(this.logedUser));
            this.sharedService.emitChange(this.logedUser);
            this.router.navigate(['/home']);
          });
      }
      else {
        MessageBox.show(this.dialog, 'Error', 'Invalid User Name or Password', MessageBoxButton.Ok, '350px');
      }
    }
  }

}
