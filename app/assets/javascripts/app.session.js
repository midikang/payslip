App.Session = {
  loginForm: function() {
    $('.user_login').form({
      on: 'blur',
      fields: {
        email:{
          identifier  : "session[email]",
          rules:  [
            {
              type   : 'empty',
              prompt: '邮箱不能为空'
            },
            {
              type   : 'email',
              optional   : true,
              prompt: "无效邮箱"
            }
          ]
        },
        password: {
          identifier: 'session[password]',
          rules:  [
            {
              type: 'minLength[6]',
              prompt : '密码必须为六位数以上'
            }
          ]
        }
      }
    });

  }
};
