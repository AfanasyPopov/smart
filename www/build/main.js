webpackJsonp([20],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { bodyparser } from '../../../node_modules/body-parser'
/**
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = (function () {
    function Api(httpCli, toastCtrl) {
        this.httpCli = httpCli;
        this.toastCtrl = toastCtrl;
        this.url = 'http://185.63.32.215:8100';
        console.log('Hello RestServiceProvider Provider');
    }
    Api.prototype.postData = function (endpoint, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
        /*headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Accept");
        headers.append('Access-Control-Allow-Credentials', 'true');*/
        console.log(headers);
        return this.httpCli.post(this.url + '/' + endpoint, data, { headers: headers, params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpParams */]().set('id', '3'), reportProgress: true });
    };
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params.set(k, params[k]);
            }
        }
        return this.httpCli.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.addUser = function (endpoint, data) {
        this.httpCli.post(this.url + '/' + endpoint, data, { reportProgress: true })
            .subscribe(function (val) {
            console.log("POST call successful value returned in body", val);
        }, function (response) {
            console.log("POST call in error", response);
        }, function () {
            console.log("The POST observable is now completed.");
        });
    };
    Api.prototype.addUserLongRequest = function (endpoint, data) {
        var request = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["f" /* HttpRequest */]("POST", this.url + '/' + endpoint, data, { reportProgress: true });
        return this.httpCli.request(request);
    };
    Api.prototype.postLongRequest = function (endpoint, data) {
        var request = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["f" /* HttpRequest */]("POST", this.url + '/' + endpoint, data, { reportProgress: true });
        return this.httpCli.request(request);
    };
    Api.prototype.delUser = function (endpoint, data) {
        var request = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["f" /* HttpRequest */]("POST", this.url + '/' + endpoint, data, { reportProgress: true });
        return this.httpCli.request(request);
    };
    Api.prototype.passRep = function (endpoint, data) {
        var request = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["f" /* HttpRequest */]("POST", this.url + '/' + endpoint, data, { reportProgress: true });
        return this.httpCli.request(request);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        console.log('User.Login.post drove through...');
        return this.httpCli.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.httpCli.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.httpCli.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.httpCli.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 142;

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin/admin.module": [
		377,
		3
	],
	"../pages/cards/cards.module": [
		378,
		19
	],
	"../pages/content/content.module": [
		379,
		18
	],
	"../pages/item-create/item-create.module": [
		380,
		17
	],
	"../pages/item-detail/item-detail.module": [
		381,
		16
	],
	"../pages/list-master/list-master.module": [
		382,
		15
	],
	"../pages/login/login.module": [
		383,
		2
	],
	"../pages/menu/menu.module": [
		384,
		14
	],
	"../pages/pass-repair/pass-repair.module": [
		385,
		1
	],
	"../pages/project-create/project-create.module": [
		386,
		13
	],
	"../pages/project-item/project-item.module": [
		387,
		12
	],
	"../pages/projects/projects.module": [
		388,
		11
	],
	"../pages/search/search.module": [
		389,
		10
	],
	"../pages/settings/settings.module": [
		390,
		9
	],
	"../pages/signup/signup.module": [
		391,
		8
	],
	"../pages/tabs/tabs.module": [
		392,
		7
	],
	"../pages/tutorial/tutorial.module": [
		393,
		6
	],
	"../pages/user-item/user-item.module": [
		394,
		4
	],
	"../pages/users-list/users-list.module": [
		395,
		5
	],
	"../pages/welcome/welcome.module": [
		396,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 192;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Items = (function () {
    function Items() {
        this.items = [];
        this.defaultItem = {
            "name": "Burt Bear",
            "profilePic": "assets/img/speakers/bear.jpg",
            "about": "Burt is a Bear.",
        };
        var items = [
            {
                "name": "Burt Bear",
                "profilePic": "assets/img/speakers/bear.jpg",
                "about": "Burt is a Bear."
            },
            {
                "name": "Charlie Cheetah",
                "profilePic": "assets/img/speakers/cheetah.jpg",
                "about": "Charlie is a Cheetah."
            },
            {
                "name": "Donald Duck",
                "profilePic": "assets/img/speakers/duck.jpg",
                "about": "Donald is a Duck."
            },
            {
                "name": "Eva Eagle",
                "profilePic": "assets/img/speakers/eagle.jpg",
                "about": "Eva is an Eagle."
            },
            {
                "name": "Ellie Elephant",
                "profilePic": "assets/img/speakers/elephant.jpg",
                "about": "Ellie is an Elephant."
            },
            {
                "name": "Molly Mouse",
                "profilePic": "assets/img/speakers/mouse.jpg",
                "about": "Molly is a Mouse."
            },
            {
                "name": "Paul Puppy",
                "profilePic": "assets/img/speakers/puppy.jpg",
                "about": "Paul is a Puppy."
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */](item));
        }
    }
    Items.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    Items.prototype.add = function (item) {
        this.items.push(item);
    };
    Items.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    Items = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Items);
    return Items;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstRunPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MainPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Tab1Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Tab2Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Tab3Root; });
