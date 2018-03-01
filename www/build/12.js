webpackJsonp([12],{

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectItemPageModule", function() { return ProjectItemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_item__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProjectItemPageModule = (function () {
    function ProjectItemPageModule() {
    }
    ProjectItemPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__project_item__["a" /* ProjectItemPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__project_item__["a" /* ProjectItemPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
        })
    ], ProjectItemPageModule);
    return ProjectItemPageModule;
}());

//# sourceMappingURL=project-item.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_component__ = __webpack_require__(248);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProjectItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProjectItemPage = (function () {
    function ProjectItemPage(navCtrl, navParams, screenOrientation, platform, myApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.screenOrientation = screenOrientation;
        this.myApp = myApp;
        this.project = [];
        this.isSwiperShow = true;
        this.tasks = {
            data: [
                { id: 1, text: "Project #1", type: gantt.config.types.project, open: true },
                { id: 2, text: "Task #1", start_date: "12-04-2013", duration: 3, parent: 1 },
                { id: 3, text: "Alpha release", type: gantt.config.types.milestone, parent: 1,
                    start_date: "14-04-2013" }
            ],
            links: []
        };
        this.projects_with_milestones = {
            "data": [
                { "id": 11, "text": "Project #1", type: gantt.config.types.project, "progress": 0.6, "open": true },
                { "id": 12, "text": "Task #1", "start_date": "03-04-2018", "duration": "5", "parent": "11", "progress": 1, "open": true },
                { "id": 13, "text": "Task #2", "start_date": "03-04-2018", type: gantt.config.types.project, "parent": "11", "progress": 0.5, "open": true },
                { "id": 14, "text": "Task #3", "start_date": "02-04-2018", "duration": "6", "parent": "11", "progress": 0.8, "open": true },
                { "id": 15, "text": "Task #4", type: gantt.config.types.project, "parent": "11", "progress": 0.2, "open": true },
                { "id": 16, "text": "Final milestone", "start_date": "15-04-2018", type: gantt.config.types.milestone, "parent": "11", "progress": 0, "open": true },
                { "id": 17, "text": "Task #2.1", "start_date": "03-04-2018", "duration": "2", "parent": "13", "progress": 1, "open": true },
                { "id": 18, "text": "Task #2.2", "start_date": "06-04-2018", "duration": "3", "parent": "13", "progress": 0.8, "open": true },
                { "id": 19, "text": "Task #2.3", "start_date": "10-04-2018", "duration": "4", "parent": "13", "progress": 0.2, "open": true },
                { "id": 20, "text": "Task #2.4", "start_date": "10-04-2018", "duration": "4", "parent": "13", "progress": 0, "open": true },
                { "id": 21, "text": "Task #4.1", "start_date": "03-04-2018", "duration": "4", "parent": "15", "progress": 0.5, "open": true },
                { "id": 22, "text": "Task #4.2", "start_date": "03-04-2018", "duration": "4", "parent": "15", "progress": 0.1, "open": true },
                { "id": 23, "text": "Mediate milestone", "start_date": "14-04-2018", type: gantt.config.types.milestone, "parent": "15", "progress": 0, "open": true }
            ],
            "links": [
                { "id": "10", "source": "11", "target": "12", "type": "1" },
                { "id": "11", "source": "11", "target": "13", "type": "1" },
                { "id": "12", "source": "11", "target": "14", "type": "1" },
                { "id": "13", "source": "11", "target": "15", "type": "1" },
                { "id": "14", "source": "23", "target": "16", "type": "0" },
                { "id": "15", "source": "13", "target": "17", "type": "1" },
                { "id": "16", "source": "17", "target": "18", "type": "0" },
                { "id": "17", "source": "18", "target": "19", "type": "0" },
                { "id": "18", "source": "19", "target": "20", "type": "0" },
                { "id": "19", "source": "15", "target": "21", "type": "2" },
                { "id": "20", "source": "15", "target": "22", "type": "2" },
                { "id": "21", "source": "15", "target": "23", "type": "0" }
            ]
        };
        this.isMobilePlatform = platform.is('mobile');
        if (this.myApp.user.status == 3) {
            this.isUserAdmin = true;
        }
    }
    ProjectItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProjectItemPage');
        this.project = this.navParams.data.project;
        this.lockSwiper();
        this.gant_config();
        gantt.init("gantt_here");
        gantt.load("http://185.63.32.215:8100/data");
        //gantt.parse(this.projects_with_milestones)
    };
    ProjectItemPage.prototype.ionViewWillLeave = function () {
        console.log("Looks like I'm about to leave :(");
    };
    ProjectItemPage.prototype.ionViewDidLeave = function () {
        gantt.clearAll();
    };
    ProjectItemPage.prototype.lockSwiper = function () {
        this.slides.lockSwipes(true);
        console.log('Swiper locked');
    };
    ProjectItemPage.prototype.pointerIn = function (ev) {
        console.log('Swiper unlocked');
        this.slides.lockSwipes(false);
        var gant_chart = document.getElementById('gantt_here').style.width = "200%";
    };
    ProjectItemPage.prototype.onOrientationChenge = function () {
        //alert(this.screenOrientation.type);
        if (this.screenOrientation.type === 'landscape-primary') {
            this.gant_config_mobile();
        }
        else {
        }
    };
    ProjectItemPage.prototype.slideChanged = function () {
        gantt.render();
        var swiper_conteiner = document.getElementsByClassName('swiper-slide');
        Object.keys(swiper_conteiner).forEach(function (element) {
            swiper_conteiner[element].style.pointerEvents = "none";
        });
        var gant_chart = document.getElementById('gantt_here').style.width = "200%";
        gant_chart = document.getElementById('gantt_here').style.pointerEvents = "auto";
        var pointer = document.getElementsByClassName('pointer');
        Object.keys(pointer).forEach(function (element) {
            pointer[element].style.pointerEvents = "auto";
        });
        var grid_cell = document.getElementsByClassName('grid_cell');
        Object.keys(grid_cell).forEach(function (element) {
            grid_cell[element].style.width = "50%";
        });
        var timeline_cell = document.getElementsByClassName('timeline_cell');
        Object.keys(timeline_cell).forEach(function (element) {
            timeline_cell[element].style.width = "50%";
        });
        gantt.render();
    };
    ProjectItemPage.prototype.gant_config = function () {
        //gantt.config.row_height=30
        gantt.config.scale_unit = "month";
        gantt.config.date_scale = "%F, %Y";
        gantt.config.scale_height = 35;
        gantt.config.subscales = [
            { unit: "day", step: 1, date: "%j, %D" }
        ];
        if (!this.myApp.isGanttConfigured) {
            var dp = new gantt.dataProcessor("http://185.63.32.215:8100/data");
            dp.init(gantt);
            dp.setTransactionMode("REST");
            this.myApp.isGanttConfigured = true;
        }
        if (this.isMobilePlatform) {
            this.gant_config_mobile();
        }
        else {
            this.gant_config_desktop();
        }
        gantt.config.auto_scheduling = true;
        gantt.config.auto_scheduling_strict = true;
        var opts_prior = [
            { key: 1, label: "High" },
            { key: 2, label: "Normal" },
            { key: 3, label: "Low" }
        ];
        gantt.config.types["customType"] = "type_id";
        gantt.locale.labels['type_' + "customType"] = "New Type";
        gantt.config.lightbox["customType" + "_sections"] = [
            { name: "description", height: 70, map_to: "text", type: "textarea", focus: true },
            { name: "type", type: "typeselect", map_to: "type" }
        ];
        gantt.config.lightbox.sections = [
            { name: "description", height: 70, map_to: "text", type: "textarea", focus: true },
            { name: "type", type: "typeselect", map_to: "type" },
            { name: "time", type: "duration", map_to: "auto" }
        ];
        /*
          {name:"description", height:38, type:"textarea", map_to:"text", focus:true},
          {name:"project",    height:22, type:"project",   map_to:"project", default_value:"Project"},
         // {name:"priority",    height:22, type:"select",   map_to:"priority", options:opts_prior, default_value:"Low"},
          {name:"time", height:72, type:"duration", map_to:"auto"}
      ]; */
    };
    ProjectItemPage.prototype.gant_config_desktop = function () {
        this.isSwiperShow = false;
        this.getSelector(".gantt_cal_light").width = '530px';
        gantt.config.xml_date = "%Y-%m-%d %H:%i:%s";
        gantt.templates.task_text = function (start, end, task) {
            return task.id + ":<b>" + task.text + "</b>";
        };
        this.setColumsByUserStatus();
        this.setHandlingEvents();
        this.setLinksColors();
    };
    ProjectItemPage.prototype.gant_config_mobile = function () {
        this.getSelector(".gantt_cal_light").width = '330px';
        gantt.config.touch = "force";
        this.isSwiperShow = true;
        gantt.config.grid_resize = true;
        gantt.config.xml_date = "%Y-%m-%d %H:%i:%s";
        gantt.templates.task_text = function (start, end, task) {
            return task.id + ":<b>" + task.text + "</b>";
        };
        this.setColumsByUserStatus();
        this.setHandlingEvents();
        this.setLinksColors();
    };
    ProjectItemPage.prototype.setColumsByUserStatus = function () {
        if (this.isUserAdmin) {
            gantt.config.columns = [
                { name: "text", tree: true, width: '290', resize: true },
                { name: "buttons", width: '30', align: "center", template: function (task) {
                        return '<div class="gantt_tree_icon gantt_unchecked"></div>';
                    } },
                { name: "duration", width: '*', align: "center" },
                { name: "add", width: '30' }
            ];
        }
        else {
            gantt.config.columns = [
                { name: "text", tree: true, width: '280', resize: true },
                { name: "duration", width: '*', align: "center" },
                { name: "buttons", width: '44', align: "center", template: function (task) {
                        return '<div class="gantt_tree_icon gantt_unchecked"></div>';
                    } }
            ];
        }
    };
    ProjectItemPage.prototype.setLinksColors = function () {
        gantt.templates.link_class = function (link) {
            var types = gantt.config.links;
            switch (link.type) {
                case types.finish_to_start:
                    return "finish_to_start";
                    break;
                case types.start_to_start:
                    return "start_to_start";
                    break;
                case types.finish_to_finish:
                    return "finish_to_finish";
                    break;
                case types.start_to_finish:
                    return "start_to_finish";
                    break;
            }
        };
    };
    ProjectItemPage.prototype.setHandlingEvents = function () {
        /*
          if (!gantt.checkEvent("onTaskClick")){
            gantt.attachEvent("onTaskClick", function(id, e) {
              // gantt.message({
              //   text: "<b>"+gantt.getTask(id).id+"</b> был нажат  " + gantt.getTask(id).task_text ,
              //   expire:4000
              // });
            });
          }
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
    };
    ProjectItemPage.prototype.addProject = function () {
    };
    ProjectItemPage.prototype.getSelector = function (sText) {
        var sh = document.styleSheets;
        var res;
        Object.keys(sh).forEach(function (element) {
            var s = sh[element];
            var rules = s['rules'] || s['cssRules']; // IE || others 
            for (var r = 0; r < rules.length; r++) {
                if (rules[r].selectorText == sText) {
                    res = rules[r]['style'];
                }
            }
        });
        return res;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */]) === "function" && _a || Object)
    ], ProjectItemPage.prototype, "slides", void 0);
    ProjectItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-project-item',template:/*ion-inline-start:"/Users/afpopov/smart/src/pages/project-item/project-item.html"*/'<!--\n  Generated template for the ProjectItemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n  <!-- The google charts is loading -->\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{project.project_name}}</ion-title>\n    <ion-buttons end>\n      <button ion-button  [disabled]="!isUserAdmin" color="primary" icon-only (click)="addProject()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n    <ion-slides style=\'width:100%; height:100%;\' class="gantt_slider" (ionSlideDidChange)="slideChanged()">\n        <ion-slide >\n            <div id="gantt_here" style=\'width:100%; height:100%;\'></div>\n            <div class="pointer" (pan)="pointerIn($event)" (mouseleave)="lockSwiper()" *ngIf="isSwiperShow"></div>\n\n        </ion-slide>\n        <ion-slide>\n          <h1>Slide 2</h1>\n          <div class="pointer" (pan)="pointerIn($event)" (mouseleave)="lockSwiper()" *ngIf="isSwiperShow"></div>\n\n        </ion-slide>\n        <ion-slide>\n          <h1>Slide 3</h1>\n          <div class="pointer" (pan)="pointerIn($event)" (mouseleave)="lockSwiper()" *ngIf="isSwiperShow"></div>\n        </ion-slide>\n      </ion-slides>\n\n</ion-content>\n\n \n'/*ion-inline-end:"/Users/afpopov/smart/src/pages/project-item/project-item.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__["a" /* ScreenOrientation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__["a" /* ScreenOrientation */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* MyApp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* MyApp */]) === "function" && _f || Object])
    ], ProjectItemPage);
    return ProjectItemPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=project-item.js.map

/***/ })

});
//# sourceMappingURL=12.js.map