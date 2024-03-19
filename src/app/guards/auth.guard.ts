import { inject } from "@angular/core";
import { Router } from "@angular/router";
// import { DialogElementsExample } from "../dialog/dialog.component";
import { DialogService } from "../dialog/dialog.service";

export const authGuard = () => {
  const route = inject(Router);
  const dialogService = inject(DialogService);
  // const dialog = inject(DialogElementsExample);

  const token = localStorage.getItem('token');
  console.log(token);


  if (token == null) {
    console.log('aq entrou');
    dialogService.openDialog();
    // route.navigate(['/login']);
    return false;
  } else {
    return true;
  }
};
