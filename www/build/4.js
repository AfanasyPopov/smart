webpackJsonp([4],{

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserItemPageModule", function() { return UserItemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_clipboard__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_item__ = __webpack_require__(416);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UserItemPageModule = (function () {
    function UserItemPageModule() {
    }
    UserItemPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__user_item__["a" /* UserItemPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__user_item__["a" /* UserItemPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__user_item__["a" /* UserItemPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_clipboard__["a" /* Clipboard */]]
        })
    ], UserItemPageModule);
    return UserItemPageModule;
}());

//# sourceMappingURL=user-item.module.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Clipboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(47);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * @name Clipboard
 * @description
 * Clipboard management plugin for Cordova that supports iOS, Android, and Windows Phone 8.
 *
 *
 * @usage
 * ```typescript
 * import { Clipboard } from '@ionic-native/clipboard';
 *
 * constructor(private clipboard: Clipboard) { }
 *
 * ...
 *
 *
 * this.clipboard.copy('Hello world');
 *
 * this.clipboard.paste().then(
 *    (resolve: string) => {
 *       alert(resolve);
 *     },
 *     (reject: string) => {
 *       alert('Error: ' + reject);
 *     }
 *   );
 * ```
 */
var Clipboard = (function (_super) {
    __extends(Clipboard, _super);
    function Clipboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Copies the given text
     * @param {string} text Text that gets copied on the system clipboard
     * @returns {Promise<any>} Returns a promise after the text has been copied
     */
    Clipboard.prototype.copy = function (text) { return; };
    /**
     * Pastes the text stored in clipboard
     * @returns {Promise<any>} Returns a promise after the text has been pasted
     */
    Clipboard.prototype.paste = function () { return; };
    Clipboard.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    Clipboard.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], Clipboard.prototype, "copy", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Clipboard.prototype, "paste", null);
    Clipboard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
            pluginName: 'Clipboard',
            plugin: 'cordova-clipboard',
            pluginRef: 'cordova.plugins.clipboard',
            repo: 'https://github.com/ihadeed/cordova-clipboard',
            platforms: ['Android', 'iOS', 'Windows Phone 8']
        })
    ], Clipboard);
    return Clipboard;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_toast_toast_controller__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_component__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_clipboard__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages__ = __webpack_require__(247);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var UserItemPage = (function () {
    function UserItemPage(clipboard, camera, navCtrl, navParams, storage, toastCtrl, api, formBuilder, myApp, platform) {
        this.clipboard = clipboard;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.api = api;
        this.formBuilder = formBuilder;
        this.myApp = myApp;
        this.platform = platform;
        this.toastLongRequest = this.toastCtrl.create({
            message: 'Данные загружаются... ',
            duration: 0,
            position: 'top',
            cssClass: 'success',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        this.file_db_root = myApp.file_db_root;
        this.form = formBuilder.group({
            profilePic: [''],
            name: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required],
            about: ['']
        });
        this.item = this.navParams.get('item');
        this.dir = navParams.get('dir');
        if (!this.item) {
            this.item = {
                active: true,
                username: '',
                last_name: '',
                email: '',
                uuid_key: '',
                organization: 0,
                description: '',
                role_in_project: 0,
                status: 0,
                contragent_flag: true,
                group_flag: true,
                user_flag: true,
                isEmpty: true
            };
            this.dir = {
                role_in_project: [{ value: 0, label: '' }, { value: 0, label: '' }],
                status: [{ value: 0, label: '' }, { value: 0, label: '' }],
                organization: [{ value: 0, label: '' }, { value: 0, label: '' }]
            };
        }
        this.dummy_pass = 'xxxxxxxxxxxxxx';
        console.log('UserItemPage constructor itme:', this.item);
        console.log('UserItemPage constructor dir:', this.dir);
    }
    UserItemPage.prototype.updateUser = function (item) {
        var _this = this;
        this.storage.get('account').then(function (accountInfo) {
            accountInfo['item'] = JSON.parse(JSON.stringify(item));
            delete accountInfo.item.url;
            delete accountInfo.item.img_id;
            if (_this.form.value.profilePic) {
                accountInfo['profilePic'] = _this.form.value.profilePic;
            }
            _this.toastLongRequest.present();
            _this.api.addUserLongRequest('updateUser', accountInfo)
                .subscribe(function (event) {
                if (event.type === __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["c" /* HttpEventType */].DownloadProgress) {
                    console.log("Download progress event", event);
                }
                if (event.type === __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                    console.log("Upload progress event", event);
                    _this.toastLongRequest.data.message = ('Данные загружаются... ' + event.loaded + '/' + event.total);
                }
                if (event.type === __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["c" /* HttpEventType */].Response) {
                    console.log("Данные загружены УСПЕШНО..............", JSON.stringify(event.body));
                    _this.toastLongRequest.dismiss();
                    var toastLongRequest = _this.toastCtrl.create({
                        message: 'Данные загружены УСПЕШНО.',
                        duration: 3000,
                        position: 'top',
                        cssClass: 'success',
                        showCloseButton: true,
                        closeButtonText: 'OK'
                    });
                    toastLongRequest.present();
                    if (_this.form.value.profilePic) {
                        _this.item['url'] = _this.file_db_root + event.body[0].img_id + '.' + event.body[0].ext;
                    }
                }
            });
        });
        this.navCtrl.pop();
    };
    UserItemPage.prototype.getResetLink = function (uuid_key) {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'Запрос на получение ссылки отправлен. ',
            duration: 1000,
            position: 'top',
            cssClass: 'success',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        toast.present();
        var itemForReq = { "uuid_key": uuid_key };
        this.api.passRep('passRepGetLink', itemForReq)
            .subscribe(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["c" /* HttpEventType */].DownloadProgress) {
                console.log("Download progress event", event);
            }
            if (event.type === __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                console.log("Upload progress event", event);
            }
            if (event.type === __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["c" /* HttpEventType */].Response) {
                console.log("Ссылка для сброса пароля пользователя получена:", JSON.stringify(event.body));
                var toast_1 = _this.toastCtrl.create({
                    message: 'Ссылка для сброса пароля пользователя получена.',
                    duration: 0,
                    position: 'top',
                    cssClass: 'success',
                    showCloseButton: true,
                    closeButtonText: 'OK'
                });
                toast_1.present();
                var emailTo = event.body[0].email;
                var emailCC = 'afanasy.popov@gmail.com';
                var emailSub = 'Для восстановление пароля (перейдите по ссылке)';
                var emailBody = 'Ваш пароль был сброшен Администратором.\n Для восстановления пароля перейдите по <a href="http://185.63.32.215:8100/#/pass-repair/' + event.body[0].uuid_key + event.body[0].user_pass + '">ссылке</a> .';
                var mailToString = "mailto:" + emailTo + '?cc=' + emailCC + '&subject=' + emailSub + '&body=' + emailBody;
                window.open(mailToString);
                console.log('mailToString: ', mailToString);
            }
        });
    };
    UserItemPage.prototype.getPicture = function () {
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
    UserItemPage.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            _this.form.patchValue({ 'profilePic': imageData });
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    UserItemPage.prototype.getProfileImageStyle = function () {
        return 'url(' + this.form.controls['profilePic'].value + ')';
    };
    UserItemPage.prototype.getProfileImagePlaceholderStyle = function () {
        return 'url(' + this.item['url'] + ')';
    };
    UserItemPage.prototype.ionViewDidLoad = function () {
        if (this.item['isEmpty']) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages__["a" /* FirstRunPage */]);
        }
        this.setValuesInSelectItems(this.dir, this.item);
    };
    UserItemPage.prototype.ionViewWillEnter = function () {
        console.log('UserItemPage ionViewWillEnter');
    };
    UserItemPage.prototype.ionViewDidLeave = function () {
        this.setLabelsInSelectedItems(this.dir, this.item);
    };
    UserItemPage.prototype.setValuesInSelectItems = function (dir, item) {
        Object.keys(dir).forEach(function (dir_item, i, arr) {
            dir[dir_item].findIndex(function (elem) {
                if (elem.label == item[dir_item]) {
                    item[dir_item] = elem.value;
                    return elem.value;
                }
            });
        });
    };
    UserItemPage.prototype.setLabelsInSelectedItems = function (dir, item) {
        Object.keys(dir).forEach(function (dir_item, i, arr) {
            item[dir_item] = dir[dir_item][dir[dir_item].findIndex(function (elem) { return elem.value == item[dir_item]; })].label;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], UserItemPage.prototype, "fileInput", void 0);
    UserItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-item',template:/*ion-inline-start:"/Users/afpopov/smart/src/pages/user-item/user-item.html"*/'<!--\n  Generated template for the UserItemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{item.last_name+\' \'+item.username}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>  \n     <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n    <div class="profile-image-wrapper" (click)="getPicture()" >\n      <div class="profile-image-placeholder" [style.backgroundImage]="getProfileImagePlaceholderStyle()" *ngIf="!this.form.controls.profilePic.value">\n       <!-- <ion-icon name="add"></ion-icon>\n        <div>\n          {{ \'ITEM_CREATE_CHOOSE_IMAGE\' | translate }}\n        </div>-->\n      </div>\n      <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" *ngIf="this.form.controls.profilePic.value"></div>\n    </div>\n\n    <ion-list> \n      <ion-item-group>\n                <ion-item-divider no-padding>\n                    <ion-row style="align-items: center;">\n                        <ion-col>\n                          {{item.last_name+\' \'+item.username}}\n                        </ion-col>\n                        <ion-col>\n                            <ion-item style="background-color: transparent;">\n                                <ion-note item-end small>Активный</ion-note><ion-toggle [(ngModel)]="item.active" checked="{{item.active}}"></ion-toggle>\n                            </ion-item>\n                        </ion-col>      \n                    </ion-row>              \n                </ion-item-divider>\n  \n          <ion-item>\n              <ion-label stacked color="primary">Имя</ion-label>\n                <ion-input [disabled]="!item.active"  type="text" [(ngModel)]="item.username"></ion-input>\n          </ion-item>  \n          <ion-item>\n              <ion-label stacked color="primary">Фамилия:</ion-label>\n              <ion-input  [disabled]="!item.active" type="text" [(ngModel)]="item.last_name"></ion-input>\n          </ion-item>  \n          <ion-item>\n              <ion-label stacked color="primary">e-mail:</ion-label>\n              <ion-input  [disabled]="!item.active" type="email" [(ngModel)]="item.email"></ion-input>\n          </ion-item>  \n          <ion-item>\n              <ion-label stacked color="primary" >Пароль:</ion-label>\n              <ion-input [disabled]="true"  type="password" style="font-size:10px" [(ngModel)]="dummy_pass"></ion-input>\n              <button ion-button item-end color="light" [disabled]="!item.active" (click)="getResetLink(item.uuid_key)">reset</button>\n          </ion-item>  \n          <ion-item>\n              <ion-label stacked color="primary" >Организация:</ion-label>\n              <ion-select [disabled]="!item.active" [(ngModel)]="item.organization" interface="popover" >\n                    <ion-option *ngFor="let option of dir.organization" value="{{option.value}}">{{option.label}}</ion-option>\n              </ion-select>                \n          </ion-item>  \n          <ion-item>\n              <ion-label stacked color="primary"  >Описание краткое:</ion-label>\n              <ion-input  [disabled]="!item.active" type="text-aria" [(ngModel)]="item.description"></ion-input>\n          </ion-item>  \n          <ion-item>\n              <ion-label stacked color="primary">Роль в проекте:</ion-label>\n              <ion-select [disabled]="!item.active" [(ngModel)]="item.role_in_project" interface="popover" >\n                <ion-option *ngFor="let option of dir.role_in_project" value="{{option.value}}">{{option.label}}</ion-option>\n              </ion-select>\n          </ion-item> \n          <ion-item>\n              <ion-label stacked color="primary">Статус в проекте:</ion-label>\n              <ion-select [disabled]="!item.active" [(ngModel)]="item.status" interface="popover" >\n                <ion-option *ngFor="let option of dir.status" value="{{option.value}}">{{option.label}}</ion-option>\n              </ion-select>\n          </ion-item> \n          <ion-item>\n              <ion-label stacked color="primary" >Флаг-контрагент:</ion-label>\n              <ion-toggle [disabled]="!item.active"  [(ngModel)]="item.contragent_flag"></ion-toggle>\n          </ion-item>  \n          <ion-item>\n              <ion-label stacked color="primary" >Флаг-группа:</ion-label>\n              <ion-toggle [disabled]="!item.active" [(ngModel)]="item.group_flag"></ion-toggle>\n          </ion-item>  \n          <ion-item>\n              <ion-label stacked color="primary" >Флаг-пользователь:</ion-label>\n              <ion-toggle  [disabled]="!item.active" [(ngModel)]="item.user_flag"></ion-toggle>\n          </ion-item> \n      </ion-item-group>\n      <button ion-button block [disabled]="!item.active" (click)="updateUser(item)" >Принять</button>\n\n    </ion-list>\n</ion-content>\n<div >\n</div>\n'/*ion-inline-end:"/Users/afpopov/smart/src/pages/user-item/user-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_toast_toast_controller__["a" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7__app_app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], UserItemPage);
    return UserItemPage;
}());

//# sourceMappingURL=user-item.js.map

/***/ })

});
//# sourceMappingURL=4.js.map