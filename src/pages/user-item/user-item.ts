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
  }


  ionViewDidLoad() {
    this.setValuesInSelectItems(this.dir, this.item);
  }
  ionViewWillLeave(){
    this.setLabelsInSelectedItems(this.dir, this.item);
  }
  setValuesInSelectItems(dir:any, item:any) {
    Object.keys(dir).forEach(function(dir_item,i,arr){
      item[dir_item]=dir[dir_item].findIndex(elem=> elem.label==item[dir_item]);
    })
  }
  setLabelsInSelectedItems(dir:any, item:any){
    Object.keys(dir).forEach(function(dir_item,i,arr){
      item[dir_item]=dir[dir_item][dir[dir_item].findIndex(elem=> elem.value==item[dir_item])].label;
    })   
  }
}
