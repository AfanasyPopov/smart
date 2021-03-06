import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform, FabContainer, Menu, ToastController} from 'ionic-angular';

import { FirstRunPage } from '../pages/pages';
import { Settings } from '../providers/providers';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { Storage } from '@ionic/storage';
import { Socket } from 'ng-socket-io';
import { User } from '../providers/user/user';
import {} from '../../node_modules/dhtmlx-gantt/codebase/sources/'

@Component({
  selector:'page-menu',
  templateUrl:'../pages/menu/menu.html',
})
export class MyApp {
  isPaneShouldShow: boolean=true;
  isGanttConfigured:boolean=false;
  isMobilePlatform:boolean= false;
  user: any =[];
  rootPage = FirstRunPage;
  @ViewChild(Nav) nav: Nav;
  public file_db_root='http://185.63.32.215:3000/Codiad/workspace/files_db/'
  pages: any[] = [
    { title: 'Поиск', component: 'SearchPage', icon:'ios-search-outline' },
    // { title: 'Tutorial', component: 'TutorialPage', icon:'albums' },
    // { title: 'Welcome', component: 'WelcomePage' , icon:'albums'},
    { title: 'Проекты', component: 'TabsPage' , icon:'ios-albums-outline'},
   //{ title: 'Cards', component: 'CardsPage' , icon:'albums'},
   // { title: 'Content', component: 'ContentPage', icon:'albums' },
  //{ title: 'Авторизация', component: 'LoginPage' , icon:'ios-contact-outline'},
   //{ title: 'Signup', component: 'SignupPage' },
    //{ title: 'Master Detail', component: 'ListMasterPage' },
    //{ title: 'Menu', component: 'MenuPage' },
    { title: 'Настройки', component: 'SettingsPage', icon:'ios-settings-outline' },
    //{ title: 'Администратор', component: 'AdminPage' , icon:'ios-construct-outline'},
  ];
  authPage: any[] = [{ title: 'Авторизация', component: 'LoginPage' , icon:'ios-contact-outline'}];
  menuTitle="";

  constructor(
    public translateService: TranslateService ,
    public socket: Socket, public storage:Storage, 
    public menuCtrl: MenuController , 
    private translate: TranslateService, 
    public platform: Platform, 
    public settings: Settings, 
    private config: Config, 
    private statusBar: StatusBar, 
    private splashScreen: SplashScreen,     
    public toastCtrl: ToastController ,
  ) {
      if (this.platform.is('ios') || this.platform.is('android')) {
        var viewport = document.querySelector("meta[name=viewport]");
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
      }
      this.isMobilePlatform=platform.is('mobile');
      if(this.isMobilePlatform){
        this.isPaneShouldShow=false
      } else {
        this.isPaneShouldShow=true
      }
    
      platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        this.statusBar.styleDefault();
        this.splashScreen.hide();
        this.ionViewDidEnter();
        this.addSocket (this);
       // this.gantt_init_dp();

      });
      this.initTranslate(); 
      this.storage.set('connectionStatus',false);
      translateService.get(['MENU_TITLE']).subscribe(values => {
        this.menuTitle = values['MENU_TITLE'];
      });
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
    console.log(page.component+"; "+page.title);
  }

  doReload(){
    location.reload();
  }
  menuOnOf(menu: Menu ){
    menu.enable(!menu.enabled);
    console.log ('menuToggle()');
  }
  menuToggle(menu){
    //menu.close();
    this.isPaneShouldShow=!this.isPaneShouldShow;
    console.log('isPaneShouldShow: ', this.isPaneShouldShow)
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
    console.log ("App.Comp.user:")
    console.log (this.user)
    this.storage.get('')
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
    thisapp.socket.on('reconnect', function(msg){
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
      var s = document.styleSheets[0]; 
      var rules = s['rules']||s['cssRules'] // IE || others 
      for(var r=0;r<rules.length;r++) 
        if(rules[r].selectorText==sText) 
          return rules[r]['style'] 
      s = document.styleSheets[1]; 
      rules = s['rules']||s['cssRules'] // IE || others 
      for(r=0;r<rules.length;r++) 
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
goHome(){
  this.nav.setRoot(FirstRunPage);
}
passRep(){
  //this.nav.push('PassRepairPage')
}
getProfileImageStyle() {
  return 'url(' + this.file_db_root+this.user.img_id+'.'+this.user.extention + ')'
}
gantt_clearAll(){
  gantt.clearAll();
}
gantt_load(){
  //gantt.init('gantt_here');
  gantt.load("http://185.63.32.215:8100/data");
  //var dp = new gantt.dataProcessor("http://185.63.32.215:8100/data");
  //dp.init(gantt);
  //dp.setTransactionMode("REST");
}
gantt_refresh(){
  gantt.refreshData();
}
gantt_init_dp(){
  // var dp = new gantt.dataProcessor("http://185.63.32.215:8100/data");
  // dp.init(gantt);
  // dp.setTransactionMode("REST");
}
} 