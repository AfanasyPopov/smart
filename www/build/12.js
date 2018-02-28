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
        this.isMobilePlatform = platform.is('mobile');
        if (this.myApp.user.status == 3) {
            this.isUserAdmin = true;
        }
    }
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
    ProjectItemPage.prototype.swipeByElementOutHover = function () {
        console.log('swipeByElementOutHover');
        //this.slides.lockSwipes(true)
    };
    ProjectItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProjectItemPage');
        this.project = this.navParams.data.project;
        this.lockSwiper();
        if (this.isMobilePlatform) {
            this.gant_config_mobile();
        }
        else {
            this.gant_config_desctop();
        }
        gantt.config.auto_scheduling = true;
        gantt.config.auto_scheduling_strict = true;
        gantt.attachEvent("onBeforeAutoSchedule", function () {
            gantt.message("Recalculating project schedule...");
            return true;
        });
        gantt.attachEvent("onAfterTaskAutoSchedule", function (task, new_date, constraint, predecessor) {
            gantt.message({
                text: "<b>" + task.text + "</b> has been rescheduled to " + gantt.templates.task_date(new_date) + " due to <b>" + predecessor.text + "</b> constraint",
                expire: 4000
            });
        });
        gantt.init("gantt_here");
        gantt.load("http://185.63.32.215:8100/data");
    };
    ProjectItemPage.prototype.ionViewWillLeave = function () {
        console.log("Looks like I'm about to leave :(");
    };
    ProjectItemPage.prototype.ionViewDidLeave = function () {
        gantt.clearAll();
    };
    ProjectItemPage.prototype.gant_config_desctop = function () {
        this.isSwiperShow = false;
        gantt.config.xml_date = "%Y-%m-%d %H:%i:%s";
        gantt.config.auto_scheduling = true;
        gantt.templates.task_text = function (start, end, task) {
            return task.id + ":<b>" + task.text + "</b>";
        };
        this.setColumsByUserStatus();
        this.setHandlingEvents();
    };
    ProjectItemPage.prototype.gant_config_mobile = function () {
        this.isSwiperShow = true;
        gantt.config.grid_resize = true;
        gantt.config.xml_date = "%Y-%m-%d %H:%i:%s";
        gantt.config.auto_scheduling = true;
        gantt.templates.task_text = function (start, end, task) {
            return task.id + ":<b>" + task.text + "</b>";
        };
        this.setColumsByUserStatus();
        this.setHandlingEvents();
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
    ProjectItemPage.prototype.setHandlingEvents = function () {
        gantt.attachEvent("onTaskClick", function (id, e) {
            alert("You've just clicked an item with id=" + id);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */]) === "function" && _a || Object)
    ], ProjectItemPage.prototype, "slides", void 0);
    ProjectItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-project-item',template:/*ion-inline-start:"/Users/afpopov/smart/src/pages/project-item/project-item.html"*/'<!--\n  Generated template for the ProjectItemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n  <!-- The google charts is loading -->\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{project.project_name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n    <ion-slides style=\'width:100%; height:100%;\' class="gantt_slider" (ionSlideDidChange)="slideChanged()">\n        <ion-slide >\n            <div id="gantt_here" style=\'width:100%; height:100%;\'></div>\n            <div class="pointer" (pan)="pointerIn($event)" (mouseleave)="lockSwiper()" *ngIf="isSwiperShow"></div>\n\n        </ion-slide>\n        <ion-slide>\n          <h1>Slide 2</h1>\n          <div class="pointer" (pan)="pointerIn($event)" (mouseleave)="lockSwiper()" *ngIf="isSwiperShow"></div>\n\n        </ion-slide>\n        <ion-slide>\n          <h1>Slide 3</h1>\n          <div class="pointer" (pan)="pointerIn($event)" (mouseleave)="lockSwiper()" *ngIf="isSwiperShow"></div>\n        </ion-slide>\n      </ion-slides>\n\n</ion-content>\n\n \n'/*ion-inline-end:"/Users/afpopov/smart/src/pages/project-item/project-item.html"*/,
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