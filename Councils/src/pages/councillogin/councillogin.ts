import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, NavParams } from 'ionic-angular';
import { FirebaseService } from '../../environments/firebase/firebase-service';
import { User } from '../../providers/user';
import * as firebase from 'firebase';
import { Headers, Http, Response } from "@angular/http";
import { AuthService } from '../../providers/auth-service';


@Component({
    selector: 'page-councillogin',
    templateUrl: 'councillogin.html',
    providers: [FirebaseService]
})

export class CouncilLoginPage {
    //loading: Loading;
    loginCredentials = { email: '', password: '' };

    constructor(
        public nav: NavController,
        public loadingCtrl: LoadingController,
        public firebaseService: FirebaseService,
        public alertCtrl: AlertController,
        public http: Http,
        private navParams: NavParams
        )
         {
        // alert('constructor');

        this.loginCredentials.email = navParams.data.email;
    }


    public forgotPassword() { }

    noAccount() {
        // alert('hi');
    }

    // public loginUser(loginCredentials: any): any {
    //     this.fireAuth.createUserWithEmailAndPassword(loginCredentials.email, loginCredentials.password).then((newUser) => {

    //         this.fireAuth.signInWithEmailAndPassword(loginCredentials.email, loginCredentials.password).then((authenticatedUser) => {
    //             this.userProfile.child(authenticatedUser.uid).set({
    //                 email: loginCredentials.email,
    //                 password: loginCredentials.password,
    //             });
    //         });

    //     });
    // }

    public login() {
        this.validateUser(this.loginCredentials);
        

        // console.log(this.validateUser(this.loginCredentials));
    }

    public validateUser(loginCredentials) {
        console.log(this.firebaseService.validateUser(loginCredentials.email, loginCredentials.password));
    }
}