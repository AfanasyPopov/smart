import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';
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
  constructor(public translateService: TranslateService,public navCtrl: NavController, public navParams: NavParams) {
    translateService.get(['ADMIN_TITLE']).subscribe(values => {
      this.adminTitle = values['ADMIN_TITLE'];
    });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

}
