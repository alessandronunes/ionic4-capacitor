(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accessibility-accessibility-module"],{

/***/ "./src/app/accessibility/accessibility.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/accessibility/accessibility.module.ts ***!
  \*******************************************************/
/*! exports provided: AccessibilityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessibilityPageModule", function() { return AccessibilityPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _accessibility_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accessibility.page */ "./src/app/accessibility/accessibility.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _accessibility_page__WEBPACK_IMPORTED_MODULE_5__["AccessibilityPage"]
    }
];
var AccessibilityPageModule = /** @class */ (function () {
    function AccessibilityPageModule() {
    }
    AccessibilityPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_accessibility_page__WEBPACK_IMPORTED_MODULE_5__["AccessibilityPage"]]
        })
    ], AccessibilityPageModule);
    return AccessibilityPageModule;
}());



/***/ }),

/***/ "./src/app/accessibility/accessibility.page.html":
/*!*******************************************************!*\
  !*** ./src/app/accessibility/accessibility.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n        Accessibility\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  Accessibility does not have web implementation.\n</ion-content>\n"

/***/ }),

/***/ "./src/app/accessibility/accessibility.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/accessibility/accessibility.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/accessibility/accessibility.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/accessibility/accessibility.page.ts ***!
  \*****************************************************/
/*! exports provided: AccessibilityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessibilityPage", function() { return AccessibilityPage; });
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var Accessibility = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__["Plugins"].Accessibility, Modals = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__["Plugins"].Modals;
var AccessibilityPage = /** @class */ (function () {
    function AccessibilityPage() {
    }
    AccessibilityPage.prototype.ngOnInit = function () {
        Accessibility.addListener('accessibilityScreenReaderStateChange', function (state) {
            alert('accessibilityScreenReaderStateChange: ' + state.value);
        });
    };
    AccessibilityPage.prototype.isVoiceOverEnabled = function () {
        return __awaiter(this, void 0, void 0, function () {
            var vo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Accessibility.isScreenReaderEnabled()];
                    case 1:
                        vo = _a.sent();
                        alert('Voice over enabled? ' + vo.value);
                        return [2 /*return*/];
                }
            });
        });
    };
    AccessibilityPage.prototype.speak = function () {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Modals.prompt({
                            title: "Value to speak",
                            message: "Enter the value to speak"
                        })];
                    case 1:
                        value = _a.sent();
                        Accessibility.speak({ value: value.value });
                        return [2 /*return*/];
                }
            });
        });
    };
    AccessibilityPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accessibility',
            template: __webpack_require__(/*! ./accessibility.page.html */ "./src/app/accessibility/accessibility.page.html"),
            styles: [__webpack_require__(/*! ./accessibility.page.scss */ "./src/app/accessibility/accessibility.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], AccessibilityPage);
    return AccessibilityPage;
}());



/***/ })

}]);
//# sourceMappingURL=accessibility-accessibility-module.js.map