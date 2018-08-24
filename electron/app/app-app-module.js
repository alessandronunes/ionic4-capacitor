(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-app-module"],{

/***/ "./src/app/app/app.module.ts":
/*!***********************************!*\
  !*** ./src/app/app/app.module.ts ***!
  \***********************************/
/*! exports provided: AppPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPageModule", function() { return AppPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _app_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.page */ "./src/app/app/app.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _app_page__WEBPACK_IMPORTED_MODULE_5__["AppPage"]
    }
];
var AppPageModule = /** @class */ (function () {
    function AppPageModule() {
    }
    AppPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_app_page__WEBPACK_IMPORTED_MODULE_5__["AppPage"]]
        })
    ], AppPageModule);
    return AppPageModule;
}());



/***/ }),

/***/ "./src/app/app/app.page.html":
/*!***********************************!*\
  !*** ./src/app/app/app.page.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n        App\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  App does not have web implementation.\n</ion-content>\n"

/***/ }),

/***/ "./src/app/app/app.page.scss":
/*!***********************************!*\
  !*** ./src/app/app/app.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app/app.page.ts":
/*!*********************************!*\
  !*** ./src/app/app/app.page.ts ***!
  \*********************************/
/*! exports provided: AppPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPage", function() { return AppPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var App = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__["Plugins"].App;
var AppPage = /** @class */ (function () {
    function AppPage() {
    }
    AppPage.prototype.ngOnInit = function () {
        App.addListener('appStateChange', function (state) {
            // state.isActive contains the active state
            console.log('App state changed. Is active?', state.isActive);
        });
        // Listen for serious plugin errors
        // App.addListener('pluginError', (info: any) => {
        //   console.error('There was a serious error with a plugin', info);
        // });
        console.log(App);
        // let ret = await App.canOpenUrl({ url: 'com.getcapacitor.myapp' });
        // console.log('Can open url: ', ret.value);
        // let ret2 = await App.openUrl({ url: 'com.getcapacitor.myapp://page?id=ionicframework' });
        // console.log('Open url response: ', ret2);
        // let ret3 = await App.getLaunchUrl();
        // if(ret3 && ret3.url) {
        //   console.log('App opened with URL: ' + ret3.url);
        // }
        // console.log('Launch url: ', ret3);
        // App.addListener('appUrlOpen', (data: any) => {
        //   console.log('App opened with URL: ' +  data.url);
        // });
        // App.addListener('appRestoredResult', (data: any) => {
        //   console.log('Restored state:', data);
        // });
    };
    AppPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app',
            template: __webpack_require__(/*! ./app.page.html */ "./src/app/app/app.page.html"),
            styles: [__webpack_require__(/*! ./app.page.scss */ "./src/app/app/app.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], AppPage);
    return AppPage;
}());



/***/ })

}]);
//# sourceMappingURL=app-app-module.js.map