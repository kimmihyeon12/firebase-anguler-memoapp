"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MemosComponent = void 0;
var core_1 = require("@angular/core");
var MemosComponent = /** @class */ (function () {
    function MemosComponent(authService, memosService) {
        this.authService = authService;
        this.memosService = memosService;
        this.memos = [];
    }
    MemosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.memosService.getMemos().subscribe(function (ss) {
            ss.docs.forEach(function (doc) {
                _this.memos.push(__assign(__assign({}, doc.data()), { id: doc.id }));
            });
        });
    };
    MemosComponent = __decorate([
        core_1.Component({
            selector: 'app-memos',
            templateUrl: './memos.component.html',
            styleUrls: ['./memos.component.css']
        })
    ], MemosComponent);
    return MemosComponent;
}());
exports.MemosComponent = MemosComponent;
