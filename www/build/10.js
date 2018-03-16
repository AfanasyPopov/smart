webpackJsonp([10],{

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_select_searchable__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ionic_select_searchable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SearchPageModule = (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4_ionic_select_searchable__["SelectSearchableModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */]
            ]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Port = (function () {
    function Port() {
    }
    return Port;
}());
var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, items, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = items;
        this.viewCtrl = viewCtrl;
        this.currentItems = [];
        this.json = [{
                id: '1001',
                tree: {
                    "value": "row A",
                    "image": "folder.gif"
                },
                title: "A Time to Kill",
                name: "John Grisham",
                price: "12.99",
                status: "1",
                date: "05/01/1998",
                rows: [{
                        id: 'sub_1001',
                        tree: "subrowA",
                        title: "Blood and Smoke",
                        name: "Stephen King",
                        price: "0",
                        status: "1",
                        date: "01/01/2000"
                    }, {
                        id: 'sub_1002',
                        tree: "subrowB",
                        title: "Blood and Smoke",
                        name: "Stephen King",
                        price: "0",
                        status: "1",
                        date: "01/01/2000"
                    }]
            }, {
                id: '1002',
                tree: "row B",
                title: "The Green Mile",
                name: "Stephen King",
                price: "11.10",
                status: "1",
                date: "01/01/1992"
            }];
        this.ports = [
            { id: 1, name: 'Tokai' },
            { id: 2, name: 'Vladivostok' },
            { id: 3, name: 'Navlakhi' }
        ];
    }
    SearchPage.prototype.ionViewWillEnter = function () {
        this.refreshSelectedTasks();
    };
    SearchPage.prototype.portChange = function (event) {
        console.log('port:', event.value);
    };
    SearchPage.prototype.refreshSelectedTasks = function () {
        var count = gantt.getTaskCount();
        console.log('getTaskCount:' + count);
        this.currentItems = [];
        for (var index = 0; index < count; index++) {
            if (gantt.getTaskByIndex(index).checked) {
                this.currentItems.push(gantt.getTaskByIndex(index));
            }
        }
    };
    /**
   * Perform a service for the proper items.
   */
    SearchPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (!val || !val.trim()) {
            this.currentItems = [];
            return;
        }
        this.currentItems = this.items.query({
            name: val
        });
    };
    /**
     * Navigate to the detail page for this item.
     */
    SearchPage.prototype.openItem = function (item) {
        this.navCtrl.push('ItemDetailPage', {
            item: item
        });
    };
    SearchPage.prototype.deleteChip = function (chip) {
        var id = Number(chip.id.slice(4));
        gantt.getTask(id).checked = false;
        //chip.remove();
        this.refreshSelectedTasks();
        gantt.refreshData();
    };
    SearchPage.prototype.doOnLoad = function () {
        this.myTreeGrid = new dhtmlXGridObject('treegridbox');
        this.myTreeGrid.setImagePath("../../../codebase/imgs/");
        this.myTreeGrid.setHeader("Tree,Plain Text,Long Text,Color,Checkbox");
        this.myTreeGrid.setColumnIds("tree,title,name,price,date");
        this.myTreeGrid.setInitWidths("150,100,100,100,100");
        this.myTreeGrid.setColAlign("left,left,left,center,center");
        this.myTreeGrid.setColTypes("tree,ed,txt,ch,ch");
        this.myTreeGrid.setColSorting("str,str,str,na,str");
        this.myTreeGrid.enableAutoWidth(true);
        this.myTreeGrid.init();
        this.myTreeGrid.load(this.json, "js");
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/afpopov/smart/src/pages/search/search.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'SEARCH_TITLE\' | translate }}</ion-title>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n <!-- <ion-searchbar (ionInput)="getItems($event)" placeholder="{{ \'SEARCH_PLACEHOLDER\' | translate }}"></ion-searchbar>-->\n <ion-card style="max-width:600px">\n   <ion-card-header>\n     Проект/задача:\n   </ion-card-header>\n   <ion-card-content>\n  <ion-list>\n    <!--\n      <button ion-item (click)="openItem(item)" *ngFor="let item of currentItems">\n      <h2>{{item.text}}</h2>\n      <ion-note item-end *ngIf="item.descr">{{item.desrc}}</ion-note>\n    </button>\n  -->\n    <ion-chip #chip  id="chip{{item.id}}" *ngFor="let item of currentItems">\n        <ion-avatar>\n          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==">\n        </ion-avatar>\n        <ion-label>{{item.text}}</ion-label>\n        <button ion-button clear color="primary" (click)="deleteChip(chip)">\n          <ion-icon name="close-circle"></ion-icon>\n        </button>\n    </ion-chip>\n\n  </ion-list>\n  <ion-card-header>\n      Источники:\n  </ion-card-header>\n  <ion-list>\n      <!--\n        <button ion-item (click)="openItem(item)" *ngFor="let item of currentItems">\n        <h2>{{item.text}}</h2>\n        <ion-note item-end *ngIf="item.descr">{{item.desrc}}</ion-note>\n      </button>\n    -->\n    <div id="treegridbox" style="width:550px;height:250px;background-color:white;"></div>  \n    </ion-list>\n    <ion-item>\n        <select-searchable\n          title="Port"\n          [(ngModel)]="port"\n          [items]="ports"\n          itemValueField="id"\n          itemTextField="name"\n          [canSearch]="true"\n          (onChange)="portChange($event)">\n        </select-searchable>\n    </ion-item>\n\n</ion-card-content>\n<button ion-button  >Деньги</button>\n<button ion-button   color="secondary">Материалы</button>\n<button ion-button   color="orange">Акты</button>\n\n</ion-card>\n</ion-content>'/*ion-inline-end:"/Users/afpopov/smart/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* Items */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=10.js.map