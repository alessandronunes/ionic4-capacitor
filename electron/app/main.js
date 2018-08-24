(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./accessibility/accessibility.module": [
		"./src/app/accessibility/accessibility.module.ts",
		"accessibility-accessibility-module~app-app-module~browser-browser-module~haptics-haptics-module~stat~0940e7a0",
		"common",
		"accessibility-accessibility-module"
	],
	"./app/app.module": [
		"./src/app/app/app.module.ts",
		"accessibility-accessibility-module~app-app-module~browser-browser-module~haptics-haptics-module~stat~0940e7a0",
		"common",
		"app-app-module"
	],
	"./background-task/background-task.module": [
		"./src/app/background-task/background-task.module.ts",
		"background-task-background-task-module"
	],
	"./browser/browser.module": [
		"./src/app/browser/browser.module.ts",
		"accessibility-accessibility-module~app-app-module~browser-browser-module~haptics-haptics-module~stat~0940e7a0",
		"common",
		"browser-browser-module"
	],
	"./camera/camera.module": [
		"./src/app/camera/camera.module.ts",
		"camera-camera-module"
	],
	"./clipboard/clipboard.module": [
		"./src/app/clipboard/clipboard.module.ts",
		"clipboard-clipboard-module"
	],
	"./console/console.module": [
		"./src/app/console/console.module.ts",
		"console-console-module"
	],
	"./device/device.module": [
		"./src/app/device/device.module.ts",
		"device-device-module"
	],
	"./filesystem/filesystem.module": [
		"./src/app/filesystem/filesystem.module.ts",
		"filesystem-filesystem-module"
	],
	"./geolocation/geolocation.module": [
		"./src/app/geolocation/geolocation.module.ts",
		"geolocation-geolocation-module"
	],
	"./haptics/haptics.module": [
		"./src/app/haptics/haptics.module.ts",
		"accessibility-accessibility-module~app-app-module~browser-browser-module~haptics-haptics-module~stat~0940e7a0",
		"common",
		"haptics-haptics-module"
	],
	"./home/home.module": [
		"./src/app/home/home.module.ts",
		"home-home-module"
	],
	"./keyboard/keyboard.module": [
		"./src/app/keyboard/keyboard.module.ts",
		"keyboard-keyboard-module"
	],
	"./modals/modals.module": [
		"./src/app/modals/modals.module.ts",
		"modals-modals-module"
	],
	"./motion/motion.module": [
		"./src/app/motion/motion.module.ts",
		"motion-motion-module"
	],
	"./network/network.module": [
		"./src/app/network/network.module.ts",
		"network-network-module"
	],
	"./share/share.module": [
		"./src/app/share/share.module.ts",
		"share-share-module"
	],
	"./splash-screen/splash-screen.module": [
		"./src/app/splash-screen/splash-screen.module.ts",
		"splash-screen-splash-screen-module"
	],
	"./status-bar/status-bar.module": [
		"./src/app/status-bar/status-bar.module.ts",
		"accessibility-accessibility-module~app-app-module~browser-browser-module~haptics-haptics-module~stat~0940e7a0",
		"common",
		"status-bar-status-bar-module"
	],
	"./storage/storage.module": [
		"./src/app/storage/storage.module.ts",
		"accessibility-accessibility-module~app-app-module~browser-browser-module~haptics-haptics-module~stat~0940e7a0",
		"common",
		"storage-storage-module"
	],
	"./toast/toast.module": [
		"./src/app/toast/toast.module.ts",
		"accessibility-accessibility-module~app-app-module~browser-browser-module~haptics-haptics-module~stat~0940e7a0",
		"common",
		"toast-toast-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'accessibility', loadChildren: './accessibility/accessibility.module#AccessibilityPageModule' },
    { path: 'app', loadChildren: './app/app.module#AppPageModule' },
    { path: 'browser', loadChildren: './browser/browser.module#BrowserPageModule' },
    { path: 'backgroundtask', loadChildren: './background-task/background-task.module#BackgroundTaskPageModule' },
    { path: 'camera', loadChildren: './camera/camera.module#CameraPageModule' },
    { path: 'clipboard', loadChildren: './clipboard/clipboard.module#ClipboardPageModule' },
    { path: 'console', loadChildren: './console/console.module#ConsolePageModule' },
    { path: 'device', loadChildren: './device/device.module#DevicePageModule' },
    { path: 'filesystem', loadChildren: './filesystem/filesystem.module#FilesystemPageModule' },
    { path: 'geolocation', loadChildren: './geolocation/geolocation.module#GeolocationPageModule' },
    { path: 'haptics', loadChildren: './haptics/haptics.module#HapticsPageModule' },
    { path: 'keyboard', loadChildren: './keyboard/keyboard.module#KeyboardPageModule' },
    { path: 'modals', loadChildren: './modals/modals.module#ModalsPageModule' },
    { path: 'motion', loadChildren: './motion/motion.module#MotionPageModule' },
    { path: 'network', loadChildren: './network/network.module#NetworkPageModule' },
    { path: 'share', loadChildren: './share/share.module#SharePageModule' },
    { path: 'splashscreen', loadChildren: './splash-screen/splash-screen.module#SplashScreenPageModule' },
    { path: 'statusbar', loadChildren: './status-bar/status-bar.module#StatusBarPageModule' },
    { path: 'storage', loadChildren: './storage/storage.module#StoragePageModule' },
    { path: 'toast', loadChildren: './toast/toast.module#ToastPageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-split-pane>\n    <ion-menu>\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>Menu</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-list>\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages\">\n            <ion-item [routerDirection]=\"'root'\" [routerLink]=\"[p.url]\">\n              <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\n              <ion-label>\n                {{p.title}}\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet main></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.appPages = [
            {
                title: 'Home',
                url: '/home',
                icon: 'home'
            },
            {
                title: 'Accessibility',
                url: '/accessibility',
                icon: 'add'
            },
            {
                title: 'App',
                url: '/app',
                icon: 'information'
            },
            {
                title: 'Background Task',
                url: '/backgroundtask',
                icon: 'eye-off'
            },
            {
                title: 'Browser',
                url: '/browser',
                icon: 'browsers'
            },
            {
                title: 'Camera',
                url: '/camera',
                icon: 'camera'
            },
            {
                title: 'Clipboard',
                url: '/clipboard',
                icon: 'clipboard'
            },
            {
                title: 'Console',
                url: '/console',
                icon: 'code'
            },
            {
                title: 'Device',
                url: '/device',
                icon: 'phone-portrait'
            },
            {
                title: 'Filesystem',
                url: '/filesystem',
                icon: 'folder'
            },
            {
                title: 'Geolocation',
                url: '/geolocation',
                icon: 'pin'
            },
            {
                title: 'Haptics',
                url: '/haptics',
                icon: 'hand'
            },
            {
                title: 'Keyboard',
                url: '/keyboard',
                icon: 'keypad'
            },
            {
                title: 'Modals',
                url: '/modals',
                icon: 'today'
            },
            {
                title: 'Motion',
                url: '/motion',
                icon: 'move'
            },
            {
                title: 'Network',
                url: '/network',
                icon: 'wifi'
            },
            {
                title: 'Share',
                url: '/share',
                icon: 'share'
            },
            {
                title: 'Splash Screen',
                url: '/splashscreen',
                icon: 'photos'
            },
            {
                title: 'Status Bar',
                url: '/statusbar',
                icon: 'remove'
            },
            {
                title: 'Storage',
                url: '/storage',
                icon: 'disc'
            },
            {
                title: 'Toast',
                url: '/toast',
                icon: 'alert'
            }
        ];
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            entryComponents: [],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
            ],
            providers: [
                _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"],
                _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"],
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicRouteStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/avallenu/Documents/ionic4-capacitor/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map