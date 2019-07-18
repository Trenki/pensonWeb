<template>
  <div class="DrumKit">
    <div class="title">可以点击或者用键盘控制架子鼓</div>
    <div class="keys">
      <div ref="key65" class="key" @click="playDrum('65')">
        <kbd>A</kbd>
        <span class="sound">clap</span>
      </div>
      <div ref="key83" class="key" @click="playDrum('83')">
        <kbd>S</kbd>
        <span class="sound">hihat</span>
      </div>
      <div ref="key68" class="key" @click="playDrum('68')">
        <kbd>D</kbd>
        <span class="sound">kick</span>
      </div>
      <div ref="key70" class="key" @click="playDrum('70')">
        <kbd>F</kbd>
        <span class="sound">openhat</span>
      </div>
      <div ref="key71" class="key" @click="playDrum('71')">
        <kbd>G</kbd>
        <span class="sound">boom</span>
      </div>
      <div ref="key72" class="key" @click="playDrum('72')">
        <kbd>H</kbd>
        <span class="sound">ride</span>
      </div>
      <div ref="key74" class="key" @click="playDrum('74')">
        <kbd>J</kbd>
        <span class="sound">snare</span>
      </div>
      <div ref="key75" class="key" @click="playDrum('75')">
        <kbd>K</kbd>
        <span class="sound">tom</span>
      </div>
      <div ref="key76" class="key" @click="playDrum('76')">
        <kbd>L</kbd>
        <span class="sound">tink</span>
      </div>
    </div>
    <audio ref="65" src="/sounds/clap.wav"></audio>
    <audio ref="83" src="/sounds/hihat.wav"></audio>
    <audio ref="68" src="/sounds/kick.wav"></audio>
    <audio ref="70" src="/sounds/openhat.wav"></audio>
    <audio ref="71" src="/sounds/boom.wav"></audio>
    <audio ref="72" src="/sounds/ride.wav"></audio>
    <audio ref="74" src="/sounds/snare.wav"></audio>
    <audio ref="75" src="/sounds/tom.wav"></audio>
    <audio ref="76" src="/sounds/tink.wav"></audio>
  </div>
</template>
<script>
export default {
  methods: {
    keyDown(e) {
        var btn = "key"+ e.keyCode;
        this.$refs[btn].click();
        this.$refs[btn].classList.add("keyDown");
    },
    keyUp(e){
        var btn = "key"+ e.keyCode;
        this.$refs[btn].classList.remove("keyDown");
    },
    playDrum(key) {
      const audio = this.$refs[key];
      if (!audio) return;
      audio.currentTime = 0;
      audio.play();
    }
  },
  created() {
    window.addEventListener("keydown", this.keyDown);
    window.addEventListener("keyup", this.keyUp);
  }
};
</script>
<style lang="stylus" scoped>
.DrumKit
  position fixed
  top 0
  left 0
  height 100%
  width 100%
  background #000 url('./../assets/DrumKitBg.jpg')
  background-size cover
.title
  background rgba(0, 0, 0, 0.7)
  height 0.8rem
  font-size 0.4rem
  line-height 0.8rem
  color #FFC600
  margin 0.3rem 0
.title:hover
  background rgba(0, 0, 0, 1)
.keys
  display flex
  flex 1
  min-height 100vh
  align-items center
  justify-content center
.key
  border 0.04rem solid black
  border-radius 0.05rem
  margin 0.1rem
  font-size 0.2rem
  padding 0.1rem 0.05rem
  transition all 0.1s ease
  width 1.2rem
  text-align center
  color white
  background rgba(0, 0, 0, 0.4)
  text-shadow 0 0 0.05rem black
.key:active
  transform scale(1.3)
  border-color #ffc600
  box-shadow 0 0 0.1rem #ffc600
.key.keyDown
  transform scale(1.3)
  border-color #ffc600
  box-shadow 0 0 0.1rem #ffc600
kbd
  display block
  font-size 0.5rem
.sound
  line-height 0.3rem
  font-size 0.22rem
  text-transform uppercase
  letter-spacing 0.01rem
  color #ffc600
</style>

