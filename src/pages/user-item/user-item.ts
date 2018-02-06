import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-item',
  templateUrl: 'user-item.html',
})
export class UserItemPage {
item: any[];
dir: any[];
UserPageItemList: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
    this.dir =navParams.get('dir');
    this.UserPageItemList=[
      {uuid_key:           this.item['uuid_key'],     element:'txt-disabled'},
      {id:                 this.item['id'],           element:'txt-disabled'},
      {img_ref:            this.item['img_ref'],      element:'img'},
      {username:           this.item['username'],     element:'input'},
      {last_name:          this.item['last_name'],    element:'input'},
      {email:              this.item['email'],        element:'input'},
      {user_pass:          this.item['user_pass'],    element:'password'},
      {organization:       this.item['organization'], element:'input'},
      {description:        this.item['description'],  element:'input-area'},
      {role_name:          this.item['role_name'],    element:'select'},
      {user_status:        this.item['user_status'],  element:'select'},
      {active:             this.item['active'],       element:'boolean'},
      {contragent_flag:    this.item['contragent_flag'],element:'boolean'},
      {group_flag:         this.item['group_flag'],   element:'boolean'},
      {user_flag:          this.item['user_flag'],    element:'boolean'}
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserItemPage');
  }

}
