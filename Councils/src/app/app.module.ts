import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../providers/auth-service';
import { RegisterPage } from '../pages/register/register';
import { AngularFireModule } from 'angularfire2';
import { FirebaseConfig } from './../environments/firebase/firebase-config';
import { DisplayPage } from '../pages/display/display';
import { CouncilLoginPage } from '../pages/councillogin/councillogin';
import * as firebase from 'firebase';
 import{ CreateAccountPage } from'../pages/create-account/create-account';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    DisplayPage,
    CouncilLoginPage,
    CreateAccountPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FirebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    DisplayPage,
    CouncilLoginPage,
    CreateAccountPage

  ],
  providers: [AuthService]
})
export class AppModule { }