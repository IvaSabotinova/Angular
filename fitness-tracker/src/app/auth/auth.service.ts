import { Subject } from "rxjs";
import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";
import { Auth } from '@angular/fire/auth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { AuthData } from "./auth-data.model";

@Injectable()
export class AuthService {
    authChange = new Subject<boolean>();
    private isAuthenticated = false;

    constructor(private router: Router, private auth: Auth = inject(Auth)) { }

    registerUser(authData: AuthData) {        
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, authData.email, authData.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                this.authSuccessfully();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    loginUser(authData: AuthData) {       
        const auth = getAuth();
        signInWithEmailAndPassword(auth, authData.email, authData.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);                
                this.authSuccessfully();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);                
            });
    }

    logoutUser() {
        this.authChange.next(false);
        this.router.navigate(['/login']);
        this.isAuthenticated = false;
    }

    isAuth() {
        return this.isAuthenticated;
    }

    private authSuccessfully() {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/training']);
    }
}