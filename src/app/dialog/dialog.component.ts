import {Component} from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogService } from './dialog.service';
import { TokenAuthService } from '../shared/token-auth.service';

/**
 * @title Dialog elements
 */
@Component({
  selector: 'dialog-elements-example',
  templateUrl: './dialog.component.html',
  standalone: true,
  imports: [MatButtonModule],
})
export class DialogElementsExample {
  constructor(private dialogService: DialogService) {}

  openDialog() {
    this.dialogService.openDialog();
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: './shows.dialog.html',
  styleUrl: './dialog.component.css',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
})
export class DialogElementsExampleDialog {
  redirectURL: string = '';

  constructor(private tokenService: TokenAuthService) {
    this.redirectURL = this.tokenService.redirectURL;
  }
}
