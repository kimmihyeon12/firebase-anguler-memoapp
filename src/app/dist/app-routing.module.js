"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_guard_1 = require("./auth.guard");
var page_not_found_component_1 = require("./pages/errr-page/page-not-found/page-not-found.component");
var login_component_1 = require("./pages/Login-page/login/login.component");
var memos_detail_component_1 = require("./pages/memos-detail-page/memos-detail/memos-detail.component");
var memos_component_1 = require("./pages/memos-page/memos/memos.component");
var routes = [
    { path: '', component: login_component_1.LoginComponent },
    // 로그인 여부에 따라 페이지 제어(AuthGuard -> canActivate)
    // 아래 내용은 로그인 안되면 모든 페이지 접근 안되게 설정한것
    {
        path: '',
        canActivate: [auth_guard_1.AuthGuard],
        children: [
            { path: '', component: login_component_1.LoginComponent },
            { path: '', redirectTo: '/memos', pathMatch: 'full' },
            { path: 'login', component: login_component_1.LoginComponent },
            { path: 'memos', component: memos_component_1.MemosComponent },
            { path: 'memos-detail/:id', component: memos_detail_component_1.MemosDetailComponent },
            { path: 'memos-detail', component: memos_detail_component_1.MemosDetailComponent },
            { path: '**', component: page_not_found_component_1.PageNotFoundComponent },
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes, {
                    useHash: true,
                    onSameUrlNavigation: 'reload',
                    scrollPositionRestoration: 'enabled'
                }),
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
