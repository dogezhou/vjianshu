<template>
  <div class="hello">
    <section>
        <h2>Button</h2>
        <j-button>注册</j-button>
        <j-button type="color-invert">button</j-button>
        <j-button href="#" type="color-invert">
            <i type="iconfont icon-write"></i>写文章</j-button>
        <j-button href="#" type="color-grey">扫码</j-button>
        <j-button href="#" type="color-green">安卓</j-button>
        <j-button href="#" type="color-blue">IOS</j-button>
        <j-button href="#" type="button-wide">查看全部 ></j-button> 
    </section>
    <section>
        <h2>Tabs</h2>
        <j-tabs></j-tabs>
    </section>    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
