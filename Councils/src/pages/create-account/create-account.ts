import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'create-account.html'
})
export class CreateAccountPage {
    createAccountForm;
    newUser = { email:'', password:'', ldsUsername:''}
   constructor(public navCtrl: NavController){}

  createAccount(){
      //TODO
      console.log('account details===>',this.newUser);
      if(this.newUser.email && this.newUser.password && this.newUser.ldsUsername){
        //TODO
        // this.auth.createAccount(this.newUser);
        this.navCtrl.setRoot(HomePage);
      }else{
         this.navCtrl.setRoot(CreateAccountPage);
      }
     
  }
  cancel(){
    this.navCtrl.setRoot(HomePage);
  }

}
