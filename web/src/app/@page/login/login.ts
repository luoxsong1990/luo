
export class Login {
  /**
   * 登入
   * @param UserId 帳號
   * @param Password 密碼
   * @param Language 使用語系
   */
  constructor(
    public UserId: string | null = null,
    public Password: string | null = null
  ) {}
}

export class LoginForgetPsd {
  /**
   * 忘記密碼
   * @param UserId 帳號
   * @param Email 電子郵件
   */
  constructor(public UserId: string | null = null, public Email: string | null = null) {}
}
