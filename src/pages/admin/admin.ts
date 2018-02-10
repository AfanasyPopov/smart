import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilterPipe} from '../../pipes/filter/filter';
import { TranslateService } from '@ngx-translate/core';
import { Api } from '../../providers/api/api';
import {Storage} from '@ionic/storage';
import { ApplicationRef } from '@angular/core'
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  adminTitle="";
  searchtxtUser ="";
  delButtonTitle ="";
  adminUserCardItems={name:"Пользователи",count_active:5,count:5, list:[], dir:[] };
  adminDirCardItems =[{name:"Справочникки",count_active:5,count:5, list:[], dir:[] }];
  ionChangeFlag = true;
  constructor(
    private applicationRef : ApplicationRef,
    public api: Api, 
    public translateService: TranslateService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public toastCtrl: ToastController,
    ) {
    translateService.get(['ADMIN_TITLE','DELETE_BUTTON']).subscribe(values => {
      this.adminTitle = values['ADMIN_TITLE'];
      this.delButtonTitle = values['DELETE_BUTTON'];
    });
    this.storage.get('account').then((val) => {
      this.getUserList(val).subscribe (res=>{
        this.adminUserCardItems.list=res.users;
        this.adminUserCardItems.dir=res.dir;
        this.applicationRef.tick();  
        console.log ("adminPage.adminUserCardItems:");
        console.log (this.adminUserCardItems);
      }) ;
    });
}  
toggleUserActive(event:any, item:any):void  {
      this.storage.get('account').then(accountInfo => {
        accountInfo.item={
          uuid_key:item.uuid_key,
          active: item.active
        }
        this.api.postData('updateUser', accountInfo)
         .subscribe (res=>{
            if (res == 'УСПЕШНО'){
              let  toast = this.toastCtrl.create({
                message: 'Обновление данных прошло: '+JSON.stringify(res),
                duration: 3000,
                position: 'bottom',
                cssClass:'success',
                showCloseButton:true,
                closeButtonText:'OK'
              });
            toast.present(); 
            } 
        },
      error=>{
        if (this.ionChangeFlag) {
          this.ionChangeFlag=false;
          event.disabled=true;
          setTimeout(()=>{
            this.ionChangeFlag=true
            event.disabled=false;
          },1000);
          setTimeout(()=>{
            item.active=!item.active; 
          },900);
          let  toast = this.toastCtrl.create({
            message: 'Обновление данных прошло: c ошибкой '+JSON.stringify(error),
            duration: 3000,
            position: 'bottom',
            cssClass:'error',
            showCloseButton:true,
            closeButtonText:'OK'
          });
          toast.present(); 
        }
      })
        
    });
      
  
}

ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }
  getUserList (accountInfo: any):any  {
    return this.api.postData('getUserList', accountInfo)
 }
 openItem(item: any) {
  this.navCtrl.push('UserItemPage', {
    item: item, 
    dir: this.adminUserCardItems.dir
  });
}
  deleteChip(chip: Element) {
    chip.remove();
  }
}
