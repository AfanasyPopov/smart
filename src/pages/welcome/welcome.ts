import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController, Nav } from 'ionic-angular';

import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Storage } from '@ionic/storage';
import { User } from '../../providers/providers';
import { Md5 } from 'ts-md5/dist/md5';
import { MainPage } from '../pages';
import { TranslateService } from '@ngx-translate/core';
import { MyApp} from '../../app/app.component';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  account: {  email: string, password: string, isautologin: boolean , isLogedIn:boolean} = {
    email: '',
    password: '',
    isautologin: false,
    isLogedIn: false

  };
  public pass : any ='';
  // Our translated text strings
  private loginErrorString: string;

  constructor(
    public myapp: MyApp,
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
    this.storage.get('account').then((val) => {
      if (val) {
        this.account.email = val.email;
        this.account.password = val.password;
        this.account.isautologin = val.isautologin;
        this.account.isLogedIn=val.isLogedIn;
        if (this.account.isautologin && this.account.password != "" ) {
          this.doAutoLogin();
        }    
      } else {
        this.storage.get('account').then((val) => {
          console.log('val is true atfer false:'+val)
          this.storage.set ('account', this.account);
        });
      }
    });
  }

  getAccountFromStorage (){
    return this.storage.get('account').then (res=>{
      this.account = res; 
    })
  }

  login() {
    this.navCtrl.push('LoginPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }
  doReload(){
    location.reload();
  }
  doAutoLogin() {   
    if (this.account.password.length != 32){
      this.pass =Md5.hashStr(this.account.password);
      this.account.password = this.pass;
      console.log (this.account.password);

    } 
    this.user.login(this.account).subscribe((res) => {
      console.log('WelcomePage:');
      console.log(res);
      if (res.active) {
        //this.storage.set('connectionStatus',true);
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
        this.account.isLogedIn= true;
        this.myapp.user = res;
        
      } else if (res.active == undefined){  
        let  toast = this.toastCtrl.create({
          message: 'Ошибка авторизации: '+res,
          duration: 3000,
          position: 'bottom',
          cssClass:'error'
        });
        toast.present();  
        this.navCtrl.push('LoginPage');
        this.menuCtrl.enable(false);
        this.account.isLogedIn=false;
      }
    })
  }

}
