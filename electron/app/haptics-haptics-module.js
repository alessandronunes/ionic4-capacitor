(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["haptics-haptics-module"],{

/***/ "./src/app/haptics/haptics.module.ts":
/*!*******************************************!*\
  !*** ./src/app/haptics/haptics.module.ts ***!
  \*******************************************/
/*! exports provided: HapticsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HapticsPageModule", function() { return HapticsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _haptics_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./haptics.page */ "./src/app/haptics/haptics.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _haptics_page__WEBPACK_IMPORTED_MODULE_5__["HapticsPage"]
    }
];
var HapticsPageModule = /** @class */ (function () {
    function HapticsPageModule() {
    }
    HapticsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_haptics_page__WEBPACK_IMPORTED_MODULE_5__["HapticsPage"]]
        })
    ], HapticsPageModule);
    return HapticsPageModule;
}());



/***/ }),

/***/ "./src/app/haptics/haptics.page.html":
/*!*******************************************!*\
  !*** ./src/app/haptics/haptics.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Haptics</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <p>Haptics does not have web implementation.</p>\n  <ion-button (click)=\"hapticsImpact()\">hapticsImpact</ion-button>\n  <ion-button (click)=\"hapticsImpactMedium()\">hapticsImpactMedium</ion-button>\n  <ion-button (click)=\"hapticsImpactLight()\">hapticsImpactLight</ion-button>\n  <ion-button (click)=\"hapticsVibrate()\">hapticsVibrate</ion-button>\n  <ion-button (click)=\"hapticsSelectionStart()\">hapticsSelectionStart</ion-button>\n  <ion-button (click)=\"hapticsSelectionChanged()\">hapticsSelectionChanged</ion-button>\n  <ion-button (click)=\"hapticsSelectionEnd()\">hapticsSelectionEnd</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/haptics/haptics.page.scss":
/*!*******************************************!*\
  !*** ./src/app/haptics/haptics.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/haptics/haptics.page.ts":
/*!*****************************************!*\
  !*** ./src/app/haptics/haptics.page.ts ***!
  \*****************************************/
/*! exports provided: HapticsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HapticsPage", function() { return HapticsPage; });
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


var Haptics = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__["Plugins"].Haptics;
var HapticsPage = /** @class */ (function () {
    function HapticsPage() {
    }
    HapticsPage.prototype.ngOnInit = function () {
    };
    HapticsPage.prototype.hapticsImpact = function (style) {
        if (style === void 0) { style = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__["HapticsImpactStyle"].Heavy; }
        Haptics.impact({
            style: style
        });
    };
    HapticsPage.prototype.hapticsImpactMedium = function (style) {
        if (style === void 0) { style = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__["HapticsImpactStyle"].Medium; }
        Haptics.impact({
            style: style
        });
    };
    HapticsPage.prototype.hapticsImpactLight = function (style) {
        if (style === void 0) { style = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__["HapticsImpactStyle"].Light; }
        Haptics.impact({
            style: style
        });
    };
    HapticsPage.prototype.hapticsVibrate = function () {
        Haptics.vibrate();
    };
    HapticsPage.prototype.hapticsSelectionStart = function () {
        Haptics.selectionStart();
    };
    HapticsPage.prototype.hapticsSelectionChanged = function () {
        Haptics.selectionChanged();
    };
    HapticsPage.prototype.hapticsSelectionEnd = function () {
        Haptics.selectionEnd();
    };
    HapticsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-haptics',
            template: __webpack_require__(/*! ./haptics.page.html */ "./src/app/haptics/haptics.page.html"),
            styles: [__webpack_require__(/*! ./haptics.page.scss */ "./src/app/haptics/haptics.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], HapticsPage);
    return HapticsPage;
}());



/***/ })

}]);
//# sourceMappingURL=haptics-haptics-module.js.map