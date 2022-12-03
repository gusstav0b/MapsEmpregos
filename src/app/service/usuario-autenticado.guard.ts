import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MapsServiceService } from './maps-service.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioAutenticadoGuard implements CanActivate {
  
  constructor(private mapsService : MapsServiceService, private router : Router){}

  canActivate(){
    if(this.mapsService.logado){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
