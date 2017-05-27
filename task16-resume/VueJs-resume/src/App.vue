<template>
  <div id="app">
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
  </div>
</template>

<script>
  import StyleEditor from './components/StyleEditor'
  import ResumeEditor from './components/ResumeEditor'
  import './assets/reset.css'

export default {
  name: 'app',
  components: {
    StyleEditor,
    ResumeEditor
  },
  data(){
    return{
        interval: 50,
        currentStyle: '',
        enableHtml: false,
        fullStyle: [
          `/*
* Inspired by http://strml.net/ & 饥人谷 frankfang
* 您好，我是王旭 
* 感谢您抽出时间来看我的简历
* 我是一枚18年即将毕业的研究僧，想求职前端攻城狮的岗位
* 不说废话，让我们开始~
*/

/* 首先给所有元素加上过渡效果 */
* {
  -webkit-transition: all .3s;
  transition: all .3s;
}
/* 白色背景太单调了，我们来点背景 */
html {
  color: #586E75; background: #FDF6E3; 
}
/* 文字离边框太近了 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}
/* 代码高亮 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: blue; }
.token.function{ color: rgb(42,161,152); }

/* 再来加点 3D 效果 */
html{
  -webkit-perspective: 1000px;
          perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0; 
  -webkit-transition: none; 
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}

/* 接下来我给自己准备一个编辑器 */
.resumeEditor{
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: .5em;
  width: 48vw; height: 90vh; 
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}
/* 好了，我开始写简历了 */
`,
         `
/* 这个简历好像差点什么
 * 对了，这是 Markdown 格式的，我需要变成更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 */
`
          ,
          `
/* 再对 HTML 加点样式 */
.resumeEditor{
  padding: 2em;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;            
  content: counters(section, ".") " ";  
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
`],
        currentMarkdown: '',
        fullMarkdown: `王旭
====

前端工程师，硕士（2018年毕业），中国传媒大学

技能
----
* 静态页面  --- 100% 还原设计稿，像素级页面制作能力
* 动态页面  --- 熟悉 HTTP、AJAX、JSONP 等技术，了解前后端分离开发模式
* 移动端页面 -- 熟悉 CSS 3、响应式页面等
* 前端框架  --- 了解 angularJS、Vue.js 基本原理，能使用前端框架开发富交互应用

项目经历
----
1. 2015年-至今       基于社会计算的下一代web的理论和应用研究            前端负责人
    
    担任开放基金课题研究生负责人,主要负责系统数据采集和前端开发的工作；使用技术：Bootstrap框架+angularJS+HTML+CSS搭建网站以及与后端数据通信。

2. 2015年-2016年     龙信思源公司旗下味思源创业团队                     技术副主管

    主要负责HTML+CSS+JS等前端WEB技术进行网站的开发,使用mvc思想、oop面向对象思想等技术参与项目开发。

3. 2012.09 - 2013.06   微分方程在误差分析及系统稳定性中的应用            负责人

    大学生研究训练（SRT）项目主要负责人。

自我介绍
----
* 主攻前端，并对前端开发有浓厚兴趣和热情；
* 做事态度认真负责，对待问题以及BUG从不心慈手软；
* 多年养成的自学习惯，追求与时俱进，追求卓越；
* 善于总结和分析，今天的项目经验就是未来的解决方案；
* 乐于沟通交流，团队至上；
* 积极向上，抗苦，抗压，抗寂寞。

链接
----
* [GitHub](https://github.com/FrankWangXu)
* [我的文章](http://www.jianshu.com/users/877656a3059c/timeline)

> 如果感兴趣请联系我，mail：yiyunshiguang@gmail.com，tel：155 1033 5680 ~ 期待您的来信！

`
    }
  },
  created(){
    this.makeResume()
  },
methods: {
      makeResume: async function () {
        await this.progressivelyShowStyle(0)
        await this.progressivelyShowResume()
        await this.progressivelyShowStyle(1)
        await this.showHtml()
        await this.progressivelyShowStyle(2)
      },
      showHtml: function () {
        return new Promise((resolve, reject) => {
          this.enableHtml = true
          resolve()
        })
      },
      progressivelyShowStyle(n) {
        return new Promise((resolve, reject) => {
          let interval = this.interval
          let showStyle = (async function () {
            let style = this.fullStyle[n]
            if (!style) { return }
            // 计算前 n 个 style 的字符总数
            let length = this.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
            let prefixLength = length - style.length
            if (this.currentStyle.length < length) {
              let l = this.currentStyle.length - prefixLength
              let char = style.substring(l, l + 1) || ' '
              this.currentStyle += char
              if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
                this.$nextTick(() => {
                  this.$refs.styleEditor.goBottom()
                })
              }
              setTimeout(showStyle, interval)
            } else {
              resolve()
            }
          }).bind(this)
          showStyle()
        })
      },
      progressivelyShowResume() {
        return new Promise((resolve, reject) => {
          let length = this.fullMarkdown.length
          let interval = this.interval
          let showResume = () => {
            if (this.currentMarkdown.length < length) {
              this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1)
              let lastChar = this.currentMarkdown[this.currentMarkdown.length - 1]
              let prevChar = this.currentMarkdown[this.currentMarkdown.length - 2]
              console.log(prevChar)
              if (prevChar === '\n' && this.$refs.resumeEditor) {
                this.$nextTick(() => this.$refs.resumeEditor.goBottom())
              }
              setTimeout(showResume, interval)
            } else {
              resolve()
            }
          }
          showResume()
        })
      }
    }
  }

</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    min-height: 100vh;
  }
  
  * {
    -webkit-transition: all .3s;
    transition: all .3s;
  }
</style>