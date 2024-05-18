import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";


// window.isLoggedIn = true; writing in Browser console

export const profileGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (!!(window as any).isLoggedIn) {   
    return true;
  } else {
    // router.navigate(['/about']);
    // return false
   return router.createUrlTree(['/about']);
  }
};

