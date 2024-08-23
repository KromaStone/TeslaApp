import { CanActivateFn } from '@angular/router';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const user = sessionStorage.getItem('userName')

  let test = true
  if (user) {
    return true
  }
  else {
    //  return false;
    // setting value true for run frontend without backend
    return true;
  }
};
