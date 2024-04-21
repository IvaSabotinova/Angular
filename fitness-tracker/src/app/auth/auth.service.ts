import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { User } from "./user.model";
import { AuthData } from "./auth-data.model";

@Injectable()
export class AuthService {
    private user: User;
    authChange = new Subject<boolean>();

    constructor(private router: Router) { }

    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        }
        this.authSuccessfully();
    }

    loginUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        }
        this.authSuccessfully();       
    }

    logoutUser() {
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(['/login']);
    }

    getUser() {
        return { ...this.user };
    }

    isAuth() {
        return this.user != null;
    }

    private authSuccessfully(){
        this.authChange.next(true);
        this.router.navigate(['/training']);   
    }
}