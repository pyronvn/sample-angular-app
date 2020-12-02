import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  showMessage(message: string, success: boolean) {
    let snackBarBG = 'snackbar';
    if (!success) {
      snackBarBG = 'errorSnackbar';
    }

    this.snackBar.open(message, 'x', {
      duration: 4000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      panelClass: [snackBarBG],
    });
  }
}
