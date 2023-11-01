import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, CanDeactivate, CanDeactivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';
import { ProdutosDetailComponent } from '../components/produtos-detail/produtos-detail.component';


@Injectable({
  providedIn: 'root',
})
export class SairProdutoDetailGuard implements CanDeactivate <ProdutosDetailComponent> {

  canDeactivate(
    component: ProdutosDetailComponent,
    currentRout: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): 
    boolean | UrlTree 
    | Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree> {

      if(!component.pressionouFechar) {
        component.aviso();
      }

      return component.pressionouFechar;
  }
};
