webpackJsonp([3],{

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageModule", function() { return AdminPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_filter_filter__ = __webpack_require__(401);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AdminPageModule = (function () {
    function AdminPageModule() {
    }
    AdminPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_3__pipes_filter_filter__["a" /* FilterPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin__["a" /* AdminPage */]),
            ],
        })
    ], AdminPageModule);
    return AdminPageModule;
}());

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_toast_toast_controller__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_component__ = __webpack_require__(248);
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
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminPage = (function () {
    function AdminPage(alertCtrl, modalCtrl, applicationRef, api, translateService, navCtrl, navParams, storage, toastCtrl, myApp) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.applicationRef = applicationRef;
        this.api = api;
        this.translateService = translateService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.myApp = myApp;
        this.adminTitle = "";
        this.searchtxtUser = "";
        this.delButtonTitle = "";
        this.showConfirmForUserDelTitle = '';
        this.showConfirmForUserDelSubTitle = '';
        this.adminUserCardItems = {
            name: "Пользователи",
            count_active: 5,
            count: 5,
            list: [],
            dir: []
        };
        this.adminDirCardItems = [{
                name: "Справочникки",
                count_active: 5,
                count: 5,
                list: [],
                dir: []
            }];
        this.ionChangeFlag = true;
        this.toastLongRequest = this.toastCtrl.create({
            message: 'Данные загружаются... ',
            duration: 0,
            position: 'top',
            cssClass: 'success',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        translateService.get(['ADMIN_TITLE', 'DELETE_BUTTON', 'SHOW_CONFIRM_FOR_USER_DEL_TITLE']).subscribe(function (values) {
            _this.adminTitle = values['ADMIN_TITLE'];
            _this.delButtonTitle = values['DELETE_BUTTON'];
            _this.showConfirmForUserDelTitle = values['SHOW_CONFIRM_FOR_USER_DEL_TITLE'];
        });
        this.storage.get('account').then(function (val) {
            _this.getUserList(val);
        });
    }
    AdminPage.prototype.toggleUserActive = function (event, item) {
        var _this = this;
        this.storage.get('account').then(function (accountInfo) {
            accountInfo.item = {
                uuid_key: item.uuid_key,
                active: item.active
            };
            _this.api.postData('updateUser', accountInfo)
                .subscribe(function (res) {
                if (res == 'УСПЕШНО') {
                    var toast = _this.toastCtrl.create({
                        message: 'Обновление данных прошло: ' + JSON.stringify(res),
                        duration: 3000,
                        position: 'bottom',
                        cssClass: 'success',
                        showCloseButton: true,
                        closeButtonText: 'OK'
                    });
                    toast.present();
                }
            }, function (error) {
                if (_this.ionChangeFlag) {
                    _this.ionChangeFlag = false;
                    event.disabled = true;
                    setTimeout(function () {
                        _this.ionChangeFlag = true;
                        event.disabled = false;
                    }, 1000);
                    setTimeout(function () {
                        item.active = !item.active;
                    }, 900);
                    var toast = _this.toastCtrl.create({
                        message: 'Обновление данных прошло: c ошибкой . Требуется восстановление связи. ',
                        duration: 3000,
                        position: 'bottom',
                        cssClass: 'error',
                        showCloseButton: true,
                        closeButtonText: 'OK'
                    });
                    toast.present();
                }
            });
        });
    };
    /**
     * Prompt the user to add a new item. This shows our ItemCreatePage in a
     * modal and then adds the new item to our data source if the user created one.
     */
    AdminPage.prototype.addUser = function () {
        var _this = this;
        var addModal = this.modalCtrl.create('ItemCreatePage');
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.storage.get('account').then(function (accountInfo) {
                    var nameArr = item.name.split(' ');
                    if (nameArr[1]) {
                        item.last_name = nameArr[0];
                        item.name = nameArr[1];
                    }
                    else {
                        item.last_name = nameArr[0];
                        item.name = ' ';
                    }
                    accountInfo.item = item;
                    _this.toastLongRequest.present();
                    _this.api.addUserLongRequest('addUser', accountInfo)
                        .subscribe(function (event) {
                        if (event.type === __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpEventType */].DownloadProgress) {
                            console.log("Download progress event", event);
                        }
                        if (event.type === __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                            console.log("Upload progress event", event);
                            _this.toastLongRequest.data.message = ('Данные загружаются... ' + event.loaded + '/' + event.total);
                        }
                        if (event.type === __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpEventType */].Response) {
                            console.log("Данные загружены УСПЕШНО..............", JSON.stringify(event.body));
                            console.log("Пользователь создан..............");
                            _this.toastLongRequest.dismiss();
                            var toastLongRequest = _this.toastCtrl.create({
                                message: 'Данные загружены УСПЕШНО. \n Пользователь содзан.',
                                duration: 3000,
                                position: 'top',
                                cssClass: 'success',
                                showCloseButton: true,
                                closeButtonText: 'OK'
                            });
                            toastLongRequest.present();
                            _this.storage.get('account').then(function (val) {
                                _this.getUserList(val);
                            });
                        }
                    });
                });
            }
        });
        addModal.present();
    };
    AdminPage.prototype.delUserConfirmation = function (item) {
        this.showConfirmForDelUser(this.showConfirmForUserDelTitle, item);
    };
    AdminPage.prototype.delUser = function (item) {
        var _this = this;
        this.storage.get('account').then(function (accountInfo) {
            accountInfo.item = item;
            var toastLongRequest = _this.toastCtrl.create({
                message: 'Запрос на УДАЛЕНИЕ отправлен. ',
                duration: 3000,
                position: 'top',
                cssClass: 'success',
                showCloseButton: true,
                closeButtonText: 'OK'
            });
            toastLongRequest.present();
            _this.api.delUser('delUser', accountInfo)
                .subscribe(function (event) {
                if (event.type === __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpEventType */].DownloadProgress) {
                    console.log("Download progress event", event);
                }
                if (event.type === __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                    console.log("Upload progress event", event);
                    //toastLongRequest.data.message = JSON.stringify(event);
                }
                if (event.type === __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpEventType */].Response) {
                    console.log("Пользователь УДАЛЕН...", JSON.stringify(event.body));
                    toastLongRequest.setMessage('УДАЛЕН Пользователь: ' + event.body[0].last_name + ' ' + event.body[0].username); //+JSON.stringify(event.body));
                    _this.storage.get('account').then(function (val) {
                        _this.getUserList(val);
                    });
                }
            });
        });
    };
    AdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminPage');
    };
    AdminPage.prototype.getUserList = function (accountInfo) {
        var _this = this;
        return this.api.postData('getUserList', accountInfo).subscribe(function (res) {
            _this.adminUserCardItems.list = res['users'];
            _this.adminUserCardItems.dir = res['dir'];
            // this.applicationRef.tick(); 
            for (var i in _this.adminUserCardItems.list) {
                _this.adminUserCardItems.list[i].url = _this.myApp.file_db_root + _this.adminUserCardItems.list[i].url;
            }
            console.log("adminPage.adminUserCardItems:");
            console.log(_this.adminUserCardItems);
        });
    };
    AdminPage.prototype.openItem = function (item) {
        this.navCtrl.push('UserItemPage', {
            item: item,
            dir: this.adminUserCardItems.dir
        });
    };
    AdminPage.prototype.deleteChip = function (chip) {
        chip.remove();
    };
    AdminPage.prototype.showConfirmForDelUser = function (title, item) {
        var _this = this;
        var confirmStatus = false;
        var confirm = this.alertCtrl.create({
            title: title,
            message: item.last_name + " " + item.username,
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
                        _this.delUser(item);
                    }
                }
            ]
        });
        confirm.present();
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-admin',template:/*ion-inline-start:"/Users/afpopov/smart/src/pages/admin/admin.html"*/'<!--\n  Generated template for the AdminPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{adminTitle}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n<!-- <ion-card>\n        <ion-card-header >\n              <ion-row>\n                  <ion-col><h2>{{adminUserCardItems.name}}</h2></ion-col> \n              </ion-row> \n        </ion-card-header>  \n      -->\n        <ion-list >\n            <ion-item-group>\n                <ion-item-divider color="light">\n                  <ion-label item-start>{{adminUserCardItems.name}}</ion-label>\n                    <ion-buttons item-end>\n                        <button ion-button clear small icon-only (click)="addUser()">\n                          <ion-icon name="add"></ion-icon>\n                        </button>\n                      </ion-buttons>                  \n                </ion-item-divider>\n                <ion-item-sliding  *ngFor="let item of adminUserCardItems.list | filter : query" >\n                <button ion-item (click)=\'openItem(item)\' >\n                        <ion-label><h5>{{item.last_name+\' \'+item.username}}</h5></ion-label>\n                        <ion-label><p>{{item.role_in_project}}</p></ion-label>\n                        <ion-toggle item-end  [(ngModel)]=\'item.active\' (ionChange)=\'toggleUserActive($event, item)\' ></ion-toggle>\n                </button>\n                <ion-item-options>\n                    <button ion-button color="danger" (click)="delUserConfirmation(item)">\n                      {{delButtonTitle}}\n                    </button>\n                  </ion-item-options>\n        \n              </ion-item-sliding>\n          </ion-item-group>\n        </ion-list>  \n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col col-12 center>\n                <ion-note small>\n                    <ion-searchbar small [(ngModel)]="query" placeholder="поиск"></ion-searchbar>\n                  </ion-note>\n          </ion-col>   \n          <ion-col>\n            <button ion-button color="primary" clear  icon-start small (click)="addUser()">\n                <ion-icon name=\'person-add\'></ion-icon>\n                Добавить\n            </button>\n          </ion-col>\n          <ion-col>\n              <ion-chip #chip1>\n                <ion-avatar>\n                  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==">\n                </ion-avatar>\n                <ion-label>With Avatar</ion-label>\n                <button ion-button clear color="dark" (click)="deleteChip(chip1)">\n                  <ion-icon name="close-circle"></ion-icon>\n                </button>\n              </ion-chip>\n            </ion-col> \n         </ion-row>\n      </ion-grid>\n <!--  </ion-card>-->\n</ion-content>\n'/*ion-inline-end:"/Users/afpopov/smart/src/pages/admin/admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_toast_toast_controller__["a" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__app_app_component__["a" /* MyApp */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the FilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var FilterPipe = (function () {
    function FilterPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    FilterPipe.prototype.transform = function (items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        return items.filter(function (item) { return JSON.stringify(item).toLowerCase().indexOf(terms.toLowerCase()) !== -1; });
        //return items.filter( it => {
        //return (it.username+it.last_name).toLowerCase().includes(terms); // only filter country name
    };
    ;
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filter',
            pure: true
        })
    ], FilterPipe);
    return FilterPipe;
}());

//# sourceMappingURL=filter.js.map

/***/ })

});
//# sourceMappingURL=3.js.map