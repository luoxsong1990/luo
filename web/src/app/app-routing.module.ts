import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // 登入頁
    path: 'login',
    loadChildren: () => import('./@page/login/login.module').then((m) => m.LoginModule),
  },
  // {
  //   path: '',
  //   canActivate: [IndexGuard],
  //   canActivateChild: [PageGuard],
  //   loadChildren: () => import('./@page/index/index.module').then((m) => m.IndexModule),
  //   data: {
  //     router: INDEX_ALL_ROUTES,
  //   },
  // },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
