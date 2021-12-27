import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    public router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(JSON.parse(localStorage.getItem('form-details') || '{}'));

    if (Object.getOwnPropertyNames(JSON.parse(localStorage.getItem('form-details') || '{}')).length === 0) {
      this.router.navigate(['search'])
    }
    return true;
  }

}
