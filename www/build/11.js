webpackJsonp([11],{

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPageModule", function() { return ProjectsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects__ = __webpack_require__(411);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__projects__["a" /* ProjectsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ProjectsPageModule);
    return ProjectsPageModule;
}());

//# sourceMappingURL=projects.module.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_toast_toast_controller__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(250);
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
    function ProjectsPage(screenOrientation, platform, alertCtrl, toastCtrl, navCtrl, navParams, modalCtrl, myApp, api) {
        this.screenOrientation = screenOrientation;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.myApp = myApp;
        this.api = api;
        this.projectsList = [];
        this.isHaveAddPermission = false;
        this.screenOrientation = screenOrientation;
        if (this.myApp.user.role_name == 'root') {
            this.isHaveAddPermission = true;
        }
    }
    ProjectsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProjectsPage');
        this.getProjectsList();
        this.setOrientations();
        this.onOrientationChenge();
    };
    ProjectsPage.prototype.openProject = function (project) {
        this.navCtrl.push('ProjectItemPage', { project: project });
    };
    ProjectsPage.prototype.addProject = function () {
        var _this = this;
        var addModal = this.modalCtrl.create('ProjectCreatePage', { file_db_root: this.myApp.file_db_root });
        addModal.onDidDismiss(function (formData) {
            formData.account_key = _this.myApp.user.uuid_key;
            formData.projectManager = formData.projectManager.map(Number);
            _this.api.postLongRequest('addProject', formData)
                .subscribe(function (event) {
                if (event.type === __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpEventType */].DownloadProgress) {
                    console.log("Download progress event", event);
                }
                if (event.type === __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                    console.log("Upload progress event", event);
                }
                if (event.type === __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpEventType */].Response) {
                    console.log("Результат создания Project:", JSON.stringify(event.body));
                    var mess = JSON.stringify(event.body[0].mess);
                    var toast = _this.toastCtrl.create({
                        message: mess,
                        duration: 3000,
                        position: 'top',
                        cssClass: 'success',
                        showCloseButton: true,
                        closeButtonText: 'OK'
                    });
                    toast.present();
                    _this.getProjectsList();
                }
            });
        });
        addModal.present();
    };
    ProjectsPage.prototype.getProjectsList = function () {
        var _this = this;
        var data = {
            account_key: this.myApp.user.uuid_key
        };
        this.api.postLongRequest('getProjectsList', data)
            .subscribe(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpEventType */].DownloadProgress) {
                console.log("Download progress event", event);
            }
            if (event.type === __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                console.log("Upload progress event", event);
            }
            if (event.type === __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpEventType */].Response) {
                _this.projectsList = event.body['projectsList'];
                _this.onOrientationChenge();
            }
        });
    };
    ProjectsPage.prototype.mute = function (item) { };
    ProjectsPage.prototype.more = function (item) { };
    ProjectsPage.prototype.delete = function (projectId) {
        var _this = this;
        var idToIntex = null;
        this.projectsList.forEach(function (val, index, arr) {
            if (val.id == projectId) {
                idToIntex = index;
            }
        });
        var confirmStatus = false;
        var confirm = this.alertCtrl.create({
            title: 'Удалить проект:',
            message: this.projectsList[idToIntex].project_name,
            buttons: [{
                    text: 'Отмена',
                    handler: function () {
                        console.log('Disagree clicked');
                        //confirm.dismiss();
                        //confirmStatus =false;
                    }
                },
                {
                    text: 'Согласен',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.deleteProject(projectId);
                    }
                }
            ]
        });
        confirm.present();
    };
    ProjectsPage.prototype.deleteProject = function (item) {
        var _this = this;
        var data = {
            account_key: this.myApp.user.uuid_key,
            projectId: item
        };
        this.api.postLongRequest('delProject', data)
            .subscribe(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpEventType */].DownloadProgress) {
                console.log("Download progress event", event);
            }
            if (event.type === __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                console.log("Upload progress event", event);
            }
            if (event.type === __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpEventType */].Response) {
                //this.projectsList=event.body['projectsList']
                _this.getProjectsList();
            }
        });
    };
    ProjectsPage.prototype.setOrientations = function () {
        var _this = this;
        this.screenOrientation.onChange().subscribe(function () {
            //alert('Orientation chenged')  
            _this.onOrientationChenge();
        });
    };
    ProjectsPage.prototype.onOrientationChenge = function () {
        //alert(this.screenOrientation.type);
        if (this.screenOrientation.type === 'landscape-primary') {
            this.projectsList.forEach(function (element, index, arr) {
                arr[index].show = true;
            });
        }
        else {
            this.projectsList.forEach(function (element, index, arr) {
                arr[index].show = false;
            });
        }
    };
    ProjectsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-projects',template:/*ion-inline-start:"/Users/afpopov/smart/src/pages/projects/projects.html"*/'<!--\n  Generated template for the ProjectsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'PROJECTS_TITLE\' | translate }}</ion-title>\n    \n    <ion-buttons end>\n      <button ion-button [disabled]="!isHaveAddPermission" color="primary" icon-only (click)="addProject()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding >\n  <ion-list >\n    <ion-row no-padding ><ion-col  *ngFor="let project of projectsList" no-padding >\n    <ion-card style="min-width: 300px"  no-padding >\n      <ion-item-sliding #item{{project.id}}>\n      <ion-item no-padding>\n        <ion-avatar item-start>\n          <!--<img [src]="item.user.avatar">-->\n        </ion-avatar>\n        <h2 (click)=\'openProject(project)\'>{{project.project_name}}</h2>\n        <ion-note>{{project.description}}</ion-note>\n        <button item-end ion-button color="primary" clear (click)=\'project.show=!project.show\'>\n          <ion-icon name="arrow-down"></ion-icon>\n        </button>\n      </ion-item>\n\n      <ion-item-options>\n          <button ion-button color="secondary" (click)="more(project.id)">\n            <ion-icon name="menu"></ion-icon>\n            More\n          </button>\n          <button ion-button color="dark" (click)="mute(project.id)">\n            <ion-icon name="volume-off"></ion-icon>\n            Mute\n          </button>\n          <button ion-button color="danger" (click)="delete(project.id)">\n            <ion-icon name="trash"></ion-icon>\n            Delete\n          </button>\n        </ion-item-options>\n  \n        <ion-item-options side="left" (ionSwipe)="archive(item)">\n          <button ion-button color="primary" expandable (click)="archive(item)">\n            <ion-icon name="archive" class="expand-hide"></ion-icon>\n            <div class="expand-hide">Archive</div>\n            <ion-spinner id="archive-spinner"></ion-spinner>\n          </button>\n        </ion-item-options>\n  \n    </ion-item-sliding>\n\n      <!--<img [src]="item.image">-->\n  \n      <ion-card-content *ngIf=\'project.show\'>\n          <ion-note (click)=\'openProject(project)\'>описание</ion-note>\n\n        </ion-card-content>\n  \n      <ion-row *ngIf=\'project.show\'>\n        <ion-col>\n          <button ion-button color="primary" clear small icon-start >\n              <ion-icon name=\'thumbs-up\'></ion-icon>\n              12 Likes\n            </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button color="primary" clear small icon-start>\n              <ion-icon name=\'text\'></ion-icon>\n              4 Comments\n            </button>\n        </ion-col>\n        <ion-col style="min-width: 150px;display: flex !important;align-items: center;"  center text-center>\n          <ion-note>{{project.manager}}</ion-note>\n        </ion-col>\n      </ion-row>\n      </ion-card>\n    </ion-col></ion-row>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/afpopov/smart/src/pages/projects/projects.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_toast_toast_controller__["a" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* Api */]])
    ], ProjectsPage);
    return ProjectsPage;
}());

//# sourceMappingURL=projects.js.map

/***/ })

});
//# sourceMappingURL=11.js.map