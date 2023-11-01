import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class usuarioLogadoGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): 
    boolean | UrlTree 
    | Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree> {
    if(this.loginService.logado) {
      return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }
};
