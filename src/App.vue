<template>
  <div id="app">
    <div id="nav" v-show="$route.meta.navShow">
      <router-link to="/">Home</router-link> |
      <router-link to="/DrumKit">DrumKit</router-link> | 
      <router-link to="/Clock">Clock</router-link> | 
      <router-link to="/ChangeImg">ChangeImg</router-link> | 
    </div>
    <router-view/>
  </div>
</template>
<script>
import pinyin from 'pinyin'
import country from "./json/country.json";
export default {
  beforeCreate() {
    var ratio;
    if (window.innerWidth > 767) {
      ratio = (window.innerWidth / 1920) * 100;
    } else {
      ratio = (window.innerWidth / 375) * 100;
    }
    document.getElementsByTagName("html")[0].style.fontSize = ratio + "px";
  },
  created(){
    console.log(pinyin("中心"));  
  //  console.log(JSON.stringify(country));  
    country.map(item =>{
      let hanzi  = item.country.split("")[0]
      item.pin = pinyin(hanzi,{style: pinyin.STYLE_NORMAL, })[0][0]
      return item
    })
    country.sort(function(a,b) {
      if(a.pin > b.pin){
        return 1
      }else{
        return -1
      }
    })
    console.log(JSON.stringify(country))
  }
};
</script>
<style lang="stylus">
html
  font-size 100px
body
  font-size 20px;
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
