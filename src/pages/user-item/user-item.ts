import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Api } from '../../providers/api/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyApp } from '../../app/app.component';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEvent, HttpEventType ,HttpErrorResponse,} from '@angular/common/http';

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
@ViewChild('fileInput') fileInput;

item: any[]; 
dir: any[];
UserPageItemList: any[];
dummy_pass:any;
base64Image: string;
isReadyToSave: boolean;
form: FormGroup;
file_db_root:string;
  constructor(
    public camera: Camera,
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public toastCtrl: ToastController,
    public api: Api,
    public formBuilder: FormBuilder,
    public myApp:MyApp
    ) {
      this.file_db_root=myApp.file_db_root
      this.form = formBuilder.group({
        profilePic: [''],
        name: ['', Validators.required],
        about: ['']
      });
  
    this.item = navParams.get('item');
    this.dir =navParams.get('dir');
    this.dummy_pass= 'xxxxxxxxxxxxxx';
   
  }
  
  toastLongRequest = this.toastCtrl.create({
    message: 'Данные загружаются... ',
    duration: 0,
    position: 'top',
    cssClass:'success',
    showCloseButton:true,
    closeButtonText:'OK'
  });
  updateUser(item: any)  {
      this.storage.get('account').then(accountInfo => {
        accountInfo['item'] = JSON.parse(JSON.stringify(item));
        delete accountInfo.item.url;
        delete accountInfo.item.img_id;
        if (this.form.value.profilePic) {
          accountInfo['profilePic']=this.form.value.profilePic
        }
        this.toastLongRequest.present();
        this.api.addUserLongRequest('updateUser', accountInfo)
            .subscribe(
              event => {
                  if (event.type === HttpEventType.DownloadProgress) {
                      console.log("Download progress event", event);
                  }

                  if (event.type === HttpEventType.UploadProgress) {
                      console.log("Upload progress event", event);
                      this.toastLongRequest.data.message = ('Данные загружаются... '+event.loaded+'/'+event.total);
                  }

                  if (event.type === HttpEventType.Response) {
                    console.log("Данные загружены УСПЕШНО..............", JSON.stringify(event.body));
                    this.toastLongRequest.dismiss()
                    let  toastLongRequest = this.toastCtrl.create({
                      message: 'Данные загружены УСПЕШНО.',
                      duration: 3000,
                      position: 'top',
                      cssClass:'success',
                      showCloseButton:true,
                      closeButtonText:'OK'
                    });
                    toastLongRequest.present(); 
                  this.item['url'] =this.file_db_root+event.body[0].img_id+'.'+event.body[0].ext
                  }

              }
            );
        /*  
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
          }) ;*/
      });
      this.navCtrl.pop();
   }
  
   getPicture() {
    if (Camera['installed']()) {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 96,
        targetHeight: 96
      }).then((data) => {
        this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
      }, (err) => {
        alert('Unable to take photo');
      })
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      this.form.patchValue({ 'profilePic': imageData });
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {
    return 'url(' + this.form.controls['profilePic'].value + ')'
  }
  getProfileImagePlaceholderStyle(){
    return 'url(' + this.item['url'] + ')'
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
