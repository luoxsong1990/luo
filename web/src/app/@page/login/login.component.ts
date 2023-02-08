import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Login, LoginForgetPsd } from './login';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit, OnDestroy {
  /** 登入表單 */
  @ViewChild('loginForm', { static: false }) public loginForm!: NgForm;


  /** 是否顯示密碼 */
  psdShowTxt = false;

  /** 登入接口格式 */
  send = new Login();

  /** 訂閱base */
  subscription!: Subscription;

  /** 鎖定按鈕狀態 */
  disable = false;

  /** 現在年份 */
  yearNow = new Date().getFullYear();

  /**
   * @param user 登入API
   * @param router 路由
   * @param alert API提示訊息
   * @param translate 語系
   */
  constructor(
    private router: Router,
    private aRoute: ActivatedRoute
  ) {
    // // 如果有點選過，把帳號帶進去
    // this.send.UserId = this.keepAccount;
  }

  ngOnInit(): void {
    /**
     * 如果有資料，代表使用者沒有按登出就返回到此頁面，
     * 預設清除所有的資料
     */
    // if (this.user.user) {
    //   this.logout.clear();
    // }
  }


  /** 登入操作 */
  signInOk(): void {
    // 關注功能權限是否讀取完畢
    // this.subscription = this.base.list.auth.online
    //   .pipe(filter((auth) => auth && !!auth.length))
    //   .subscribe({
    //     next: (auth) => {
    //       this.keepChange();
    //       this.navigate(auth);
    //     },
    //   });
    // this.navigate(this.user.user.FunctionData);
  }

  /** 登入 */
  login(): void {
    
  }


  /** 忘記密碼 */
  forgetPsdBtn(): void {
    // this.forgetStatu = !this.forgetStatu;
    // this.send.Password = null;
  }


  /** 註銷 */
  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
