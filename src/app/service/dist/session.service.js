"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SessionService = void 0;
var core_1 = require("@angular/core");
var SessionService = /** @class */ (function () {
    function SessionService() {
    }
    SessionService.prototype.setInfo = function (userId) {
        sessionStorage.setItem('id', userId);
    };
    SessionService.prototype.getInfo = function () {
        return sessionStorage.getItem('id');
    };
    SessionService.prototype.logOut = function () {
        //로그아웃 기능은 아래와 같은식으로
        sessionStorage.removeItem('id');
    };
    SessionService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SessionService);
    return SessionService;
}());
exports.SessionService = SessionService;
