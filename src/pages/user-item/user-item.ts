import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Api } from '../../providers/api/api';
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
dummy_pass:any;

  constructor(
    private camera: Camera,
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public toastCtrl: ToastController,
    public api: Api,
  ) {
    this.item = navParams.get('item');
    this.dir =navParams.get('dir');
    this.dummy_pass= 'xxxxxxxxxxxxxx';
  }

  updateUser(item: any)  {
      this.storage.get('account').then(accountInfo => {
        accountInfo['item'] = item;
        this.api.postData('updateUser', accountInfo).subscribe (res=>{
          let  toast = this.toastCtrl.create({
            message: 'Обновление данных прошло: '+JSON.stringify(res),
            duration: 3000,
            position: 'bottom',
            cssClass:'success',
            showCloseButton:true,
            closeButtonText:'OK'
          });
          toast.present(); 
          }) ;
      });
      this.navCtrl.pop();
   }
  
  ionViewDidLoad() {
   this.setValuesInSelectItems(this.dir, this.item);
  }
  ionViewDidLeave(){
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
