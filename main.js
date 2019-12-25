(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-root.component.ts":
/*!***************************************!*\
  !*** ./src/app/app-root.component.ts ***!
  \***************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RootComponent = /** @class */ (function () {
    function RootComponent() {
    }
    RootComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet>",
            styleUrls: []
        })
    ], RootComponent);
    return RootComponent;
}());



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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login.component.ts");
/* harmony import */ var _home_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-menu.component */ "./src/app/home-menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'game', component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
    { path: '**', component: _home_menu_component__WEBPACK_IMPORTED_MODULE_4__["HomeMenuComponent"] },
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-title {\n  margin: 16px;\n  color: white;\n  float: left;\n}\n\n.header-sub-title {\n  margin: 16px;\n  color: white;\n  float: right;\n}\n\n.content-title {\n  width: 100%;\n  position: absolute;\n  top: 20%;\n  text-align: center;\n  color: white;\n}\n\n.bottom-content {\n  position: absolute;\n  bottom: 8%;\n  margin: 16px;\n  display: grid;\n  width: calc(100% - 32px);\n  grid-template-columns: 1fr 1fr;\n}\n\n.stake-input {\n  position: absolute;\n  top: 30%;\n  width: calc(100% - 64px);\n  margin: 32px;\n}\n\n.confirm-button, .return-button {\n  background-color: red;\n  margin: 8px;\n  float: right;\n}\n\n.footer-title {\n  color: white;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUix3QkFBd0I7RUFDeEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXRpdGxlIHtcbiAgbWFyZ2luOiAxNnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uaGVhZGVyLXN1Yi10aXRsZSB7XG4gIG1hcmdpbjogMTZweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5jb250ZW50LXRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYm90dG9tLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogOCU7XG4gIG1hcmdpbjogMTZweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG59XG5cbi5zdGFrZS1pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMCU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2NHB4KTtcbiAgbWFyZ2luOiAzMnB4O1xufVxuXG4uY29uZmlybS1idXR0b24sIC5yZXR1cm4tYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBtYXJnaW46IDhweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZm9vdGVyLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function AppComponent(dialog, route) {
        var _this = this;
        this.dialog = dialog;
        this.route = route;
        this.title = 'Jonasty Gaming';
        this.homeMenu = true;
        this.preGame = false;
        this.inGame = false;
        this.gameSelect$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.gameFinish$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.gameSelect$.subscribe(function (game) {
            _this.homeMenu = false;
            _this.game = game;
            _this.preGame = true;
        });
        this.gameFinish$.subscribe(function (result) {
            var win;
            if (result.win)
                win = (parseFloat(_this.stake.toFixed(2)) * 2).toFixed(2);
            _this.dialog.open(_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"], {
                data: {
                    title: result.win ? 'Congratulations !' : 'Too bad',
                    body: result.win
                        ? "You p0wned your opponent with " + result.score + " points. <br>You have won \u20AC" + win
                        : "You got r3kked and only scored " + result.score + " points. <br>Better luck next time.",
                }
            }).afterClosed().subscribe(function () {
                if (result.win) {
                    _this.user.balance += parseFloat(win);
                }
                _this.storeResult();
                _this.saveUser();
                _this.return();
            });
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .queryParams
            .subscribe(function (params) {
            var user = {};
            window.localStorage.getItem('mySuperUniqueKey__' + params.username).split('___').forEach(function (attr) {
                var _a = attr.split('__'), key = _a[0], value = _a[1];
                user[key] = value;
            });
            user.balance = parseFloat(user.balance);
            _this.user = user;
            console.log(_this.user);
        });
    };
    AppComponent.prototype.return = function () {
        this.homeMenu = true;
        this.preGame = false;
        this.inGame = false;
    };
    AppComponent.prototype.enterGame = function () {
        var _this = this;
        if (!this.stake || this.stake <= 0) {
            this.dialog.open(_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"], {
                data: {
                    title: 'Invalid stake',
                    body: "Please choose any amount above \u20AC0.00",
                }
            }).afterClosed().subscribe(function () { return _this.stake = undefined; });
            return;
        }
        var stake = this.stake.toFixed(2);
        var win = (parseFloat(stake) * 2).toFixed(2);
        this.dialog.open(_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"], {
            data: {
                title: 'Are you sure',
                body: "If you accept to play " + this.game + ", \u20AC" + stake + " will be withdrawn from your balance. <br>\n        If you win, you will be awarded \u20AC" + win + ". <br>\n        To win a game of snake, collect 12 or more food without dying.",
                confirmButtonName: 'ACCEPT',
                declineButtonName: 'DECLINE',
            }
        }).afterClosed().subscribe(function (res) {
            if (res) {
                _this.homeMenu = false;
                _this.preGame = false;
                _this.user.balance -= parseFloat(stake);
                _this.inGame = true;
                _this.saveUser();
            }
            else {
                _this.stake = undefined;
            }
        });
    };
    AppComponent.prototype.saveUser = function () {
        var _this = this;
        var userStringParts = [];
        Object.keys(this.user).forEach(function (key) { return userStringParts.push(key.toString() + '__' + _this.user[key].toString()); });
        localStorage.setItem('mySuperUniqueKey__' + this.user.username, userStringParts.join('___'));
    };
    AppComponent.prototype.storeResult = function () {
        // TODO: this
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app',
            template: "\n      <div class=\"header\"><h2 class=\"header-title\">{{title}}</h2>\n          <p class=\"header-sub-title\">{{'\u20AC' + user.balance.toFixed(2)}}</p></div>\n\n\n      <div class=\"content-title\" *ngIf=\"!inGame\"><h2 class=\"content-title\">{{homeMenu ? 'Choose a game' : 'Choose the stake'}}</h2></div>\n\n      <app-home-menu [gameSelect$]=\"gameSelect$\" *ngIf=\"homeMenu\"></app-home-menu>\n\n      <div *ngIf=\"preGame\">\n          <input class=\"stake-input my-input\" [(ngModel)]=\"stake\" placeholder=\"\u20AC\" type=\"number\" step=\"0.01\" autofocus>\n          <div class=\"bottom-content\">\n              <button mat-raised-button (click)=\"enterGame()\" class=\"confirm-button\">CONFIRM</button>\n              <button mat-raised-button (click)=\"return()\" class=\"return-button\">RETURN</button>\n          </div>\n      </div>\n\n      <app-snake *ngIf=\"inGame\" [gameFinish$]=gameFinish$></app-snake>\n\n\n      <div class=\"footer\"><p class=\"footer-title\">Jonas' projectgroeppie &trade;</p>\n      </div>\n  ",
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var _home_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-menu.component */ "./src/app/home-menu.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_root_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-root.component */ "./src/app/app-root.component.ts");
/* harmony import */ var _snake_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./snake.component */ "./src/app/snake.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"],
                _home_menu_component__WEBPACK_IMPORTED_MODULE_8__["HomeMenuComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _app_root_component__WEBPACK_IMPORTED_MODULE_10__["RootComponent"],
                _snake_component__WEBPACK_IMPORTED_MODULE_11__["SnakeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            ],
            entryComponents: [_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"]],
            providers: [],
            bootstrap: [_app_root_component__WEBPACK_IMPORTED_MODULE_10__["RootComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dialog.component.ts":
/*!*************************************!*\
  !*** ./src/app/dialog.component.ts ***!
  \*************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        dialogRef.disableClose = true;
    }
    DialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog',
            template: "\n      <h3 class=\"dialog-title\">{{ data.title }}</h3>\n      <p class=\"dialog-body\" [innerHTML]=\"data.body\"></p>\n      <div class=\"dialog-button-container\">\n          <button mat-button (click)=\"dialogRef.close(true)\" *ngIf=\"data.confirmButtonName\">{{ data.confirmButtonName}}</button>\n          <button mat-button (click)=\"dialogRef.close(false)\">{{ data.declineButtonName || 'CLOSE'}}</button>\n      </div>\n  ",
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/home-menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/home-menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-grid {\n  width: 70%;\n  height: 35%;\n  padding: 10%;\n  position: absolute;\n  top: 30%;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtZ3JpZCB7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogMzUlO1xuICBwYWRkaW5nOiAxMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home-menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/home-menu.component.ts ***!
  \****************************************/
/*! exports provided: HomeMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeMenuComponent", function() { return HomeMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeMenuComponent = /** @class */ (function () {
    function HomeMenuComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], HomeMenuComponent.prototype, "gameSelect$", void 0);
    HomeMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-menu',
            template: "\n      <div class=\"content-grid\">\n          <mat-card class=\"mat-card mat-elevation-z18\" (click)=\"gameSelect$.emit('snake')\">\n              <img src=\"./../assets/snake-logo.jpg\" alt=\"snake\">\n          </mat-card>\n      </div>\n  ",
            styles: [__webpack_require__(/*! ./home-menu.component.css */ "./src/app/home-menu.component.css")]
        })
    ], HomeMenuComponent);
    return HomeMenuComponent;
}());



