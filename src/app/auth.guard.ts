import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if the "Admin Key" exists in the browser's secret storage
    const isAdmin = localStorage.getItem('isSpirecrestAdmin');

    if (isAdmin === 'true') {
      return true; // Allowed
    } else {
      this.router.navigate(['/admin']); // Kick them back to login
      return false;
    }
  }
}