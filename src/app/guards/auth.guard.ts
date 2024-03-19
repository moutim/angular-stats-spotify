import { inject } from "@angular/core";
import { Router } from "@angular/router";
// import { DialogElementsExample } from "../dialog/dialog.component";
import { DialogService } from "../dialog/dialog.service";

export const authGuard = () => {
  const dialogService = inject(DialogService);

  const token = localStorage.getItem('token');

  if (token == null) {
    dialogService.openDialog();
    return false;
  } else {
    return true;
  }
};
