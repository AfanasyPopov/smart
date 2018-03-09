import { Component,ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Platform } from 'ionic-angular';
import {MyApp} from '../../app/app.component'
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';


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
  isUserAdmin:boolean;
  tasks = {
    data:[
        {id:1, text:"Project #1",    type:gantt.config.types.project,    open:true},   
        {id:2, text:"Task #1",       start_date:"12-04-2013", duration:3, parent:1},
        {id:3, text:"Alpha release", type:gantt.config.types.milestone,   parent:1, 
            start_date:"14-04-2013"}],
    links:[]
};
 projects_with_milestones = {
	"data":[
		{"id":11, "text":"Project #1", type:gantt.config.types.project, "progress": 0.6, "open": true},

		{"id":12, "text":"Task #1", "start_date":"03-04-2018", "duration":"5", "parent":"11", "progress": 1, "open": true},
		{"id":13, "text":"Task #2", "start_date":"03-04-2018", type:gantt.config.types.project, "parent":"11", "progress": 0.5, "open": true},
		{"id":14, "text":"Task #3", "start_date":"02-04-2018", "duration":"6", "parent":"11", "progress": 0.8, "open": true},
		{"id":15, "text":"Task #4", type:gantt.config.types.project, "parent":"11", "progress": 0.2, "open": true},
		{"id":16, "text":"Final milestone", "start_date":"15-04-2018", type:gantt.config.types.milestone, "parent":"11", "progress": 0, "open": true},

		{"id":17, "text":"Task #2.1", "start_date":"03-04-2018", "duration":"2", "parent":"13", "progress": 1, "open": true},
		{"id":18, "text":"Task #2.2", "start_date":"06-04-2018", "duration":"3", "parent":"13", "progress": 0.8, "open": true},
		{"id":19, "text":"Task #2.3", "start_date":"10-04-2018", "duration":"4", "parent":"13", "progress": 0.2, "open": true},
		{"id":20, "text":"Task #2.4", "start_date":"10-04-2018", "duration":"4", "parent":"13", "progress": 0, "open": true},
		{"id":21, "text":"Task #4.1", "start_date":"03-04-2018", "duration":"4", "parent":"15", "progress": 0.5, "open": true},
		{"id":22, "text":"Task #4.2", "start_date":"03-04-2018", "duration":"4", "parent":"15", "progress": 0.1, "open": true},
		{"id":23, "text":"Mediate milestone", "start_date":"14-04-2018", type:gantt.config.types.milestone, "parent":"15", "progress": 0, "open": true}
	],
	"links":[
		{"id":"10","source":"11","target":"12","type":"1"},
		{"id":"11","source":"11","target":"13","type":"1"},
		{"id":"12","source":"11","target":"14","type":"1"},
		{"id":"13","source":"11","target":"15","type":"1"},
		{"id":"14","source":"23","target":"16","type":"0"},
		{"id":"15","source":"13","target":"17","type":"1"},
		{"id":"16","source":"17","target":"18","type":"0"},
		{"id":"17","source":"18","target":"19","type":"0"},
		{"id":"18","source":"19","target":"20","type":"0"},
		{"id":"19","source":"15","target":"21","type":"2"},
		{"id":"20","source":"15","target":"22","type":"2"},
		{"id":"21","source":"15","target":"23","type":"0"}
	]
};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private screenOrientation: ScreenOrientation,
    platform: Platform,
    public myApp:MyApp,
  ) {
    if (this.myApp.user.status==3){ //3==owner hwo can add/del Tasks or Links
      this.isUserAdmin=true; 
    }
    document['checkBoxToggle']= function (taskId){
     gantt.getTask(taskId).checked=!gantt.getTask(taskId).checked
      var checkbox = document.getElementById("gantt_greed_checkbox_id-"+taskId).classList;

      if (gantt.getTask(taskId).checked){
        checkbox.remove("gantt_unchecked");
        checkbox.add("gantt_checked");
        //gantt.getTask(taskId).checked
      } else {
        checkbox.remove("gantt_checked");
        checkbox.add("gantt_unchecked");
      }
      console.log('taskId:'+taskId+' '+JSON.stringify(checkbox));
          // gantt.message({
          //   text: "Выделен " + gantt.getTask(taskId).text ,
          //   expire:4000
          // });
        }
  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectItemPage');
    this.myApp.isPaneShouldShow=false;


    //gantt.parse(this.projects_with_milestones)
    setTimeout(()=>{
      this.project =this.navParams.data.project;
      this.lockSwiper();
      this.gant_config();
      gantt.init("gantt_here");
      gantt.clearAll();
      gantt.load("http://185.63.32.215:8100/data");
      //this.addTasksProp(); hook on "onLoadEnd" event
    },500) 
  }

  ionViewWillLeave() {
    console.log("Looks like I'm about to leave :(");
    if (!this.myApp.isMobilePlatform){
      this.myApp.isPaneShouldShow=true;
      }
    }
  ionViewDidLeave() {
    //gantt.clearAll(); 
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


  gant_config(){
    //gantt.config.row_height=30
    gantt.config.scale_unit = "month";
  	gantt.config.date_scale = "%F, %Y";
    gantt.config.scale_height = 35;
    gantt.config.subscales = [
      {unit: "day", step: 1, date: "%j, %D"}
    ];
   
  
    if (!this.myApp.isGanttConfigured) {
      var dp = new gantt.dataProcessor("http://185.63.32.215:8100/data");
      dp.init(gantt);
      dp.setTransactionMode("REST");
      this.myApp.isGanttConfigured=true;
    }
    if (this.myApp.isMobilePlatform){
      this.gant_config_mobile();
    } else {
      this.gant_config_desktop();
    }
    gantt.config.auto_scheduling = true;
    gantt.config.auto_scheduling_strict = true;
    var opts_prior = [
      { key:1, label: "High" },                                            
      { key:2, label: "Normal" },                                         
      { key:3, label: "Low" }                                            
    ];
    
    gantt.config.types["customType"] = "type_id";
    gantt.locale.labels['type_' + "customType"] = "New Type";
    gantt.config.lightbox["customType" + "_sections"] = [
      {name: "description", height: 70, map_to: "text", type: "textarea", focus: true},
      {name: "type", type: "typeselect", map_to: "type"}
    ];

    gantt.config.lightbox.sections = [
        {name: "description", height: 70, map_to: "text", type: "textarea", focus: true},
        {name: "type", type: "typeselect", map_to: "type"},
        {name: "time", type: "duration", map_to: "auto"}
      ];
      /*
        {name:"description", height:38, type:"textarea", map_to:"text", focus:true},
        {name:"project",    height:22, type:"project",   map_to:"project", default_value:"Project"},                                                                      
       // {name:"priority",    height:22, type:"select",   map_to:"priority", options:opts_prior, default_value:"Low"},                                                                      
        {name:"time", height:72, type:"duration", map_to:"auto"}
    ]; */
   }
  
  gant_config_desktop(){
    this.isSwiperShow=false;
    this.getSelector(".gantt_cal_light").width = '530px';
    gantt.config.xml_date = "%Y-%m-%d %H:%i:%s";
    gantt.templates.task_text=function(start,end,task){
      return task.id+":<b>"+task.text+"</b>";
    };  
    this.setColumsByUserStatus(); 
    this.setHandlingEvents()
    this.setLinksColors()
  }
  gant_config_mobile(){
    this.getSelector(".gantt_cal_light").width = '330px';
    gantt.config.touch = "force";
    this.isSwiperShow=true;
    gantt.config.grid_resize=true;
    gantt.config.xml_date = "%Y-%m-%d %H:%i:%s";
    gantt.templates.task_text=function(start,end,task){
      return task.id+":<b>"+task.text+"</b>";
    }; 
    this.setColumsByUserStatus(); 
    this.setHandlingEvents()
    this.setLinksColors()
  }
  setColumsByUserStatus(){
    if (this.isUserAdmin){
      gantt.config.columns = [
        {name:"text", tree:true, width:'290', resize:true },
        {name:"buttons", width:'30', align: "center", template: function(task){
          var check_string=''
          if (task['checked']) { 
            check_string ='gantt_checked'
          } else{
            check_string ='gantt_unchecked'
          }
          return '<div class="gantt_tree_icon '+check_string+'" id="gantt_greed_checkbox_id-'+task.id+'" onClick="checkBoxToggle('+task.id+')"></div>'
          }},
        {name:"duration", width:'*', align: "center",max_width:'50' },
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
  setLinksColors(){
    gantt.templates.link_class = function(link){
      var types = gantt.config.links;
      switch (link.type){
          case types.finish_to_start:
              return "finish_to_start";
             // break;
          case types.start_to_start:
              return "start_to_start";
              //break;
          case types.finish_to_finish:
              return "finish_to_finish";
             // break;
          case types.start_to_finish:
              return "start_to_finish";
             // break;
      }
  };
  }
  setHandlingEvents(){

    
     // if (!gantt.checkEvent("onTaskClick")){
       // gantt.attachEvent("onTaskClick", function(id, e) {
          //gantt.getTask(id).checked=!gantt.getTask(id).checked;
          //document.checkBoxToggle(id);
          // gantt.message({
          //   text: "<b>"+gantt.getTask(id).id+"</b> был нажат  " + gantt.getTask(id).task_text ,
          //   expire:4000
          // });
  
     //   });
      //}
      /*
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
    */
    if(!gantt.checkEvent("onLoadEnd")){
      gantt.attachEvent("onLoadEnd", function(){
        var count = gantt.getTaskCount();
        for (let index = 0; index < count; index++) {
          gantt.getTaskByIndex(index).checked=false;    
        }
            });
    }
  }
  addProject(){
  }

  getSelector(sText) { 
    var sh = document.styleSheets; 
    var res:any
    Object.keys(sh).forEach(element => {
      var s=sh[element] 
      var rules = s['rules']||s['cssRules'] // IE || others 
      for(var r=0;r<rules.length;r++) {
        if(rules[r].selectorText==sText) {
          res= rules[r]['style'] ;
        }
      }
    });
    return res; 
  }

}
