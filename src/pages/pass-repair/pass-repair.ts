import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api } from '../../providers/providers';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEvent, HttpEventType ,HttpErrorResponse,} from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
import { FirstRunPage } from '../pages';

/**
 * Generated class for the PassRepairPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'pass-repair/:str'
})@Component({
  selector: 'page-pass-repair',
  templateUrl: 'pass-repair.html',
})
export class PassRepairPage {
  //passRepairTitle: any;
  account: { name: string, email: string, password: string , secretStr:string, passwordCheck:string} = {
    name: '',
    email: '',
    password: '',
    passwordCheck: '',
    secretStr: ''
  };
  public pass : any ='';

  constructor(
    public toastCtrl: ToastController,
    public api: Api,
    public navCtrl: NavController,
    public navParams: NavParams, 
    public translateService: TranslateService) 
    {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PassRepairPage');
    this.account.secretStr=this.navParams.data.str
    console.log('ionViewDidLoad PassRepairPage this.navParams.data.str: ',this.navParams.data.str);
    this.getAccountValues()
  }
  getAccountValues() {
  console.log('passRepGetData getAccountValues this.account: ', JSON.stringify(this.account));
  this.api.passRep('passRepGetData',this.account)
    .subscribe(
      event => {
        if (event.type === HttpEventType.DownloadProgress) {
          console.log("Download progress event", event);
        }

        if (event.type === HttpEventType.UploadProgress) {
          console.log("Upload progress event", event);
        }

        if (event.type === HttpEventType.Response) {
          console.log("Данные пользователя получены...", JSON.stringify(event.body));
          this.account.email=event.body[0].email;
          this.account.name =event.body[0].last_name+' '+event.body[0].username
          let  toast = this.toastCtrl.create({
            message: 'Ссылка поодтверждена. Придумайте пароль.',
            duration: 3000,
            position: 'top',
            cssClass:'success',
            showCloseButton:true,
            closeButtonText:'OK'
          });
          toast.present();  
  
        }

      }
    );
  }
  setUserPass(){
    if (this.account.passwordCheck!=this.account.password) {
      let  toast = this.toastCtrl.create({
        message: 'Пароли не совпадают!!\n Проверьете поле "Пароль повторно".',
        duration: 3000,
        position: 'top',
        cssClass:'success',
        showCloseButton:true,
        closeButtonText:'OK'
      });
      toast.present();  

    } else {
      this.pass =Md5.hashStr(this.account.password);
      this.account.password = this.pass;
      this.account.passwordCheck = this.pass;
      console.log('setUserPass this.account: ', JSON.stringify(this.account));
      this.api.passRep('passRepSetPass',this.account)
        .subscribe(
          event => {
            if (event.type === HttpEventType.DownloadProgress) {
              console.log("Download progress event", event);
            }
    
            if (event.type === HttpEventType.UploadProgress) {
              console.log("Upload progress event", event);
            }
    
            if (event.type === HttpEventType.Response) {
              console.log("Пароль обновлен УСПЕШНО.", JSON.stringify(event.body));
              let  toast = this.toastCtrl.create({
                message: 'Пароль обновлен '+event.body[0]['mess'],
                duration: 3000,
                position: 'top',
                cssClass:'success',
                showCloseButton:true,
                closeButtonText:'OK'
              });
              toast.present();  
              if (event.body[0]['mess']==='УСПЕШНО'){
                this.navCtrl.setRoot(FirstRunPage);
              }
            }
    
          }
        );
        }
  }

}
