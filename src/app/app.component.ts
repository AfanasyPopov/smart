import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import {  Config, Nav, Platform, FabContainer, Menu, ToastController} from 'ionic-angular';

import { FirstRunPage } from '../pages/pages';
import { Settings } from '../providers/providers';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import {Storage} from '@ionic/storage';
import { Socket } from 'ng-socket-io';

@Component({
  selector:'page-menu',
  templateUrl:'../pages/menu/menu.html',
})
export class MyApp {
  //storage: any;
  rootPage = FirstRunPage;
  @ViewChild(Nav) nav: Nav;
  pages: any[] = [
   // { title: 'Tutorial', component: 'TutorialPage' },
   // { title: 'Welcome', component: 'WelcomePage' },
    { title: 'Tabs', component: 'TabsPage' },
   // { title: 'Cards', component: 'CardsPage' },
   // { title: 'Content', component: 'ContentPage' },
    { title: 'Login', component: 'LoginPage' },
   //{ title: 'Signup', component: 'SignupPage' },
    //{ title: 'Master Detail', component: 'ListMasterPage' },
    //{ title: 'Menu', component: 'MenuPage' },
    { title: 'Settings', component: 'SettingsPage' },
    { title: 'Search', component: 'SearchPage' }
  ];

  constructor(public socket: Socket, public storage:Storage, private menuCtrl: MenuController , private translate: TranslateService, platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen,     public toastCtrl: ToastController  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.ionViewDidEnter();
    });
    this.initTranslate(); 
    this.storage.set('connectionStatus',false);
    this.addSocket (this);
    
  }
  
  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('ru'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    console.log(page.component+";"+page.title);
  }
  openHttp(){
    console.log ('http try to do');
    alert('openPage(page)try to do...........');
  }
  doReload(){
    location.reload();
    
  }
  menuToggle(menu: Menu ){
    menu.enable(!menu.enabled);
    console.log ('menuToggle()');
  }
  menuToggleWidth(menu: Menu ){
    let toast = this.toastCtrl.create({
      message: 'menu.enabled:'+menu.enabled,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();

    console.log ( "menu.enabled:"+menu.enabled);
  }
  fabClose (fab: FabContainer) {
    fab.close ();
    console.log ( "fabClose()");
  }
  fabCloseAfterTime (fab: FabContainer ) {
    setTimeout(() => {
      fab.close ();
      console.log ( "fabCloseAfterTime () ");
    }, 2500);
  }
  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    console.log ('ionViewDidEnter');
    this.menuCtrl.enable(false);
  }
  ionViewWillLeave() {
    console.log("Looks like I'm about to leave :(");
  }
  addSocket(thisapp) {
    thisapp.socket.on('connected', function(msg){
      thisapp.storage.set('connectionStatus', true).then(res=>{
        thisapp.setBackgroundColor();
      })
    });
    thisapp.socket.on('disconnected', function(msg){
      thisapp.storage.set('connectionStatus', false).then(res=>{
        thisapp.setBackgroundColor();
      })
    });
    thisapp.socket.on('connect_error', function(msg){
      thisapp.storage.set('connectionStatus', false).then(res=>{
        thisapp.setBackgroundColor();
      })
    });
  }
  getSelector(sText) { 
    //for (var len=0; len< document.stylesheets.length;len++){
      
      var s = document.styleSheets[0]; 
      var rules = s['rules']||s['cssRules'] // IE || others 
      for(var r=0;r<rules.length;r++) 
        if(rules[r].selectorText==sText) 
          return rules[r]['style'] 
      var s = document.styleSheets[1]; 
      var rules = s['rules']||s['cssRules'] // IE || others 
      for(var r=0;r<rules.length;r++) 
        if(rules[r].selectorText==sText) 
          return rules[r]['style'] 
       // }
    return null; 
  }
  setBackgroundColor() {
    this.storage.get('connectionStatus').then (res=>{
      if (res){
        this.getSelector(".toolbar-background").backgroundColor = '#e4ffbf';
        this.getSelector(".toolbar-background-md").backgroundColor = '#e4ffbf';
        this.getSelector(".toolbar-background-ios").backgroundColor = '#e4ffbf';
        
      } else {
        this.getSelector(".toolbar-background").backgroundColor = '#ffdeba'
        this.getSelector(".toolbar-background-md").backgroundColor = '#ffdeba';
        this.getSelector(".toolbar-background-ios").backgroundColor = '#ffdeba';
      }
    },err=>{    });
  }

} 