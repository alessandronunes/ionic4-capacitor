(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["browser-browser-module"],{

/***/ "./src/app/browser/browser.module.ts":
/*!*******************************************!*\
  !*** ./src/app/browser/browser.module.ts ***!
  \*******************************************/
/*! exports provided: BrowserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserPageModule", function() { return BrowserPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _browser_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./browser.page */ "./src/app/browser/browser.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _browser_page__WEBPACK_IMPORTED_MODULE_5__["BrowserPage"]
    }
];
var BrowserPageModule = /** @class */ (function () {
    function BrowserPageModule() {
    }
    BrowserPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_browser_page__WEBPACK_IMPORTED_MODULE_5__["BrowserPage"]]
        })
    ], BrowserPageModule);
    return BrowserPageModule;
}());



/***/ }),

/***/ "./src/app/browser/browser.page.html":
/*!*******************************************!*\
  !*** ./src/app/browser/browser.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Browser</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-button (click)=\"openBrowser()\">Browser Test</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/browser/browser.page.scss":
/*!*******************************************!*\
  !*** ./src/app/browser/browser.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/browser/browser.page.ts":
/*!*****************************************!*\
  !*** ./src/app/browser/browser.page.ts ***!
  \*****************************************/
/*! exports provided: BrowserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserPage", function() { return BrowserPage; });
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


var Browser = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__["Plugins"].Browser;
var BrowserPage = /** @class */ (function () {
    function BrowserPage() {
    }
    BrowserPage.prototype.ngOnInit = function () {
    };
    BrowserPage.prototype.openBrowser = function () {
        Browser.open({ url: 'http://capacitor.ionicframework.com/' });
    };
    BrowserPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-browser',
            template: __webpack_require__(/*! ./browser.page.html */ "./src/app/browser/browser.page.html"),
            styles: [__webpack_require__(/*! ./browser.page.scss */ "./src/app/browser/browser.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], BrowserPage);
    return BrowserPage;
}());



/***/ })

}]);
//# sourceMappingURL=browser-browser-module.js.map