/***/ }),

/***/ "./src/app/login.component.css":
/*!*************************************!*\
  !*** ./src/app/login.component.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-title, .content-title, .footer-title {\n  color: white;\n  text-align: center;\n}\n\n.content-text {\n  margin-top: 50%;\n  color: white;\n  text-align: center;\n}\n\n.content {\n  width: 100%;\n  position: absolute;\n  top: 30%;\n}\n\n.username-input {\n  width: 60%;\n  float: left;\n  margin: 16px;\n}\n\n.login-button {\n  float: right;\n  width: 20%;\n  margin: 16px;\n  color: white;\n  background-color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItdGl0bGUsIC5jb250ZW50LXRpdGxlLCAuZm9vdGVyLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250ZW50LXRleHQge1xuICBtYXJnaW4tdG9wOiA1MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xufVxuXG4udXNlcm5hbWUtaW5wdXQge1xuICB3aWR0aDogNjAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAxNnB4O1xufVxuXG4ubG9naW4tYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW46IDE2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/login.component.ts":
/*!************************************!*\
  !*** ./src/app/login.component.ts ***!
  \************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(dialog, _router) {
        this.dialog = dialog;
        this._router = _router;
        this.title = 'Jonasty Gaming';
        this.creatingAccount = false;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.creatingAccount) { // TODO: don't overwrite usernames
            window.localStorage.setItem('mySuperUniqueKey__' + this.username, 'balance__150___username__' + this.username); // TODO: set to 0
            this._router.navigate(['game'], { queryParams: { username: this.username } });
        }
        else {
            var token = window.localStorage.getItem('mySuperUniqueKey__' + this.username);
            if (token) {
                this._router.navigate(['game'], { queryParams: { username: this.username } });
            }
            else {
                this.dialog.open(_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"], {
                    data: { title: 'Incorrect Username', body: 'This username does not exist.' }
                }).afterClosed().subscribe(function () {
                    _this.username = '';
                });
            }
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: "\n      <div class=\"header\"><h1 class=\"header-title\">{{title}}</h1></div>\n      <div class=\"content\">\n          <h2 class=\"content-title\">{{creatingAccount ? 'Create' : 'Login'}}</h2>\n          <input class=\"username-input my-input\" [(ngModel)]=\"username\" placeholder=\"username\">\n          <button class=\"login-button\" mat-button (click)=\"login()\">{{creatingAccount ? 'Create' : 'Login'}}</button>\n          <h4 class=\"content-text\" (click)=\"creatingAccount = true\" *ngIf=\"!creatingAccount\">Create new account</h4>\n          <h4 class=\"content-text\" (click)=\"creatingAccount = false\" *ngIf=\"creatingAccount\">Cancel</h4>\n      </div>\n      <div class=\"footer\"><p class=\"footer-title\">Jonas projectgroeppie tm.</p></div>\n  ",
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/snake.component.css":
/*!*************************************!*\
  !*** ./src/app/snake.component.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".game-canvas {\n  position: absolute;\n  top: 10%;\n  width: 90%;\n  height: 45%;\n  margin: 5%;\n  text-align: center;\n  background-color: darkslategray;\n  border: white 1px solid;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n}\n\n.game-controller {\n  position: absolute;\n  bottom: 8%;\n  width: 100%;\n  height: 25%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n}\n\n.start-title-container {\n  position: absolute;\n  top: 35%;\n  width: 100%;\n  color: lime;\n  text-align: center;\n}\n\n.up-button {\n  grid-column: 3/4;\n  grid-row: 1/2;\n}\n\n.right-button {\n  grid-column: 4/5;\n  grid-row: 2/3;\n}\n\n.down-button {\n  grid-column: 3/4;\n  grid-row: 3/4;\n}\n\n.left-button {\n  grid-column: 2/3;\n  grid-row: 2/3;\n}\n\n.body {\n  border: darkslategray 3px solid;\n  background-color: lime;\n  border-radius: 25%;\n}\n\n.food {\n  border: darkslategray 3px solid;\n  background-color: red;\n  border-radius: 25%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc25ha2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLDhEQUE4RDtFQUM5RCwyREFBMkQ7QUFDN0Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLDBDQUEwQztFQUMxQywrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zbmFrZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbWUtY2FudmFzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwJTtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0NSU7XG4gIG1hcmdpbjogNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTtcbiAgYm9yZGVyOiB3aGl0ZSAxcHggc29saWQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcbn1cblxuLmdhbWUtY29udHJvbGxlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA4JTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XG59XG5cbi5zdGFydC10aXRsZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzUlO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IGxpbWU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVwLWJ1dHRvbiB7XG4gIGdyaWQtY29sdW1uOiAzLzQ7XG4gIGdyaWQtcm93OiAxLzI7XG59XG5cbi5yaWdodC1idXR0b24ge1xuICBncmlkLWNvbHVtbjogNC81O1xuICBncmlkLXJvdzogMi8zO1xufVxuXG4uZG93bi1idXR0b24ge1xuICBncmlkLWNvbHVtbjogMy80O1xuICBncmlkLXJvdzogMy80O1xufVxuXG4ubGVmdC1idXR0b24ge1xuICBncmlkLWNvbHVtbjogMi8zO1xuICBncmlkLXJvdzogMi8zO1xufVxuXG4uYm9keSB7XG4gIGJvcmRlcjogZGFya3NsYXRlZ3JheSAzcHggc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpbWU7XG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcbn1cblxuLmZvb2Qge1xuICBib3JkZXI6IGRhcmtzbGF0ZWdyYXkgM3B4IHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/snake.component.ts":
/*!************************************!*\
  !*** ./src/app/snake.component.ts ***!
  \************************************/
