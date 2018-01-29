import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the UsersListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users-list',
  templateUrl: 'users-list.html',
})
export class UsersListPage {
  usersListTitle="";
  constructor(public translateService: TranslateService , public navCtrl: NavController, public navParams: NavParams) {
    translateService.get(['USERS_LIST_TITLE']).subscribe(values => {
      this.usersListTitle = values['USERS_LIST_TITLE'];
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersListPage');
  }

}
