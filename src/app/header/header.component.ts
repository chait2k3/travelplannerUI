import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MessageBox, MessageBoxButton } from '../shared/message-box';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logedUser: User;
  @Output() public sidenavToggle = new EventEmitter();

  constructor(
    private router: Router,
    private sharedService: SharedService,
    private dialog: MatDialog,
  ) {
    this.sharedService.changeEmitted$.subscribe(
      user => {
        this.logedUser = user;
      });
  }

  ngOnInit(): void {
    this.logedUser = JSON.parse(localStorage.getItem('logedUser'));
  }

  public onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  public logout() {
    MessageBox.show(this.dialog, 'Confirm Action', 'Do you want to logout ?', MessageBoxButton.YesNo, '350px')
      .subscribe(result => {
        const dialogResult = (result === undefined) ? 'none' : result.result;
        if (dialogResult === 'yes') {
          localStorage.removeItem('logedUser');
          this.sharedService.emitChange(null);
          this.router.navigate(['']);
        }
      });
  }

}
