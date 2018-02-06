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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(62);
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
    function AdminPage(api, translateService, navCtrl, navParams, storage) {
        var _this = this;
        this.api = api;
        this.translateService = translateService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.adminTitle = "";
        this.searchtxtUser = "";
        this.delButtonTitle = "";
        this.adminUserCardItems = { name: "Пользователи", count_active: 5, count: 5, list: [], dir: [] };
        this.adminDirCardItems = [{ name: "Справочникки", count_active: 5, count: 5, list: [], dir: [] }];
        translateService.get(['ADMIN_TITLE', 'DELETE_BUTTON']).subscribe(function (values) {
            _this.adminTitle = values['ADMIN_TITLE'];
            _this.delButtonTitle = values['DELETE_BUTTON'];
        });
        this.storage.get('account').then(function (val) {
            _this.getUserList(val).subscribe(function (res) {
                _this.adminUserCardItems.list = res.users;
                _this.adminUserCardItems.dir = res.dir;
                console.log("adminPage.adminUserCardItems:");
                console.log(_this.adminUserCardItems);
            });
        });
    }
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
            selector: 'page-admin',template:/*ion-inline-start:"/Users/afpopov/smart/src/pages/admin/admin.html"*/'<!--\n  Generated template for the AdminPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{adminTitle}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n<!-- <ion-card>\n        <ion-card-header >\n              <ion-row>\n                  <ion-col><h2>{{adminUserCardItems.name}}</h2></ion-col> \n              </ion-row> \n        </ion-card-header>  \n      -->\n        <ion-list >\n            <ion-item-group>\n                <ion-item-divider color="light">{{adminUserCardItems.name}}</ion-item-divider>\n                <button ion-item *ngFor="let item of adminUserCardItems.list | filter : query"  (click)=\'openItem(item)\' >\n                        <ion-label><h5>{{item.last_name+\' \'+item.username}}</h5></ion-label>\n                        <ion-label><p>{{item.role_in_project}}</p></ion-label>\n                        <ion-toggle item-end checked="{{item.active}}"></ion-toggle>\n                </button>\n          </ion-item-group>\n        </ion-list>  \n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col col-12 center>\n                <ion-note small>\n                    <ion-searchbar small [(ngModel)]="query" placeholder="поиск"></ion-searchbar>\n                  </ion-note>\n          </ion-col>   \n          <ion-col>\n            <button ion-button color="primary" clear  icon-start small>\n                <ion-icon name=\'person-add\'></ion-icon>\n                Добавить\n            </button>\n          </ion-col>\n          <ion-col>\n              <ion-chip #chip1>\n                <ion-avatar>\n                  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==">\n                </ion-avatar>\n                <ion-label>With Avatar</ion-label>\n                <button ion-button clear color="dark" (click)="deleteChip(chip1)">\n                  <ion-icon name="close-circle"></ion-icon>\n                </button>\n              </ion-chip>\n            </ion-col> \n         </ion-row>\n      </ion-grid>\n <!--  </ion-card>-->\n</ion-content>\n'/*ion-inline-end:"/Users/afpopov/smart/src/pages/admin/admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], AdminPage);
    return AdminPage;
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