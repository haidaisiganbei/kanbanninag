<template>
  <div class="home">

    <div
      style="margin-bottom:20px;"
      v-for='(item,index) in "12311232131"'
      :key='index'
    >
      <el-card
        shadow="hover"
        class="box-card"
        style="margin-left:150px;"
      >
        <div
          slot="header"
          class="clearfix"
        >
          <span>这是标题</span>
        </div>
        <div>
          <p>懂了吧！
            那么我现在给大家简单介绍一些，非常简单！
            只需要三步！
            1.到我的百度云盘中下载，这些个你的老婆，有好多！你们老婆作者的github地址，https://github.com/EYHN/hexo-helper-live2d 你们先去拜访一下老丈人，感兴趣可以star一下！
            然后咱们看再看看，你的老丈人给你提供了，哪些个老婆。风格迥异，各取所需！
            https://huaji8.top/post/live2d-plugin-2.0/!
            我的网盘：https://pan.baidu.com/s/1cvkqdrn9UO9_Embw84i0Cg 不好使群里找我要，或者看我</p>
        </div>
      </el-card>
    </div>
    <el-pagination
  small
  layout="prev, pager, next"
  :total="50">
</el-pagination>
  <el-backtop></el-backtop>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {

    }
  }
}
</script>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 80%;
  }
</style>
