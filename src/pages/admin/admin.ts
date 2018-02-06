import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilterPipe} from '../../pipes/filter/filter';
import { TranslateService } from '@ngx-translate/core';
import { Api } from '../../providers/api/api';
import {Storage} from '@ionic/storage';

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
  constructor(
    public api: Api, 
    public translateService: TranslateService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    ) {
    translateService.get(['ADMIN_TITLE','DELETE_BUTTON']).subscribe(values => {
      this.adminTitle = values['ADMIN_TITLE'];
      this.delButtonTitle = values['DELETE_BUTTON'];
    });
    this.storage.get('account').then((val) => {
      this.getUserList(val).subscribe (res=>{
        this.adminUserCardItems.list=res.users;
        this.adminUserCardItems.dir=res.dir;
        console.log ("adminPage.adminUserCardItems:");
        console.log (this.adminUserCardItems);
      }) ;
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
