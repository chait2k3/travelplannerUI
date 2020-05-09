import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

export class MessageBox {
    // static method to display dialog box
    static show(dialog: MatDialog, title = 'Alert', message: string, button = 0, width = '200px') {
        const dialogRef = dialog.open(DialogComponent, {
            data: {
              title: title || 'Alert',
              message,
              button: button || 0,
              style: 1,
              allowOutsideClick: false
            },
            width: width || '200px'
          });

        return dialogRef.afterClosed();
    }
}

export enum MessageBoxButton {
    Ok = 0,
    OkCancel = 1,
    YesNo = 2,
    AcceptReject = 3
}

export enum MessageBoxStyle {
    Simple = 0,
    Full = 1
}
