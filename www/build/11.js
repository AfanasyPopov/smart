webpackJsonp([11],{

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPageModule", function() { return ProjectsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProjectsPageModule = (function () {
    function ProjectsPageModule() {
    }
    ProjectsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__projects__["a" /* ProjectsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__projects__["a" /* ProjectsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ProjectsPageModule);
    return ProjectsPageModule;
}());

//# sourceMappingURL=projects.module.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(248);
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
 * Generated class for the ProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProjectsPage = (function () {
    function ProjectsPage(navCtrl, navParams, modalCtrl, myApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.myApp = myApp;
        this.projectsList = [
            { projectId: 0, projectName: 'gthdsq', projectOwner: 'Попов Афанасий', projectDescription: 'Descrption Descrption Descrption Descrption', show: false },
            { projectId: 1, projectName: 'gthdsq', projectOwner: 'Попов Афанасий', projectDescription: 'Descrption Descrption Descrption Descrption', show: false },
            { projectId: 2, projectName: 'gthdsq', projectOwner: 'Попов Афанасий', projectDescription: 'Descrption Descrption Descrption Descrption', show: false },
            { projectId: 3, projectName: 'gthdsq', projectOwner: 'Попов Афанасий', projectDescription: 'Descrption Descrption Descrption Descrption', show: false },
            { projectId: 4, projectName: 'gthdsq', projectOwner: 'Попов Афанасий', projectDescription: 'Descrption Descrption Descrption Descrption', show: false },
            { projectId: 5, projectName: 'gthdsq', projectOwner: 'Попов Афанасий', projectDescription: 'Descrption Descrption Descrption Descrption', show: false },
            { projectId: 6, projectName: 'gthdsq', projectOwner: 'Попов Афанасий', projectDescription: 'Descrption Descrption Descrption Descrption', show: false },
            { projectId: 7, projectName: 'gthdsq', projectOwner: 'Попов Афанасий', projectDescription: 'Descrption Descrption Descrption Descrption', show: false },
            { projectId: 8, projectName: 'gthdsq', projectOwner: 'Попов Афанасий', projectDescription: 'Descrption Descrption Descrption Descrption', show: false }
        ];
    }
    ProjectsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProjectsPage');
    };
    ProjectsPage.prototype.openProject = function (projectId) {
        this.navCtrl.push('CardsPage');
    };
    ProjectsPage.prototype.addProject = function () {
        var addModal = this.modalCtrl.create('ProjectCreatePage', { file_db_root: this.myApp.file_db_root });
        addModal.onDidDismiss(function (item) {
        });
        addModal.present();
    };
    ProjectsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-projects',template:/*ion-inline-start:"/Users/afpopov/smart/src/pages/projects/projects.html"*/'<!--\n  Generated template for the ProjectsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'PROJECTS_TITLE\' | translate }}</ion-title>\n    \n    <ion-buttons end>\n      <button ion-button icon-only (click)="addProject()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n  <ion-list>\n    <ion-card *ngFor="let project of projectsList"  >\n      <ion-item no-padding>\n        <ion-avatar item-start>\n          <!--<img [src]="item.user.avatar">-->\n        </ion-avatar>\n        <h2 (click)=\'openProject(project.projectId)\'>{{project.projectName}}</h2>\n        <p (click)=\'openProject(project.projectId)\'>{{project.projectOwner}}</p>\n        <button item-end ion-button color="primary" clear (click)=\'project.show=!project.show\'>\n          <ion-icon name="arrow-down"></ion-icon>\n        </button>\n      </ion-item>\n  \n      <!--<img [src]="item.image">-->\n  \n      <ion-card-content *ngIf=\'project.show\'>\n        <p (click)=\'openProject(project.projectId)\'>{{project.projectDescription}}</p>\n      </ion-card-content>\n  \n      <ion-row *ngIf=\'project.show\'>\n        <ion-col>\n          <button ion-button color="primary" clear small icon-start >\n              <ion-icon name=\'thumbs-up\'></ion-icon>\n              12 Likes\n            </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button color="primary" clear small icon-start>\n              <ion-icon name=\'text\'></ion-icon>\n              4 Comments\n            </button>\n        </ion-col>\n        <ion-col center text-center>\n          <ion-note>\n            11h ago\n          </ion-note>\n        </ion-col>\n      </ion-row>\n      </ion-card>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/afpopov/smart/src/pages/projects/projects.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */]])
    ], ProjectsPage);
    return ProjectsPage;
}());

//# sourceMappingURL=projects.js.map

/***/ })

});
//# sourceMappingURL=11.js.map