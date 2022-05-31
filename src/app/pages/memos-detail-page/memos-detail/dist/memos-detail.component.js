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
exports.MemosDetailComponent = void 0;
var core_1 = require("@angular/core");
var MemosDetailComponent = /** @class */ (function () {
    function MemosDetailComponent(memosService, formBuilder, route) {
        this.memosService = memosService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.checkoutForm = this.formBuilder.group({
            title: '',
            content: ''
        });
        this.memo = {};
    }
    MemosDetailComponent.prototype.onSubmit = function () {
        this.memosService.addMemo(this.checkoutForm.value);
        this.checkoutForm.reset();
    };
    MemosDetailComponent.prototype.getMemo = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.memosService.getMemo(id.toString()).subscribe(function (e) {
                _this.memo = __assign(__assign({}, e.data()), { id: id });
            });
        }
    };
    MemosDetailComponent.prototype.ngOnInit = function () {
        this.getMemo();
    };
    MemosDetailComponent.prototype.submitStudentData = function () { };
    MemosDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-memos-detail',
            templateUrl: './memos-detail.component.html',
            styleUrls: ['./memos-detail.component.css']
        })
    ], MemosDetailComponent);
    return MemosDetailComponent;
}());
exports.MemosDetailComponent = MemosDetailComponent;
