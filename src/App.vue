<template>
  <div id="app">
    <el-comtainer>
      <el-header>
        <div class="nav">
          <router-link to="/">首页</router-link>|
          <router-link to="/about">写博客</router-link>
        </div>
      </el-header>
    </el-comtainer>

    <router-view />
    <div class="player">
      <aplayer
        autoplay
        float
        listMaxHeight='300px'
        repeat='repeat-all'
        :list='list'
        :music="list[1]"
      />
    </div>
  </div>
</template>

<script>
import aplayer from 'vue-aplayer'
export default {
  components: {
    aplayer
  },
  name: 'app',
  data () {
    return {
      list: [
        {
          title: '冬眠',
          artist: '司南',
          src: 'http://m7.music.126.net/20200302132357/c0f47ad6ebce5dbead0f4e5df41203f2/ymusic/560f/075e/535f/ae15cebedc04c39f79f6d5ac577f2977.mp3',
          pic: 'https://imgsa.baidu.com/exp/pic/item/58c3acb7d0a20cf4eba1a6887a094b36acaf9971.jpg'
        },
        {
          title: '你要相信这不是最后一天',
          artist: '华晨宇',
          src: 'http://m7.music.126.net/20200302143806/a0b9c54bb309a1dad959050b4848b375/ymusic/035d/0109/520e/478f86cc9f6c6539f7c8ed3e06c1bf8e.mp3',
          pic: 'https://imgsa.baidu.com/exp/pic/item/58c3acb7d0a20cf4eba1a6887a094b36acaf9971.jpg'
        },
        {
          title: '世间美好与你环环相扣',
          artist: '柏松',
          src: 'http://m7.music.126.net/20200302150320/1d757437e3d7531b19908439bdf943b7/ymusic/0459/045c/520c/330c359473365e50a368ef0d43bc612f.mp3',
          pic: 'https://imgsa.baidu.com/exp/pic/item/58c3acb7d0a20cf4eba1a6887a094b36acaf9971.jpg'
        },
        {
          title: '你的答案',
          artist: '阿冗',
          src: 'http://m8.music.126.net/20200302145608/ab485d2cb9fab2ed96cda0d4521c80f5/ymusic/545e/065a/530b/c413a59407100320b8f9da233b35f938.mp3',
          pic: 'https://imgsa.baidu.com/exp/pic/item/58c3acb7d0a20cf4eba1a6887a094b36acaf9971.jpg'
        }
      ]
    }
  },
  methods: {
  },
  created () {
    setTimeout(() => {
      window.L2Dwidget.init({
        pluginRootPath: 'static/live2dw/',
        pluginJsPath: 'lib/',
        pluginModelPath: 'live2d-widget-model-koharu/assets/',
        tagMode: false,
        debug: false,
        model: { jsonPath: '/static/live2dw/live2d-widget-model-koharu/assets/koharu.model.json' },
        display: { position: 'left', width: 150, height: 300 },
        mobile: { show: true },
        log: false
      })
    }, 1000)
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
  // background-image: url('http://imgsrc.baidu.com/forum/pic/item/d45afdfc1e178a822e5d9cc4f803738da877e8ea.jpg');
  // background-repeat:repeat-y;
}
.player {
  width: 300px;
  position: fixed;
  right: 50px;
  top: 50px;
}
.nav {
  padding: 20px;
  position: fixed;
  left: 0;
  width: 100%;
  z-index: 2;
  background: rgba(40, 42, 44, 0.6);
}
</style>
