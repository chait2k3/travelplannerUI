import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  // member variables
  title: string;
  message: string;
  button: number;
  style: number;
  allowOutsideClick: boolean;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) {
      this.title = data.title;
      this.message = data.message;
      this.button = data.button;
      this.style = data.style || 0;
      this.dialogRef.disableClose = !data.allowOutsideClick || false;
    }

  onOk() {
    this.dialogRef.close({ result: 'ok' });
  }

  onCancel() {
    this.dialogRef.close({ result: 'cancel' });
  }

  onYes() {
    this.dialogRef.close({ result: 'yes' });
  }

  onNo() {
    this.dialogRef.close({ result: 'no' });
  }

  onAccept() {
    this.dialogRef.close({ result: 'accept' });
  }

  onReject() {
    this.dialogRef.close({ result: 'reject' });
  }

  ngOnInit(): void {
  }

}
