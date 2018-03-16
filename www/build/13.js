webpackJsonp([13],{

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCreatePageModule", function() { return ProjectCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_create__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProjectCreatePageModule = (function () {
    function ProjectCreatePageModule() {
    }
    ProjectCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__project_create__["a" /* ProjectCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__project_create__["a" /* ProjectCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ProjectCreatePageModule);
    return ProjectCreatePageModule;
}());

//# sourceMappingURL=project-create.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(63);
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
 * Generated class for the ProjectCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@Injectable()
var ProjectCreatePage = (function () {
    function ProjectCreatePage(navCtrl, viewCtrl, formBuilder, camera, storage, api, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.storage = storage;
        this.api = api;
        this.navParams = navParams;
        this.dir = {};
        this.file_db_root = navParams.get('file_db_root');
        this.form = formBuilder.group({
            profilePic: [''],
            projectName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            projectDescription: [''],
            projectManager: [''],
            contragentOur: [''],
            contragentCostumer: ['']
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        this.storage.get('account').then(function (val) {
            _this.getUserList(val);
        });
    }
    ProjectCreatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProjectCreatePage');
    };
    ProjectCreatePage.prototype.getUserList = function (accountInfo) {
        var _this = this;
        return this.api.postData('getUserList', accountInfo).subscribe(function (res) {
            _this.dir.userList = res['users'];
            for (var i in _this.dir.userList) {
                _this.dir.userList[i].url = _this.file_db_root + _this.dir.userList[i].url;
            }
            console.log("ProjectCreatePage.getUserList:");
            console.log(_this.dir);
        });
    };
    ProjectCreatePage.prototype.getPicture = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this.camera.getPicture({
                destinationType: this.camera.DestinationType.DATA_URL,
                targetWidth: 96,
                targetHeight: 96
            }).then(function (data) {
                _this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
            }, function (err) {
                alert('Unable to take photo');
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    ProjectCreatePage.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            _this.form.patchValue({ 'profilePic': imageData });
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    ProjectCreatePage.prototype.getProfileImageStyle = function () {
        return 'url(' + this.form.controls['profilePic'].value + ')';
    };
    /**
     * The user cancelled, so we dismiss without sending data back.
     */
    ProjectCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * The user is done and wants to create the item, so return it
     * back to the presenter.
     */
    ProjectCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        this.viewCtrl.dismiss(this.form.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], ProjectCreatePage.prototype, "fileInput", void 0);
    ProjectCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-project-create',template:/*ion-inline-start:"/Users/afpopov/smart/src/pages/project-create/project-create.html"*/'<!--\n  Generated template for the ProjectCreatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>{{ \'PROJECT_CREATE_TITLE\' | translate }}</ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="cancel()">\n          <span color="primary" showWhen="ios">\n            {{ \'CANCEL_BUTTON\' | translate }}\n          </span>\n          <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-buttons end>\n        <button ion-button (click)="done()" [disabled]="!isReadyToSave" strong>\n          <span color="primary" showWhen="ios">\n            {{ \'DONE_BUTTON\' | translate }}\n          </span>\n          <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n    <form *ngIf="form" [formGroup]="form" (ngSubmit)="done()">\n      <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n      <div class="profile-image-wrapper" (click)="getPicture()">\n        <div class="profile-image-placeholder" *ngIf="!this.form.controls.profilePic.value">\n          <ion-icon name="add"></ion-icon>\n          <div>\n            {{ \'ITEM_CREATE_CHOOSE_IMAGE\' | translate }}\n          </div>\n        </div>\n        <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" *ngIf="this.form.controls.profilePic.value"></div>\n      </div>\n      <ion-list>\n        <ion-item>\n            <ion-label floating color="primary">{{ \'PROJECT_NAME_PLACEHOLDER\' | translate }}</ion-label>\n          <ion-input  type="text" formControlName="projectName"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating color="primary">{{ \'PROJECT_DESCRIPTION_PLACEHOLDER\' | translate }}</ion-label>\n          <ion-input  type="text"  formControlName="projectDescription"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating color="primary">{{ \'PROJECT_MANAGER_PLACEHOLDER\' | translate }}</ion-label>\n            <ion-select formControlName="projectManager" interface="popover" multiple="true" >\n              <ion-option *ngFor="let option of dir.userList" value="{{option.id}}">{{option.last_name+\' \'+option.username}}</ion-option>\n            </ion-select>          \n        </ion-item>\n        <ion-item>\n            <ion-label floating color="primary">{{ \'PROJECT_CONTR_OUR_PLACEHOLDER\' | translate }}</ion-label>\n            <ion-select formControlName="contragentOur" interface="popover" >\n              <ion-option *ngFor="let option of dir.contragentsList" value="{{option.id}}">{{option.last_name+\' \'+option.username}}</ion-option>\n            </ion-select>          \n        </ion-item>\n        <ion-item>\n            <ion-label floating color="primary">{{ \'PROJECT_CONTR_COSTUMER_PLACEHOLDER\' | translate }}</ion-label>\n            <ion-select formControlName="contragentCostumer" interface="popover" >\n              <ion-option *ngFor="let option of dir.contragentsList" value="{{option.id}}">{{option.last_name+\' \'+option.username}}</ion-option>\n            </ion-select>          \n        </ion-item>\n      </ion-list>\n    </form>\n  </ion-content>'/*ion-inline-end:"/Users/afpopov/smart/src/pages/project-create/project-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"]])
    ], ProjectCreatePage);
    return ProjectCreatePage;
}());

//# sourceMappingURL=project-create.js.map

/***/ })

});
//# sourceMappingURL=13.js.map