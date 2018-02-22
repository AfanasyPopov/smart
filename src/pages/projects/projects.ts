import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import {MyApp} from '../../app/app.component'
import {Api} from '../../providers/api/api'
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEvent, HttpEventType ,HttpErrorResponse,} from '@angular/common/http';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Platform } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the ProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {
  projectsList=[]
  isHaveAddPermission=false;
  constructor(
    private screenOrientation: ScreenOrientation,
    public platform: Platform,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public myApp:MyApp,
    public api:Api
  ) {
    this.screenOrientation = screenOrientation;
    if (this.myApp.user.role_name=='root'){
      this.isHaveAddPermission=true;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
    this.getProjectsList();
    this.setOrientations();
    this.onOrientationChenge ()
  }
  openProject(projectId){
    this.navCtrl.push('CardsPage')
  }
 addProject(){
    let addModal = this.modalCtrl.create('ProjectCreatePage',{file_db_root:this.myApp.file_db_root});
      addModal.onDidDismiss(formData => {
        formData.account_key = this.myApp.user.uuid_key
        formData.projectManager = formData.projectManager.map(Number)
        this.api.postLongRequest('addProject',formData)
        .subscribe(
          event => {
            if (event.type === HttpEventType.DownloadProgress) {
              console.log("Download progress event", event);
            }
    
            if (event.type === HttpEventType.UploadProgress) {
              console.log("Upload progress event", event);
            }
    
            if (event.type === HttpEventType.Response) {
              console.log("Результат создания Project:", JSON.stringify(event.body));
              var mess=JSON.stringify(event.body[0].mess);
              let toast = this.toastCtrl.create({
                message: mess,
                duration: 3000,
                position: 'top',
                cssClass:'success',
                showCloseButton:true,
                closeButtonText:'OK'
              });
              toast.present(); 
              this.getProjectsList();
            }
          }
        );
        })
    
    addModal.present();
  }
  getProjectsList(){
    var data={
      account_key : this.myApp.user.uuid_key
    }
    this.api.postLongRequest('getProjectsList',data)
    .subscribe(
      event => {
        if (event.type === HttpEventType.DownloadProgress) {
          console.log("Download progress event", event);
        }

        if (event.type === HttpEventType.UploadProgress) {
          console.log("Upload progress event", event);
        }

        if (event.type === HttpEventType.Response) {
          this.projectsList=event.body['projectsList']
          this.onOrientationChenge ()
        }
      }
    );
  }
  mute(item){  }
  more(item){  }
  delete(projectId){
      var idToIntex =null ;
        this.projectsList.forEach(function (val,index,arr){
            if (val.id==projectId){
              idToIntex=index;
            }
        })
      var confirmStatus = false;
      let confirm = this.alertCtrl.create({
        title: 'Удалить проект:',
        message: this.projectsList[idToIntex].project_name,
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
              this.deleteProject(projectId);
            }
          }
        ]
      });
      confirm.present();
    }

  deleteProject(item){
    var data={
      account_key : this.myApp.user.uuid_key,
      projectId:item
    }
    this.api.postLongRequest('delProject',data)
    .subscribe(
      event => {
        if (event.type === HttpEventType.DownloadProgress) {
          console.log("Download progress event", event);
        }

        if (event.type === HttpEventType.UploadProgress) {
          console.log("Upload progress event", event);
        }

        if (event.type === HttpEventType.Response) {
          //this.projectsList=event.body['projectsList']
          this.getProjectsList();
        }
      }
    );
  }
  setOrientations(){
    this.screenOrientation.onChange().subscribe(
      () => {
          //alert('Orientation chenged')  
          this.onOrientationChenge()  
        })          
      }

     
  onOrientationChenge () {
      //alert(this.screenOrientation.type);
      if(this.screenOrientation.type==='landscape-primary'){
        this.projectsList.forEach(function(element,index,arr){
          arr[index].show=true;
        });      
      } else {
        this.projectsList.forEach(function(element,index,arr){
          arr[index].show=false;
        });      
      }
  }

}
