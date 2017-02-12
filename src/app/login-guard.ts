import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()

export class LoginGuard implements CanActivate {

  canActivate(){
    return this.checkIfLoggedIn();
  }

  private checkIfLoggedIn(): boolean{

    // A call to the actulal login service would go here

    let loggedIn: boolean = Math.random() < 0.5;

    if(!loggedIn) {
      console.log("LoginGuard: The user is not logged in!");
    }

    return loggedIn;
  }
}
