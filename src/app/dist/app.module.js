"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var layout_module_1 = require("./module/layout/layout.module");
var memos_component_1 = require("./pages/memos-page/memos/memos.component");
var login_component_1 = require("./pages/Login-page/login/login.component");
var environment_1 = require("../environments/environment");
var compat_1 = require("@angular/fire/compat");
var auth_1 = require("@angular/fire/compat/auth");
var firestore_1 = require("@angular/fire/compat/firestore");
var database_1 = require("@angular/fire/compat/database");
var memos_detail_component_1 = require("./pages/memos-detail-page/memos-detail/memos-detail.component");
var memos_form_component_1 = require("./pages/memos-detail-page/memos-form/memos-form.component");
var forms_1 = require("@angular/forms");
var page_not_found_component_1 = require("./pages/errr-page/page-not-found/page-not-found.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                memos_component_1.MemosComponent,
                login_component_1.LoginComponent,
                memos_detail_component_1.MemosDetailComponent,
                memos_form_component_1.MemosFormComponent,
                page_not_found_component_1.PageNotFoundComponent,
            ],
            imports: [
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                layout_module_1.LayoutModule,
                compat_1.AngularFireModule.initializeApp(environment_1.environment.firebaseConfig),
                auth_1.AngularFireAuthModule,
                firestore_1.AngularFirestoreModule,
                database_1.AngularFireDatabaseModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
