import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { FilterPipe} from '../../pipes/filter/filter';
import { TranslateService } from '@ngx-translate/core';
import { Api } from '../../providers/api/api';
import { Storage } from '@ionic/storage';
import { ApplicationRef } from '@angular/core'
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEvent, HttpEventType ,HttpErrorResponse,} from '@angular/common/http';
import { MyApp } from '../../app/app.component';

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
  adminTitle = "";
  searchtxtUser = "";
  delButtonTitle = "";
  showConfirmForUserDelTitle = '';
  showConfirmForUserDelSubTitle = '';
  adminUserCardItems = {
    name: "Пользователи:",
    count_active: 5,
    count: 5,
    list: [],
    dir: []
  };
  adminContrCardItems = {
    name: "Контрагенты:",
    count_active: 5,
    count: 5,
    list: [],
    dir: []
  };
  adminDirCardItems = [{
    name: "Справочникки",
    count_active: 5,
    count: 5,
    list: [],
    dir: []
  }];
  ionChangeFlag = true;
  constructor(
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    private applicationRef: ApplicationRef,
    public api: Api,
    public translateService: TranslateService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public toastCtrl: ToastController,
    public myApp: MyApp
  ) {
    translateService.get(['ADMIN_TITLE', 'DELETE_BUTTON', 'SHOW_CONFIRM_FOR_USER_DEL_TITLE']).subscribe(values => {
      this.adminTitle = values['ADMIN_TITLE'];
      this.delButtonTitle = values['DELETE_BUTTON'];
      this.showConfirmForUserDelTitle = values['SHOW_CONFIRM_FOR_USER_DEL_TITLE']
    });
    this.storage.get('account').then((val) => {
      this.getUserList(val)
      this.getContrList(val)
    });
  }
  toggleUserActive(event: any, item: any): void {
    this.storage.get('account').then(accountInfo => {
      accountInfo.item = {
        uuid_key: item.uuid_key,
        active: item.active
      }
      this.api.postData('updateUser', accountInfo)
        .subscribe(res => {
            if (res == 'УСПЕШНО') {
              let toast = this.toastCtrl.create({
                message: 'Обновление данных прошло: ' + JSON.stringify(res),
                duration: 3000,
                position: 'bottom',
                cssClass: 'success',
                showCloseButton: true,
                closeButtonText: 'OK'
              });
              toast.present();
            }
          },
          error => {
            if (this.ionChangeFlag) {
              this.ionChangeFlag = false;
              event.disabled = true;
              setTimeout(() => {
                this.ionChangeFlag = true
                event.disabled = false;
              }, 1000);
              setTimeout(() => {
                item.active = !item.active;
              }, 900);
              let toast = this.toastCtrl.create({
                message: 'Обновление данных прошло: c ошибкой . Требуется восстановление связи. ',
                duration: 3000,
                position: 'bottom',
                cssClass: 'error',
                showCloseButton: true,
                closeButtonText: 'OK'
              });
              toast.present();
            }
          })

    });
  }
  toggleContrActive(event: any, item: any): void {
    this.storage.get('account').then(accountInfo => {
      accountInfo.item = {
        uuid_key: item.uuid_key,
        active: item.active
      }
      this.api.postData('updateContr', accountInfo)
        .subscribe(res => {
            if (res == 'УСПЕШНО') {
              let toast = this.toastCtrl.create({
                message: 'Обновление данных прошло: ' + JSON.stringify(res),
                duration: 3000,
                position: 'bottom',
                cssClass: 'success',
                showCloseButton: true,
                closeButtonText: 'OK'
              });
              toast.present();
            }
          },
          error => {
            if (this.ionChangeFlag) {
              this.ionChangeFlag = false;
              event.disabled = true;
              setTimeout(() => {
                this.ionChangeFlag = true
                event.disabled = false;
              }, 1000);
              setTimeout(() => {
                item.active = !item.active;
              }, 900);
              let toast = this.toastCtrl.create({
                message: 'Обновление данных прошло: c ошибкой . Требуется восстановление связи. ',
                duration: 3000,
                position: 'bottom',
                cssClass: 'error',
                showCloseButton: true,
                closeButtonText: 'OK'
              });
              toast.present();
            }
          })

    });
  }

  toastLongRequest = this.toastCtrl.create({
    message: 'Данные загружаются... ',
    duration: 0,
    position: 'top',
    cssClass: 'success',
    showCloseButton: true,
    closeButtonText: 'OK'
  });

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addUser() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.storage.get('account').then(accountInfo => {
          var nameArr = item.name.split(' ');
          if (nameArr[1]) {
            item.last_name = nameArr[0];
            item.name = nameArr[1];
          } else {
            item.last_name = nameArr[0];
            item.name = ' ';
          }
          accountInfo.item = item;
          this.toastLongRequest.present();

          this.api.addUserLongRequest('addUser', accountInfo)
            .subscribe(
              event => {
                if (event.type === HttpEventType.DownloadProgress) {
                  console.log("Download progress event", event);
                }

                if (event.type === HttpEventType.UploadProgress) {
                  console.log("Upload progress event", event);
                  this.toastLongRequest.data.message = ('Данные загружаются... ' + event.loaded + '/' + event.total);
                }

                if (event.type === HttpEventType.Response) {
                  console.log("Данные загружены УСПЕШНО..............", JSON.stringify(event.body));
                  console.log("Пользователь создан..............");
                  this.toastLongRequest.dismiss()
                  let toastLongRequest = this.toastCtrl.create({
                    message: 'Данные загружены УСПЕШНО. \n Пользователь содзан.',
                    duration: 3000,
                    position: 'top',
                    cssClass: 'success',
                    showCloseButton: true,
                    closeButtonText: 'OK'
                  });
                  toastLongRequest.present();
                  this.storage.get('account').then((val) => {
                    this.getUserList(val)
                  });

                }

              }
            );
        })
      }
    })
    addModal.present();
  }
  delUserConfirmation(item) {
    this.showConfirmForDelUser(this.showConfirmForUserDelTitle, item)
  }
  delUser(item) {
    this.storage.get('account').then(accountInfo => {
      accountInfo.item = item;
      let toastLongRequest = this.toastCtrl.create({
        message: 'Запрос на УДАЛЕНИЕ отправлен. ',
        duration: 3000,
        position: 'top',
        cssClass: 'success',
        showCloseButton: true,
        closeButtonText: 'OK'
      });
      toastLongRequest.present();
      this.api.delUser('delUser', accountInfo)
        .subscribe(
          event => {
            if (event.type === HttpEventType.DownloadProgress) {
              console.log("Download progress event", event);
            }

            if (event.type === HttpEventType.UploadProgress) {
              console.log("Upload progress event", event);

              //toastLongRequest.data.message = JSON.stringify(event);
            }

            if (event.type === HttpEventType.Response) {
              console.log("Пользователь УДАЛЕН...", JSON.stringify(event.body));
              toastLongRequest.setMessage('УДАЛЕН Пользователь: ' + event.body[0].last_name + ' ' + event.body[0].username) //+JSON.stringify(event.body));
              this.storage.get('account').then((val) => {
                this.getUserList(val)
              });
            }

          }
        );
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }
  getUserList(accountInfo: any): any {
    return this.api.postData('getUserList', accountInfo).subscribe(res => {
      this.adminUserCardItems.list = res['users'];
      this.adminUserCardItems.dir = res['dir'];
      // this.applicationRef.tick(); 
      for (let i in this.adminUserCardItems.list) {
        this.adminUserCardItems.list[i].url = this.myApp.file_db_root + this.adminUserCardItems.list[i].url
      }
      console.log("adminPage.adminUserCardItems:");
      console.log(this.adminUserCardItems);
    });
  }
  getContrList(accountInfo: any): any {
    return this.api.postData('getContrList', accountInfo).subscribe(res => {
      this.adminContrCardItems.list = res['contragents'];
      this.adminContrCardItems.dir = res['dir'];
      console.log("adminPage.getContrList:");
      console.log(this.adminContrCardItems);
    });
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
  showConfirmForDelUser(title: string, item: any) {
    var confirmStatus = false;
    let confirm = this.alertCtrl.create({
      title: title,
      message: item.last_name + " " + item.username,
      buttons: [{
          text: 'Отмена',
          handler: () => {
            console.log('Disagree clicked');
            //confirm.dismiss();
            //confirmStatus =false;
          }
        },
        {
          text: 'Согласен',
          handler: () => {
            console.log('Agree clicked');
            this.delUser(item);
          }
        }
      ]
    });
    confirm.present();
  }
}

