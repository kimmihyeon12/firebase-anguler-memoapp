"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MemosService = void 0;
var core_1 = require("@angular/core");
var MemosService = /** @class */ (function () {
    function MemosService(messageService, db) {
        this.messageService = messageService;
        this.db = db;
    }
    MemosService.prototype.log = function (message) {
        this.messageService.add("HeroService: " + message);
    };
    MemosService.prototype.getMemos = function () {
        return this.db.collection('memo').get();
    };
    MemosService.prototype.getMemo = function (id) {
        return this.db.collection('memo').doc(id).get();
    };
    MemosService.prototype.addMemo = function (memoForm) {
        var _this = this;
        new Promise(function (resolve, reject) {
            _this.db
                .collection('memo')
                .add(memoForm)
                .then(function (response) {
                console.log(response);
            }, function (error) { return reject(error); });
        });
    };
    MemosService.prototype.updateMemo = function (memoForm) {
        var _this = this;
        new Promise(function (resolve, reject) {
            _this.db
                .collection('memo')
                .doc(memoForm.id)
                .update(memoForm)
                .then(function (response) {
                console.log(response);
            }, function (error) { return reject(error); });
        });
    };
    MemosService.prototype.deleteMemo = function () { };
    MemosService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MemosService);
    return MemosService;
}());
exports.MemosService = MemosService;
