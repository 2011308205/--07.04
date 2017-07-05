var UserModel = require('../model/userModel.js');

module.exports = {
  getRegisterPage(req, res) { // 访问注册页面
    res.render('./user/register');
  },
  getLoginPage(req, res) { // 访问登录页面
    res.render('./user/login');
  },
  registerNewUser(req, res) { // 注册新用户
    var newuser = req.body;
    UserModel.sync()
      .then(() => {
        // 能直接 create 吗???
        // UserModel.create();
        // 在注册之前,先通过 username 查找,看这个用户名是否被注册了
        // 使用 Model.count() ,根据指定的条件,去查找符合条件的数据条数
        return UserModel.count({
          where: {
            username: newuser.username
          }
        })
      })
      .then((count) => { // 判断 查询出来的 count 值是否为0
        if (count === 0) {
          // 可以注册
          return UserModel.create(newuser);
        }
        return null;
      })
      .then((result) => {
        // 监听上一个 then 中返回的是不是一个 null
        // 如果是null,表示用户已被注册,返回客户端一个被注册的消息
        // 如果不为null,就表示新用户注册成功
        if (result === null) { //注册失败
          res.json({
            err_code: 1,
            msg: '此用户名已被注册,请更换用户名后重试!'
          });
        } else { // 注册成功
          res.json({
            err_code: 0
          });
        }
      })
  }
}