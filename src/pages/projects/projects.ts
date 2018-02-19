import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import {MyApp} from '../../app/app.component'
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
  projectsList=[
    {projectId:0, projectName:'gthdsq', projectOwner:'Попов Афанасий', projectDescription:'Descrption Descrption Descrption Descrption',show:false},
    {projectId:1, projectName:'gthdsq', projectOwner:'Попов Афанасий', projectDescription:'Descrption Descrption Descrption Descrption',show:false},
    {projectId:2, projectName:'gthdsq', projectOwner:'Попов Афанасий', projectDescription:'Descrption Descrption Descrption Descrption',show:false},
    {projectId:3, projectName:'gthdsq', projectOwner:'Попов Афанасий', projectDescription:'Descrption Descrption Descrption Descrption',show:false},
    {projectId:4, projectName:'gthdsq', projectOwner:'Попов Афанасий', projectDescription:'Descrption Descrption Descrption Descrption',show:false},
    {projectId:5, projectName:'gthdsq', projectOwner:'Попов Афанасий', projectDescription:'Descrption Descrption Descrption Descrption',show:false},
    {projectId:6, projectName:'gthdsq', projectOwner:'Попов Афанасий', projectDescription:'Descrption Descrption Descrption Descrption',show:false},
    {projectId:7, projectName:'gthdsq', projectOwner:'Попов Афанасий', projectDescription:'Descrption Descrption Descrption Descrption',show:false},
    {projectId:8, projectName:'gthdsq', projectOwner:'Попов Афанасий', projectDescription:'Descrption Descrption Descrption Descrption',show:false}
  ]
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public myApp:MyApp
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
  }
  openProject(projectId){
    this.navCtrl.push('CardsPage')
  }
 addProject(){
    let addModal = this.modalCtrl.create('ProjectCreatePage',{file_db_root:this.myApp.file_db_root});
    addModal.onDidDismiss(item => {
    })
    addModal.present();
  }

}