// The page the user lands on after opening the app and without a session
// for default is TutorialPage
// export const FirstRunPage = 'TutorialPage';
var FirstRunPage = 'WelcomePage';
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
var MainPage = 'TabsPage';
// The initial root pages for our tabs (remove if not using tabs)
var Tab1Root = 'ProjectsPage';
var Tab2Root = 'SearchPage';
var Tab3Root = 'SettingsPage';
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pages__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_providers__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_app_menu_controller__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng_socket_io__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(translateService, socket, storage, menuCtrl, translate, platform, settings, config, statusBar, splashScreen, toastCtrl) {
        var _this = this;
        this.translateService = translateService;
        this.socket = socket;
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.translate = translate;
        this.platform = platform;
        this.settings = settings;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.toastCtrl = toastCtrl;
        this.isPaneShouldShow = true;
        this.isGanttConfigured = false;
        this.isMobilePlatform = false;
        this.user = [];
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_pages__["a" /* FirstRunPage */];
        this.file_db_root = 'http://185.63.32.215:3000/Codiad/workspace/files_db/';
        this.pages = [
            { title: 'Поиск', component: 'SearchPage', icon: 'ios-search-outline' },
            // { title: 'Tutorial', component: 'TutorialPage', icon:'albums' },
            // { title: 'Welcome', component: 'WelcomePage' , icon:'albums'},
            { title: 'Проекты', component: 'TabsPage', icon: 'ios-albums-outline' },
            //{ title: 'Cards', component: 'CardsPage' , icon:'albums'},
            // { title: 'Content', component: 'ContentPage', icon:'albums' },
            //{ title: 'Авторизация', component: 'LoginPage' , icon:'ios-contact-outline'},
            //{ title: 'Signup', component: 'SignupPage' },
            //{ title: 'Master Detail', component: 'ListMasterPage' },
            //{ title: 'Menu', component: 'MenuPage' },
            { title: 'Настройки', component: 'SettingsPage', icon: 'ios-settings-outline' },
        ];
        this.authPage = [{ title: 'Авторизация', component: 'LoginPage', icon: 'ios-contact-outline' }];
        this.menuTitle = "";
        if (this.platform.is('ios') || this.platform.is('android')) {
            var viewport = document.querySelector("meta[name=viewport]");
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
        }
        this.isMobilePlatform = platform.is('mobile');
        if (this.isMobilePlatform) {
            this.isPaneShouldShow = false;
        }
        else {
            this.isPaneShouldShow = true;
        }
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.ionViewDidEnter();
            _this.addSocket(_this);
            // this.gantt_init_dp();
        });
        this.initTranslate();
        this.storage.set('connectionStatus', false);
        translateService.get(['MENU_TITLE']).subscribe(function (values) {
            _this.menuTitle = values['MENU_TITLE'];
        });
    }
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        if (browserLang) {
            if (browserLang === 'zh') {
                var browserCultureLang = this.translate.getBrowserCultureLang();
                if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
                    this.translate.use('zh-cmn-Hans');
                }
                else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
                    this.translate.use('zh-cmn-Hant');
                }
            }
            else {
                this.translate.use(this.translate.getBrowserLang());
            }
        }
        else {
            this.translate.use('ru'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
        console.log(page.component + "; " + page.title);
    };
    MyApp.prototype.doReload = function () {
        location.reload();
    };
    MyApp.prototype.menuOnOf = function (menu) {
        menu.enable(!menu.enabled);
        console.log('menuToggle()');
    };
    MyApp.prototype.menuToggle = function (menu) {
        //menu.close();
        this.isPaneShouldShow = !this.isPaneShouldShow;
        console.log('isPaneShouldShow: ', this.isPaneShouldShow);
    };
    MyApp.prototype.menuToggleWidth = function (menu) {
        var toast = this.toastCtrl.create({
            message: 'menu.enabled:' + menu.enabled,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
        console.log("menu.enabled:" + menu.enabled);
    };
    MyApp.prototype.fabClose = function (fab) {
        fab.close();
        console.log("fabClose()");
    };
    MyApp.prototype.fabCloseAfterTime = function (fab) {
        setTimeout(function () {
            fab.close();
            console.log("fabCloseAfterTime () ");
        }, 2500);
    };
    MyApp.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        console.log('ionViewDidEnter');
        this.menuCtrl.enable(false);
        console.log("App.Comp.user:");
        console.log(this.user);
        this.storage.get('');
    };
    MyApp.prototype.ionViewWillLeave = function () {
        console.log("Looks like I'm about to leave :(");
    };
    MyApp.prototype.addSocket = function (thisapp) {
        thisapp.socket.on('connected', function (msg) {
            thisapp.storage.set('connectionStatus', true).then(function (res) {
                thisapp.setBackgroundColor();
            });
        });
        thisapp.socket.on('disconnected', function (msg) {
            thisapp.storage.set('connectionStatus', false).then(function (res) {
                thisapp.setBackgroundColor();
            });
        });
        thisapp.socket.on('reconnect', function (msg) {
            thisapp.storage.set('connectionStatus', false).then(function (res) {
                thisapp.setBackgroundColor();
            });
        });
        thisapp.socket.on('connect_error', function (msg) {
            thisapp.storage.set('connectionStatus', false).then(function (res) {
                thisapp.setBackgroundColor();
            });
        });
    };
    MyApp.prototype.getSelector = function (sText) {
        var s = document.styleSheets[0];
        var rules = s['rules'] || s['cssRules']; // IE || others 
        for (var r = 0; r < rules.length; r++)
            if (rules[r].selectorText == sText)
                return rules[r]['style'];
        s = document.styleSheets[1];
        rules = s['rules'] || s['cssRules']; // IE || others 
        for (r = 0; r < rules.length; r++)
            if (rules[r].selectorText == sText)
                return rules[r]['style'];
        // }
        return null;
    };
    MyApp.prototype.setBackgroundColor = function () {
        var _this = this;
        this.storage.get('connectionStatus').then(function (res) {
            if (res) {
                _this.getSelector(".toolbar-background").backgroundColor = '#e4ffbf';
                _this.getSelector(".toolbar-background-md").backgroundColor = '#e4ffbf';
                _this.getSelector(".toolbar-background-ios").backgroundColor = '#e4ffbf';
            }
            else {
                _this.getSelector(".toolbar-background").backgroundColor = '#ffdeba';
                _this.getSelector(".toolbar-background-md").backgroundColor = '#ffdeba';
                _this.getSelector(".toolbar-background-ios").backgroundColor = '#ffdeba';
            }
        }, function (err) { });
    };
    MyApp.prototype.goHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_pages__["a" /* FirstRunPage */]);
    };
    MyApp.prototype.passRep = function () {
        //this.nav.push('PassRepairPage')
    };
    MyApp.prototype.getProfileImageStyle = function () {
        return 'url(' + this.file_db_root + this.user.img_id + '.' + this.user.extention + ')';
    };
    MyApp.prototype.gantt_clearAll = function () {
        gantt.clearAll();
    };
    MyApp.prototype.gantt_load = function () {
        //gantt.init('gantt_here');
        gantt.load("http://185.63.32.215:8100/data");
        //var dp = new gantt.dataProcessor("http://185.63.32.215:8100/data");
        //dp.init(gantt);
        //dp.setTransactionMode("REST");
    };
    MyApp.prototype.gantt_refresh = function () {
        gantt.refreshData();
    };
    MyApp.prototype.gantt_init_dp = function () {
        // var dp = new gantt.dataProcessor("http://185.63.32.215:8100/data");
        // dp.init(gantt);
        // dp.setTransactionMode("REST");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-menu',template:/*ion-inline-start:"/Users/afpopov/smart/src/pages/menu/menu.html"*/'<ion-split-pane when="lg" [when]="isPaneShouldShow" >\n  <ion-menu [content]="content" #menu1 id="menu1" (click)="fabClose(fab1)">\n    <ion-header >\n      <ion-toolbar>\n        <ion-title >{{menuTitle}}</ion-title>\n      </ion-toolbar>\n    </ion-header>\n  <ion-content>\n      <ion-list>\n          <button menuClose ion-item (click)="openPage(authPage[0])"> \n              <ion-thumbnail item-start >\n                  <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" ></div>\n              </ion-thumbnail>\n                <h2>{{user[\'last_name\']+\' \'+user[\'username\']}}</h2>\n              <p>{{user[\'email\']}}</p>\n            </button>\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" >\n            <ion-icon [name]="p.icon" item-start color="primary"></ion-icon>\n            <ion-label>{{p.title}}</ion-label>\n           <!-- <ion-note item-end>info</ion-note>\n            <ion-note item-end>info</ion-note>-->\n          </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-fab  right bottom  style="bottom: 10%;opacity: 0.7;" #fab1>\n    <button ion-fab mini color="primary" ><ion-icon  name="arrow-dropleft"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab (click)="goHome()"><ion-icon name="home" color="primary" ></ion-icon></button>\n      <button ion-fab (click)="passRep()"><a href="/#/pass-repair/afanasy.popov%40gmail.com">pass</a></button>\n      <button ion-fab (click)="menuOnOf(menu1)"><ion-icon name="ios-menu-outline"></ion-icon></button>\n      <button ion-fab  (click)="menuToggle(menu1)"><ion-icon name="ios-menu-outline" color="primary"></ion-icon></button>\n      <button ion-fab (click)="doReload()"><ion-icon name="ios-refresh-outline"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="top">\n      <button ion-fab (click)="gantt_clearAll()">clear</button>\n      <button ion-fab (click)="gantt_load()">load</button>\n      <button ion-fab (click)="gantt_refresh()">refresh</button>\n      <button ion-fab (click)="openSocial(\'googleplus\', fab2)"><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n  <ion-nav #content main [root]="rootPage" swipeBackEnabled="true" (click)="fabClose(fab1)" ></ion-nav>\n</ion-split-pane>'/*ion-inline-end:"/Users/afpopov/smart/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_9_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_app_menu_controller__["a" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_6__providers_providers__["c" /* Settings */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["Config"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ToastController"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(266);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mocks_providers_items__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_providers__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng_socket_io__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_screen_orientation__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_select_searchable__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ionic_select_searchable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var config = { url: 'http://185.63.32.215:8080', options: {} };
// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_11__providers_providers__["c" /* Settings */](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/content/content.module#ContentPageModule', name: 'ContentPage', segment: 'content', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-create/item-create.module#ItemCreatePageModule', name: 'ItemCreatePage', segment: 'item-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-master/list-master.module#ListMasterPageModule', name: 'ListMasterPage', segment: 'list-master', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pass-repair/pass-repair.module#PassRepairPageModule', name: 'PassRepairPage', segment: 'pass-repair/:str', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/project-create/project-create.module#ProjectCreatePageModule', name: 'ProjectCreatePage', segment: 'project-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/project-item/project-item.module#ProjectItemPageModule', name: 'ProjectItemPage', segment: 'project-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/projects/projects.module#ProjectsPageModule', name: 'ProjectsPage', segment: 'projects', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-item/user-item.module#UserItemPageModule', name: 'UserItemPage', segment: 'user-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/users-list/users-list.module#UsersListPageModule', name: 'UsersListPage', segment: 'users-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13_ng_socket_io__["SocketIoModule"].forRoot(config),
                __WEBPACK_IMPORTED_MODULE_15_ionic_select_searchable__["SelectSearchableModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                __WEBPACK_IMPORTED_MODULE_11__providers_providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_10__mocks_providers_items__["a" /* Items */],
                __WEBPACK_IMPORTED_MODULE_11__providers_providers__["d" /* User */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                { provide: __WEBPACK_IMPORTED_MODULE_11__providers_providers__["c" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]] },
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["IonicErrorHandler"] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = (function () {
    function Item(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(63);
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
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(128);
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
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var User = (function () {
    function User(api) {
        this.api = api;
        this.res = null;
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    User.prototype.login = function (accountInfo) {
        var seq = this.api.postData('login', accountInfo);
        /*let seq = this.api.post('login', accountInfo).share();*/
        if (seq) {
            this._loggedIn(seq);
        }
        else {
        }
        return seq;
    };
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    User.prototype.signup = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('signup', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this._user = null;
    };
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp.user;
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 358:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(337);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user__["a"]; });





//# sourceMappingURL=providers.js.map

/***/ })

},[252]);
//# sourceMappingURL=main.js.map