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
        <j-tabs>
          <j-tab-pane name="文章" :selected="true">
            <p>第十二章【为腹】 五色令人目盲；五音令人耳聋；五味令人口爽；驰骋畋猎，令人心发狂；难得之货，令人行妨；是以圣人为腹不为目，故去彼取此。</p>
          </j-tab-pane>
          <j-tab-pane name="动态">
            <p>肉福娃 段玉终于走了。 清乔再三确认他已真实离开，这才战战兢兢坐回床上。 背对牢门，她悄悄从戚先生的披风里抽出一张纸，展开纸条一看</p>            
          </j-tab-pane>
          <j-tab-pane name="热门">
            <p>1/6兵人介绍：兵人身高12寸（约30厘米高）全身关节可自由活动，制作精细，面部表情生动，都是按真实人物制作。军服和各种武器装备以实物按1/6比例精加工而成，给人以逼真的视觉</p>            
          </j-tab-pane>
        </j-tabs>
        <pre style="background: #F6F6F6">
          &lt;j-tabs&gt;
            &lt;j-tab-pane name="文章" :selected="true"&gt;
              &lt;p&gt;第十二章【为腹】 五色令人目盲；五音令人耳聋；五味令人口爽；驰骋畋猎，令人心发狂；难得之货，令人行妨；是以圣人为腹不为目，故去彼取此。&lt;/p&gt;
            &lt;/j-tab-pane&gt;
            &lt;j-tab-pane name="动态"&gt;
              &lt;p&gt;肉福娃 段玉终于走了。 清乔再三确认他已真实离开，这才战战兢兢坐回床上。 背对牢门，她悄悄从戚先生的披风里抽出一张纸，展开纸条一看&lt;/p&gt;            
            &lt;/j-tab-pane&gt;
            &lt;j-tab-pane name="热门"&gt;
              &lt;p&gt;1/6兵人介绍：兵人身高12寸（约30厘米高）全身关节可自由活动，制作精细，面部表情生动，都是按真实人物制作。军服和各种武器装备以实物按1/6比例精加工而成，给人以逼真的视觉&lt;/p&gt;            
            &lt;/j-tab-pane&gt;
          &lt;/j-tabs&gt;          
        </pre>
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