/*! exports provided: SnakeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnakeComponent", function() { return SnakeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SnakeComponent = /** @class */ (function () {
    function SnakeComponent() {
        this.started = false;
        this.finished = false;
        this.direction = 1;
        this.food = [5, 5];
        this.gameState = [[1, 1], [2, 1], [3, 1], [4, 1]];
    }
    SnakeComponent.prototype.updateDirection = function (direction) {
        this.direction = direction;
    };
    SnakeComponent.prototype.move = function () {
        if (this.finished)
            return;
        var last = lodash__WEBPACK_IMPORTED_MODULE_1__["last"](this.gameState);
        var next;
        if (this.direction === 0) {
            next = [last[0], last[1] + 1];
        }
        else if (this.direction === 1) {
            next = [last[0] + 1, last[1]];
        }
        else if (this.direction === 2) {
            next = [last[0], last[1] - 1];
        }
        else if (this.direction === 3) {
            next = [last[0] - 1, last[1]];
        }
        if (this._checkDeath(next)) {
            this.gameFinish$.emit({ win: this.gameState.length > 15, score: (this.gameState.length - 4) * 100 });
            this.finished = true;
            return;
        }
        if (next[0] === this.food[0] && next[1] === this.food[1]) {
            this._updateFood();
        }
        else {
            this.gameState = this.gameState.slice(1);
        }
        this.gameState.push(next);
    };
    SnakeComponent.prototype.startGame = function () {
        this.started = true;
        setInterval(this.move.bind(this), 250);
    };
    SnakeComponent.prototype._checkDeath = function (head) {
        if (head[0] < 0 || head[0] > 9 || head[1] < 0 || head[1] > 9) {
            return true;
        }
        return !!lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.gameState, function (point) { return point[0] === head[0] && point[1] === head[1]; });
    };
    SnakeComponent.prototype._updateFood = function () {
        var freeSpaces = [];
        var i, j;
        for (i = 0; i < 10; i++) {
            for (j = 0; j < 10; j++) {
                if (!lodash__WEBPACK_IMPORTED_MODULE_1__["find"](this.gameState, function (point) { return point[0] === i && point[1] === j; })) {
                    freeSpaces.push([i, j]);
                }
            }
        }
        if (lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"](freeSpaces)) {
            this.gameFinish$.emit({ win: true, score: this.gameState.length - 4 * 100 });
            this.finished = true;
            return;
        }
        this.food = freeSpaces[Math.floor(Math.random() * freeSpaces.length)];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SnakeComponent.prototype, "gameFinish$", void 0);
    SnakeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-snake',
            template: "\n      <div class=\"game-canvas mat-elevation-z18\">\n          <div *ngFor=\"let point of gameState\"\n               class=\"body\" [style.grid-row]=\"10 - point[1]\" [style.grid-column]=\"point[0] + 1\">\n          </div>\n          <div class=\"food\" [style.grid-row]=\"10 - food[1]\" [style.grid-column]=\"food[0] + 1\">\n          </div>\n      </div>\n\n      <div *ngIf=\"!started && !finished\" class=\"start-title-container\" (click)=\"startGame()\"><h2>Touch to start</h2></div>\n      \n      <div class=\"game-controller\">\n          <button mat-raised-button class=\"up-button\" (click)=\"updateDirection(0)\">&uarr;</button>\n          <button mat-raised-button class=\"right-button\" (click)=\"updateDirection(1)\">&rarr;</button>\n          <button mat-raised-button class=\"down-button\" (click)=\"updateDirection(2)\">&darr;</button>\n          <button mat-raised-button class=\"left-button\" (click)=\"updateDirection(3)\">&larr;</button>\n      </div>\n  ",
            styles: [__webpack_require__(/*! ./snake.component.css */ "./src/app/snake.component.css")]
        })
    ], SnakeComponent);
    return SnakeComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/asitaram/WebstormProjects/jonas/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map