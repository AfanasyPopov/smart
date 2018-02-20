import { Component, ViewChild, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController,NavParams } from 'ionic-angular';
import { Api } from '../../providers/api/api';
import { Storage } from '@ionic/storage';
import { MyApp } from '../../app/app.component';

/**
 * Generated class for the ProjectCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@Injectable()
@IonicPage()
@Component({
  selector: 'page-project-create',
  templateUrl: 'project-create.html',
})
export class ProjectCreatePage {
  @ViewChild('fileInput') fileInput;
  file_db_root: string;
  isReadyToSave: boolean;
  item: any;
  form: FormGroup;
  dir:any={};

  constructor(
    public navCtrl: NavController, 
    public viewCtrl: ViewController, 
    public formBuilder: FormBuilder, 
    public camera: Camera, 
    public storage: Storage,
    public api:Api,
    public navParams:NavParams
  ) 
  {
    this.file_db_root=navParams.get('file_db_root');
    this.form = formBuilder.group({
      profilePic: [''],
      ProjectName: ['', Validators.required],
      ProjectDescription: [''],
      ProjectManager:['']
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
    this.storage.get('account').then((val) => {
      this.getUserList(val)
      });
  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectCreatePage');
  }

  getUserList(accountInfo: any): any {
    return this.api.postData('getUserList', accountInfo).subscribe(res => {
      this.dir.userList = res['users'];
      for (let i in this.dir.userList) {
        this.dir.userList[i].url = this.file_db_root + this.dir.userList[i].url
      }
      console.log("ProjectCreatePage.getUserList:");
      console.log(this.dir);
    });
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

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }
}
