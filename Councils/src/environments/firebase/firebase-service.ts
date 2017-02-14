import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable, FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';
import { User } from '../../pages/councillogin/user';
import { Headers, Http, Response } from "@angular/http";
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {

    fireAuth = firebase.auth();
    rootRef = firebase.database().ref();
    usr: any;
    constructor(private af: AngularFire) {
        this.usr = null;
    }

    signupNewUser(user: User) {
        return this.fireAuth.createUserWithEmailAndPassword(user.email, user.password)
            .then((newUser) => {
                // Sign in the user.
                this.fireAuth.signInWithEmailAndPassword(user.email, user.password)
                    .then((authenticatedUser) => {
                        // Successful login, create user profile.
                        this.createAuthUser(user, authenticatedUser.uid);
                    }).catch(function (error) {
                        alert(error.message);
                    });
            }).catch(function (error) {
                alert(error.message);
            });
    }

    createAuthUser(user: User, uid: any) {
        this.rootRef.child('users').child(uid).set(
            {
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                password: user.password,
                ldsusername: user.ldsusername,
                unittype: user.unittype,
                unitnumber: user.unitnumber,
                avatar: user.avatar,
                isadmin: user.isadmin,
                createdby: user.createdby,
                createddate: user.createddate,
                lastupdateddate: user.lastupdateddate,
                isactive: user.isactive
            });
    }

    validateUser(email: string, password: string): any {

        return this.fireAuth.signInWithEmailAndPassword(email, password)
            .then((authenticatedUser) => {
                var userRef = this.rootRef.child('users/' + authenticatedUser.uid);
                userRef.on('value', userSnap => {

                    if (userSnap.hasChild("email")) {
                        this.usr = userSnap.val();
                        // console.log(this.usr);

                    }
                    else {
                        alert('no user');
                        console.log('no user');
                    }
                    console.log(this.usr);
                    return this.usr;

                });

            })
            .catch(function (error) {
                alert(error.message);
                console.log(error.message);
            });


    }

}