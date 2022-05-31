import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './pages/errr-page/page-not-found/page-not-found.component';

import { LoginComponent } from './pages/Login-page/login/login.component';
import { MemosDetailComponent } from './pages/memos-detail-page/memos-detail/memos-detail.component';
import { MemosComponent } from './pages/memos-page/memos/memos.component';

const routes: Routes = [
  { path: '', component: LoginComponent },

  // 로그인 여부에 따라 페이지 제어(AuthGuard -> canActivate)
  // 아래 내용은 로그인 안되면 모든 페이지 접근 안되게 설정한것
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: LoginComponent },
      { path: '', redirectTo: '/memos', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'memos', component: MemosComponent },
      { path: 'memos-detail/:id', component: MemosDetailComponent },
      { path: 'memos-detail', component: MemosDetailComponent },
      { path: '**', component: PageNotFoundComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
