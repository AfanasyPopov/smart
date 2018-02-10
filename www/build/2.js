webpackJsonp([2],{

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageModule", function() { return AdminPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_filter_filter__ = __webpack_require__(393);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin__["a" /* AdminPage */]),
            ],
        })
    ], AdminPageModule);
    return AdminPageModule;
}());

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_toast_toast_controller__ = __webpack_require__(126);
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
    function AdminPage(applicationRef, api, translateService, navCtrl, navParams, storage, toastCtrl) {
        var _this = this;
        this.applicationRef = applicationRef;
        this.api = api;
        this.translateService = translateService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.adminTitle = "";
        this.searchtxtUser = "";
        this.delButtonTitle = "";
        this.adminUserCardItems = { name: "Пользователи", count_active: 5, count: 5, list: [], dir: [] };
        this.adminDirCardItems = [{ name: "Справочникки", count_active: 5, count: 5, list: [], dir: [] }];
        this.ionChangeFlag = true;
        translateService.get(['ADMIN_TITLE', 'DELETE_BUTTON']).subscribe(function (values) {
            _this.adminTitle = values['ADMIN_TITLE'];
            _this.delButtonTitle = values['DELETE_BUTTON'];
        });
        this.storage.get('account').then(function (val) {
            _this.getUserList(val).subscribe(function (res) {
                _this.adminUserCardItems.list = res.users;
                _this.adminUserCardItems.dir = res.dir;
                _this.applicationRef.tick();
                console.log("adminPage.adminUserCardItems:");
                console.log(_this.adminUserCardItems);
            });
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
                        message: 'Обновление данных прошло: c ошибкой ' + JSON.stringify(error),
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
    AdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminPage');
    };
    AdminPage.prototype.getUserList = function (accountInfo) {
        return this.api.postData('getUserList', accountInfo);
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
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-admin',template:/*ion-inline-start:"/Users/afpopov/smart/src/pages/admin/admin.html"*/'<!--\n  Generated template for the AdminPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{adminTitle}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n<!-- <ion-card>\n        <ion-card-header >\n              <ion-row>\n                  <ion-col><h2>{{adminUserCardItems.name}}</h2></ion-col> \n              </ion-row> \n        </ion-card-header>  \n      -->\n        <ion-list >\n            <ion-item-group>\n                <ion-item-divider color="light">{{adminUserCardItems.name}}</ion-item-divider>\n                <button ion-item *ngFor="let item of adminUserCardItems.list | filter : query"  (click)=\'openItem(item)\' >\n                        <ion-label><h5>{{item.last_name+\' \'+item.username}}</h5></ion-label>\n                        <ion-label><p>{{item.role_in_project}}</p></ion-label>\n                        <ion-toggle item-end  [(ngModel)]=\'item.active\' (ionChange)=\'toggleUserActive($event, item)\' ></ion-toggle>\n                </button>\n          </ion-item-group>\n        </ion-list>  \n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col col-12 center>\n                <ion-note small>\n                    <ion-searchbar small [(ngModel)]="query" placeholder="поиск"></ion-searchbar>\n                  </ion-note>\n          </ion-col>   \n          <ion-col>\n            <button ion-button color="primary" clear  icon-start small>\n                <ion-icon name=\'person-add\'></ion-icon>\n                Добавить\n            </button>\n          </ion-col>\n          <ion-col>\n              <ion-chip #chip1>\n                <ion-avatar>\n                  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==">\n                </ion-avatar>\n                <ion-label>With Avatar</ion-label>\n                <button ion-button clear color="dark" (click)="deleteChip(chip1)">\n                  <ion-icon name="close-circle"></ion-icon>\n                </button>\n              </ion-chip>\n            </ion-col> \n         </ion-row>\n      </ion-grid>\n <!--  </ion-card>-->\n</ion-content>\n'/*ion-inline-end:"/Users/afpopov/smart/src/pages/admin/admin.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* Api */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* Api */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_toast_toast_controller__["a" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]) === "function" && _g || Object])
    ], AdminPage);
    return AdminPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 393:
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
//# sourceMappingURL=2.js.map