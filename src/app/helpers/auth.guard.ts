import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserRole } from '../models/usuario/usuario';
import { TokenStorageService } from '../services/token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  roles: typeof UserRole = UserRole;

  constructor(private tokenStorage: TokenStorageService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
    return (this.tokenStorage.getRole().length != 0)? this.tokenStorage.getRole()?.includes(this.roles.ADMIN) : false;
  }
  
}
