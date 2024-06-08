import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { UserService } from '../user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService: UserService = inject(UserService);
  const router = inject(Router)
  if (userService.isLogged) {
    return true;
  }
  return router.createUrlTree(['/login']);
};
