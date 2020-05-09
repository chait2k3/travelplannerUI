import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { MessageBox, MessageBoxButton } from '../shared/message-box';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  constructor(
    private router: Router,
    private sharedService: SharedService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onSidenavClose() {
    this.sidenavClose.emit();
  }

  logout() {
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
