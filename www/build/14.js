webpackJsonp([14],{

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu__ = __webpack_require__(406);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MenuPageModule = (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__menu__["a" /* MenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__menu__["a" /* MenuPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__menu__["a" /* MenuPage */]
            ]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuPage = (function () {
    function MenuPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.rootPage = 'ContentPage';
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Sign in', component: 'LoginPage' },
            { title: 'Signup', component: 'SignupPage' }
        ];
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('Hello MenuPage Page');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-menu',template:/*ion-inline-start:"/Users/afpopov/smart/src/pages/menu/menu.html"*/'<ion-split-pane when="lg" [when]="isPaneShouldShow" >\n  <ion-menu [content]="content" #menu1 id="menu1" (click)="fabClose(fab1)">\n    <ion-header >\n      <ion-toolbar>\n        <ion-title >{{menuTitle}}</ion-title>\n      </ion-toolbar>\n    </ion-header>\n  <ion-content>\n      <ion-list>\n          <button menuClose ion-item (click)="openPage(authPage[0])"> \n              <ion-thumbnail item-start >\n                  <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" ></div>\n              </ion-thumbnail>\n                <h2>{{user[\'last_name\']+\' \'+user[\'username\']}}</h2>\n              <p>{{user[\'email\']}}</p>\n            </button>\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" >\n            <ion-icon [name]="p.icon" item-start color="primary"></ion-icon>\n            <ion-label>{{p.title}}</ion-label>\n           <!-- <ion-note item-end>info</ion-note>\n            <ion-note item-end>info</ion-note>-->\n          </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-fab  right bottom  style="bottom: 10%;opacity: 0.7;" #fab1>\n    <button ion-fab mini color="primary" ><ion-icon  name="arrow-dropleft"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab (click)="goHome()"><ion-icon name="home" color="primary" ></ion-icon></button>\n      <button ion-fab (click)="passRep()"><a href="/#/pass-repair/afanasy.popov%40gmail.com">pass</a></button>\n      <button ion-fab (click)="menuOnOf(menu1)"><ion-icon name="ios-menu-outline"></ion-icon></button>\n      <button ion-fab  (click)="menuToggle(menu1)"><ion-icon name="ios-menu-outline" color="primary"></ion-icon></button>\n      <button ion-fab (click)="doReload()"><ion-icon name="ios-refresh-outline"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="top">\n      <button ion-fab (click)="gantt_clearAll()">clear</button>\n      <button ion-fab (click)="gantt_load()">load</button>\n      <button ion-fab (click)="gantt_refresh()">refresh</button>\n      <button ion-fab (click)="openSocial(\'googleplus\', fab2)"><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n  <ion-nav #content main [root]="rootPage" swipeBackEnabled="true" (click)="fabClose(fab1)" ></ion-nav>\n</ion-split-pane>'/*ion-inline-end:"/Users/afpopov/smart/src/pages/menu/menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ })

});
//# sourceMappingURL=14.js.map