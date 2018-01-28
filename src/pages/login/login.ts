import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, Nav, MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Md5} from 'ts-md5/dist/md5';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';
import { isTrueProperty } from 'ionic-angular/util/util';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: {  email: string, password: string, isautologin: boolean, isLogedIn: boolean } = {
    email: '',
    password: '',
    isautologin: true,
    isLogedIn: false
  };
  public pass : any ='';
  // Our translated text strings
  private loginErrorString: string;

  constructor(
    public menuCtrl: MenuController,
    public storage: Storage,
    public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    private nav:Nav) {
      this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }
  
  ionViewWillEnter() {
    //alert('ionViewWillEnter')
    this.nav.swipeBackEnabled = true;
    this.storage.get('account').then((val) => {
      if (val) {
        this.account.email = val.email;
        this.account.password = val.password;
        this.account.isautologin = val.isautologin;
        this.account.isLogedIn=val.isLogedIn;
      } else {
        this.storage.get('account').then((val) => {
          this.storage.set ('account', this.account);
        });
      }
    });
  }

  ionViewWillLeave() {
    //alert('ionViewWillLeave');
    this.nav.swipeBackEnabled = true;
    this.storage.set ('account', this.account);
  }
  // Attempt to login in through our User service
  doLogin() {   
    if (this.account.password.length != 32){
      this.pass =Md5.hashStr(this.account.password);
      this.account.password = this.pass;
      console.log (this.account.password);

    } 
    this.user.login(this.account).subscribe((res) => {
      console.log(res);
      if (res.active) {
        this.storage.set('connectionStatus',true);
        this.menuCtrl.enable(true, 'menu1');
        this.navCtrl.push(MainPage);
        let  toast = this.toastCtrl.create({
          message: 'Вы вошли в аккаунт: '+res.last_name+' '+res.username,
          duration: 3000,
          position: 'bottom',
          cssClass:'success',
          showCloseButton:true,
          closeButtonText:'OK'
        });
        toast.present();  
        this.account.isLogedIn=true;
      } else if (res.active == undefined){  
        let  toast = this.toastCtrl.create({
          message: 'Ошибка авторизации: '+res,
          duration: 3000,
          position: 'bottom',
          cssClass:'error'
        });
        toast.present();  
        this.menuCtrl.enable(false);
        this.account.isLogedIn=false;

      }
    })
  }
  // Logout from Application Service 185.63.32.215:8801
  logout(){
    this.account.isLogedIn=false;   
    this.menuCtrl.enable(false);
    this.account.password = '';
  }
}