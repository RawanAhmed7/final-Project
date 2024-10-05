import { CanDeactivateFn } from '@angular/router';

export const canDeactivateGuard: CanDeactivateFn<unknown> =
(component:any, currentRoute, currentState, nextState) => {
  console.log(component.loginForm.dirty)
  return true;
};
