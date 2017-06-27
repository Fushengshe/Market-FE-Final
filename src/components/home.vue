<template>
  <div id="home">



    <mu-paper class="home-footer">
      <mu-bottom-nav :value="bottomNav" @change="handleChange">
        <mu-bottom-nav-item value="recents" title="主页" icon="restore"/>
        <mu-bottom-nav-item value="favorites" title="购物车" icon="favorite"/>
        <mu-bottom-nav-item value="nearby" title="我的" icon="location_on"/>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      bottomNav: 'recents'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>

<style>
  #home{
    height:100vh;
  }

  .home-footer{
    position:fixed;
    width: 100%;
    bottom:0;
  }
</style>
