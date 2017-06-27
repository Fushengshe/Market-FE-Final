<template>
  <div id="register">
    <div class = "logo">
      <h1>乐 易 购</h1>
      <h2>XXXXXXXXXXX</h2>
    </div>

    <div class = "main">
      <h3>注 册</h3>
      <form>
        <mu-text-field label="手机号或邮箱" hintText="请输入账号" labelFloat/><br/>
        <mu-text-field class = "psd" label="密码" hintText="请输入密码" type="password" labelFloat/><br />
        <mu-text-field class = "checkpsd" label="重复密码" hintText="请重复输入密码" type="password" labelFloat/><br />
        <mu-text-field class = "verification" label="验证码" hintText="请输入右侧验证码" labelFloat/><br />
        <span><img class = "verification-code" src="#" alt="verification-code"></span>
      </form>
      <P class = "login">
        已经有账号了？
        <router-link to = "/">登录</router-link>
      </P>
      <mu-raised-button label="注 册" class="btn" primary/>
    </div>

    <a class = "issue">注册时遇到问题？</a>
  </div>
</template>

<script>
export default {
  name: 'register',
  data() {
    return {

    }
  }
}
</script>

<style>
  #register{
    height:100%;
    background:url('../assets/loginbg.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .logo{
    height:28vh;
    padding: 7vh 0;
    background:rgba(255, 255, 255, 0.5);
  }

  h1{
    margin:3vh auto;
  }

  h2, h3{
    margin:0;
  }

  h3{
    margin-bottom: 3vh;
  }

  .main{
    height:72vh;
    background:rgba(255, 255, 255, 0.5);
  }

  .mu-text-field{
    margin:0;
  }

  .verification{
    width:35vw;
    float:left;
    margin-left: 19vw;
  }

  .verification-code{
    height:7px;
    display: block;
    float: left;
  }

  .login{
    width:65%;
    margin:0;
    font-size:12px;
    display: inline;
    float:right;
  }

  .login a{
    color:#1e88e5;
  }

  .btn{
    width:30vw;
    margin:5vh 35vw;
  }

  .issue{
    color:#1e88e5;
    font-size:12px;
    font-weight: 600;
    position:absolute;
    right:1vw; bottom:1vh;
  }
</style>
