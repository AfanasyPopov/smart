webpackJsonp([4],{

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserItemPageModule", function() { return UserItemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_item__ = __webpack_require__(406);
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
                __WEBPACK_IMPORTED_MODULE_2__user_item__["a" /* UserItemPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_item__["a" /* UserItemPage */]),
            ],
        })
    ], UserItemPageModule);
    return UserItemPageModule;
}());

//# sourceMappingURL=user-item.module.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
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
 * Generated class for the UserItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserItemPage = (function () {
    function UserItemPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = navParams.get('item');
        this.dir = navParams.get('dir');
    }
    UserItemPage.prototype.ionViewDidLoad = function () {
        this.setValuesInSelectItems(this.dir, this.item);
    };
    UserItemPage.prototype.ionViewWillLeave = function () {
        this.setLabelsInSelectedItems(this.dir, this.item);
    };
    UserItemPage.prototype.setValuesInSelectItems = function (dir, item) {
        Object.keys(dir).forEach(function (dir_item, i, arr) {
            item[dir_item] = dir[dir_item].findIndex(function (elem) { return elem.label == item[dir_item]; });
        });
    };
    UserItemPage.prototype.setLabelsInSelectedItems = function (dir, item) {
        Object.keys(dir).forEach(function (dir_item, i, arr) {
            item[dir_item] = dir[dir_item][dir[dir_item].findIndex(function (elem) { return elem.value == item[dir_item]; })].label;
        });
    };
    UserItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-item',template:/*ion-inline-start:"/Users/afpopov/smart/src/pages/user-item/user-item.html"*/'<!--\n  Generated template for the UserItemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{item.last_name+\' \'+item.username}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n <!-- <ion-card>\n    <ion-card-header no-padding>\n      <ion-row style="align-items: center;">\n      <ion-col>\n        {{item.last_name+\' \'+item.username}}\n      </ion-col>\n      <ion-col>\n          <ion-item>\n              <ion-note item-end>Активный</ion-note><ion-toggle [(ngModel)]="item.active" checked="{{item.active}}"></ion-toggle>\n          </ion-item>\n      </ion-col>      \n      </ion-row>\n    </ion-card-header>\n  -->\n    <ion-list  > \n        <ion-item-group no-padding>\n            <ion-item-divider >\n                <ion-row style="align-items: center;">\n                    <ion-col>\n                      {{item.last_name+\' \'+item.username}}\n                    </ion-col>\n                    <ion-col>\n                        <ion-item style="background-color: transparent;">\n                            <ion-note item-end small>Активный</ion-note><ion-toggle [(ngModel)]="item.active" checked="{{item.active}}"></ion-toggle>\n                        </ion-item>\n                    </ion-col>      \n                </ion-row>              \n            </ion-item-divider>\n      <ion-item>\n        <button>      \n              <ion-thumbnail item-start >\n          <img id="userImage" src="http://185.63.32.215:3000/Codiad/workspace/smart/www/assets/img/ian-avatar.png">\n        </ion-thumbnail>\n        </button>\n      </ion-item>\n      <ion-item disabled="true">\n          <ion-label stacked color="primary" >Имя</ion-label>\n            <ion-input disabled="{{!item.active}}"  type="text" [(ngModel)]="item.username"></ion-input>\n      </ion-item>  \n      <ion-item>\n          <ion-label stacked color="primary" >Фамилия:</ion-label>\n          <ion-input  disabled="{{!item.active}}" type="text" [(ngModel)]="item.last_name"></ion-input>\n      </ion-item>  \n      <ion-item>\n          <ion-label stacked color="primary" >e-mail:</ion-label>\n          <ion-input  disabled="{{!item.active}}" type="email" [(ngModel)]="item.email"></ion-input>\n      </ion-item>  \n      <ion-item>\n          <ion-label stacked color="primary" >Пароль:</ion-label>\n          <ion-input disabled="{{!item.active}}"  type="password" style="font-size:10px" [(ngModel)]="item.user_pass"></ion-input>\n      </ion-item>  \n      <ion-item>\n          <ion-label stacked color="primary" >Организация:</ion-label>\n          <ion-input  disabled="{{!item.active}}" type="text" [(ngModel)]="item.organization"></ion-input>\n      </ion-item>  \n      <ion-item>\n          <ion-label stacked color="primary"  >Описание краткое:</ion-label>\n          <ion-input  disabled="{{!item.active}}" type="text-aria" [(ngModel)]="item.description"></ion-input>\n      </ion-item>  \n      <ion-item>\n          <ion-label stacked color="primary">Роль в проекте:</ion-label>\n          <ion-select disabled="{{!item.active}}" [(ngModel)]="item.role_in_project" interface="popover" >\n            <ion-option *ngFor="let option of dir.role_in_project" value="{{option.value}}">{{option.label}}</ion-option>\n          </ion-select>\n      </ion-item> \n      <ion-item>\n          <ion-label stacked color="primary">Статус в проекте:</ion-label>\n          <ion-select disabled="{{!item.active}}" [(ngModel)]="item.status" interface="popover" >\n            <ion-option *ngFor="let option of dir.status" value="{{option.value}}">{{option.label}}</ion-option>\n          </ion-select>\n      </ion-item> \n      <ion-item>\n          <ion-label stacked color="primary" >Флаг-контрагент:</ion-label>\n          <ion-toggle disabled="{{!item.active}}"  [(ngModel)]="item.contragent_flag"></ion-toggle>\n      </ion-item>  \n      <ion-item>\n          <ion-label stacked color="primary" >Флаг-группа:</ion-label>\n          <ion-toggle  disabled="{{!item.active}}" [(ngModel)]="item.group_flag"></ion-toggle>\n      </ion-item>  \n      <ion-item>\n          <ion-label stacked color="primary" >Флаг-пользователь:</ion-label>\n          <ion-toggle  disabled="{{!item.active}}" [(ngModel)]="item.user_flag"></ion-toggle>\n      </ion-item>  \n      </ion-item-group>\n      <button ion-button block [disabled]="!item.active">Принять</button>\n    </ion-list>\n <!-- </ion-card>-->\n</ion-content>\n'/*ion-inline-end:"/Users/afpopov/smart/src/pages/user-item/user-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], UserItemPage);
    return UserItemPage;
}());

//# sourceMappingURL=user-item.js.map

/***/ })

});
//# sourceMappingURL=4.js.map