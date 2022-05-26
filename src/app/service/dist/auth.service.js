"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var auth_1 = require("@angular/fire/auth");
var AuthService = /** @class */ (function () {
    function AuthService(afAuth, // Inject Firebase auth service,
    router) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.afAuth.authState.subscribe(function (user) {
            console.log(_this.userData);
            if (user) {
                _this.userData = user;
                localStorage.setItem('user', JSON.stringify(_this.userData));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                localStorage.setItem('user', 'null');
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }
    // Sign in with Google
    AuthService.prototype.GoogleAuth = function () {
        return this.AuthLogin(new auth_1.GoogleAuthProvider());
    };
    AuthService.prototype.facebookAuth = function () {
        return this.AuthLogin(new auth_1.FacebookAuthProvider());
    };
    // Auth logic to run auth providers
    AuthService.prototype.AuthLogin = function (provider) {
        var _this = this;
        return this.afAuth
            .signInWithPopup(provider)
            .then(function (result) {
            localStorage.setItem('user', JSON.stringify(result.user));
            _this.router.navigate(['memos']);
        })["catch"](function (error) {
            console.log('error');
            console.log(error);
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.afAuth.signOut().then(function () {
            localStorage.setItem('user', 'null');
            _this.router.navigate(['login']);
        });
        console.log('logout');
        var auth = auth_1.getAuth();
        console.log(auth);
        auth_1.signOut(auth)
            .then(function (result) {
            console.log(result);
        })["catch"](function (error) {
            console.log('error');
            console.log(error);
        });
    };
    AuthService.prototype.isLoggedIn = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        return user !== null && user.emailVerified !== false ? true : false;
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
