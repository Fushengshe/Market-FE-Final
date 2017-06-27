<template>
  <div id="login">
    <div class = "logo">
      <h1>乐 易 购</h1>
      <h2>XXXXXXXXXXX</h2>
    </div>

    <div class = "main">
      <h3>登 录</h3>
      <form>
        <mu-avatar slot="left" src="#" :size = "90" class = "avatar" />
        <mu-text-field label="手机号或邮箱" hintText="请输入账号" labelFloat/><br/>
        <mu-text-field class = "psd" label="密码" hintText="请输入密码" type="password" labelFloat/><br />
      </form>
      <P class = "forgot">
        忘记密码了？
        <router-link to = "register" class = "forgots">密码找回</router-link>
      </P>
      <router-link to = "home">
        <mu-raised-button label="登 录" class="btn" primary/>
      </router-link>

    <P class = "register">
      还没有账号？
      <router-link to = "register" class = "registers">注册</router-link>
    </P>

    <a class = "issue">登录时遇到问题？</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {

    }
  }
}
</script>

<style>
  #login{
    height:100%;
    background:url('../assets/loginbg.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .logo{
    height:31vh;
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
    height:69vh;
    text-align:center;
    background:rgba(255, 255, 255, 0.5);
  }

  .avatar{
    display:block;
    margin:0 auto 5vh auto;
  }

  .psd{
    margin:0;
  }

  .forgot{
    width:68%;
    height:2vh;
    margin:0;
    font-size:12px;
    float:right;
  }

  .register{
    width:60%;
    height:2vh;
    margin:0 auto;
    font-size:12px;
  }

  .forgot a, .register a{
    color:#1e88e5;
  }

  .btn{
    width:30vw;
    margin:5vh 35vw 3vh 35vw;
  }

  .issue{
    color:#1e88e5;
    font-size:12px;
    font-weight: 600;
    position:absolute;
    right:1vw; bottom:1vh;
  }
</style>
