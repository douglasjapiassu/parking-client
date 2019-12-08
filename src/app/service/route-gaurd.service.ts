import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HttpAuthService } from './http-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGaurdService implements CanActivate {

  constructor(private router:Router,
    private authS:HttpAuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    const currentUser = this.authS.currentUserValue;
        if (currentUser) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/parking/login'], { queryParams: { returnUrl: state.url } });
        return false;
    
  }

}
