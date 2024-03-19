import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { DialogElementsExample } from "../dialog/dialog.component";

export const authGuard = () => {
  const route = inject(Router);
  const dialog = inject(DialogElementsExample);

  const token = localStorage.getItem('token');
  console.log(token);


  if (token == null) {
    console.log('aq entrou');
    dialog.teste();
    // route.navigate(['/login']);
    return false;
  } else {
    return true;
  }
};
