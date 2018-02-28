import { Component,ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Platform } from 'ionic-angular';
import {MyApp} from '../../app/app.component'


/**
 * Generated class for the ProjectItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-project-item',
  templateUrl: 'project-item.html',
})
export class ProjectItemPage {
  @ViewChild(Slides) slides: Slides;
  project =[]
  isSwiperShow:boolean = true;
  isMobilePlatform:boolean;
  isUserAdmin:boolean;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private screenOrientation: ScreenOrientation,
    platform: Platform,
    public myApp:MyApp,
  ) {
    this.isMobilePlatform=platform.is('mobile');
    if (this.myApp.user.status==3){ //3==owner hwo can add/del Tasks or Links
      this.isUserAdmin=true; 
    }
  }
lockSwiper(){
  this.slides.lockSwipes(true)
  console.log('Swiper locked')
}  
pointerIn(ev){
  console.log('Swiper unlocked')
  this.slides.lockSwipes(false);
  var gant_chart=document.getElementById('gantt_here').style.width="200%";

}

onOrientationChenge () {
  //alert(this.screenOrientation.type);
  if(this.screenOrientation.type==='landscape-primary'){
    this.gant_config_mobile();
  } else {
  }
}

slideChanged(){
  gantt.render();
  var swiper_conteiner=document.getElementsByClassName('swiper-slide');
  Object.keys(swiper_conteiner).forEach(element => {
    swiper_conteiner[element].style.pointerEvents="none";
  });
  var gant_chart=document.getElementById('gantt_here').style.width="200%";
      gant_chart=document.getElementById('gantt_here').style.pointerEvents="auto";
  var pointer = document.getElementsByClassName('pointer');
  Object.keys(pointer).forEach(element=>{
    pointer[element].style.pointerEvents="auto"
  })
  var grid_cell = document.getElementsByClassName('grid_cell');
  Object.keys(grid_cell).forEach(element => {
    grid_cell[element].style.width="50%";
  });
  var timeline_cell = document.getElementsByClassName('timeline_cell');
  Object.keys(timeline_cell).forEach(element => {
    timeline_cell[element].style.width="50%";
  });
  gantt.render();

}

 swipeByElementOutHover (){
  console.log('swipeByElementOutHover')
  //this.slides.lockSwipes(true)
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectItemPage');
    this.project =this.navParams.data.project;
    this.lockSwiper();
    if (this.isMobilePlatform){
      this.gant_config_mobile();
    } else {
      this.gant_config_desctop();
    }
    gantt.config.auto_scheduling = true;
    gantt.config.auto_scheduling_strict = true;

    gantt.attachEvent("onBeforeAutoSchedule", function(){
      gantt.message("Recalculating project schedule...");
      return true;
    });
    gantt.attachEvent("onAfterTaskAutoSchedule", function(task, new_date, constraint, predecessor){
      gantt.message({
        text: "<b>"+task.text+"</b> has been rescheduled to " + gantt.templates.task_date(new_date) + " due to <b>"+predecessor.text+"</b> constraint",
        expire:4000
      });
    });
    
    gantt.init("gantt_here");
    gantt.load("http://185.63.32.215:8100/data");

  }

  ionViewWillLeave() {
    console.log("Looks like I'm about to leave :(");
  }
  ionViewDidLeave() {
    gantt.clearAll(); 
  }
  
  gant_config_desctop(){
    this.isSwiperShow=false;
    gantt.config.xml_date = "%Y-%m-%d %H:%i:%s";
    gantt.config.auto_scheduling = true;
    gantt.templates.task_text=function(start,end,task){
      return task.id+":<b>"+task.text+"</b>";
    };  
    this.setColumsByUserStatus(); 
    this.setHandlingEvents()

  }
  gant_config_mobile(){
    this.isSwiperShow=true;
    gantt.config.grid_resize=true;
    gantt.config.xml_date = "%Y-%m-%d %H:%i:%s";
    gantt.config.auto_scheduling = true;
    gantt.templates.task_text=function(start,end,task){
      return task.id+":<b>"+task.text+"</b>";
    }; 
    this.setColumsByUserStatus(); 
    this.setHandlingEvents()
  }
  setColumsByUserStatus(){
    if (this.isUserAdmin){
      gantt.config.columns = [
        {name:"text", tree:true, width:'290', resize:true },
        {name:"buttons", width:'30', align: "center", template: function(task){
          return '<div class="gantt_tree_icon gantt_unchecked"></div>'
          }},
        {name:"duration", width:'*', align: "center" },
        {name:"add", width:'30' }
        ];
      } else {
        gantt.config.columns = [
          {name:"text", tree:true, width:'280', resize:true },
          {name:"duration", width:'*', align: "center" },
          {name:"buttons", width:'44', align: "center", template: function(task){
            return '<div class="gantt_tree_icon gantt_unchecked"></div>'
            }}
          ];
      }
  }
  setHandlingEvents(){
    gantt.attachEvent("onTaskClick", function(id, e) {
      alert("You've just clicked an item with id="+id);
    });
  }
}

