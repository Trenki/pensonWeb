<template>
  <div class="Clock">
    <div class="clock-face">
      <div class="hand hour-hand" :style="{transform: 'rotate(' + hourDeg + 'deg)'}"></div>
      <div class="hand min-hand" :style="{transform: 'rotate(' + minDeg + 'deg)'}"></div>
      <div class="hand second-hand" :style="{transform: 'rotate(' + secDeg + 'deg)'}"></div>
    </div>
    <div class="dateblock">
      <div class="date">{{year}}-{{month}}-{{date}}</div>
      <div class="week">{{week}}</div>
      <div class="time">{{format(hour)}}:{{format(min)}}:{{format(sec)}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      hour: 0,
      min: 0,
      sec: 0,
      week: null,
      increaseSec: 0,
      year: 0,
      month: 0,
      date: 0,
      hourDeg: 0,
      minDeg: 0,
      secDeg: 0
    };
  },
  methods: {
    timing() {
      this.sec++;
      this.secDeg = this.sec * 6;
      if (this.sec > 59) {
        this.sec = this.sec % 60;
        this.min++;
      }
      if (this.min > 59) {
        this.min = this.sec % 60;
        this.hour++;
      }
      this.minDeg = this.min * 6 + this.sec/10;
      this.hourDeg = (this.hour % 12) * 30 + this.min / 2 + this.sec/120;
    },
    format(num) {
      if (num < 10) {
        return "0" + num;
      } else {
        return num;
      }
    }
  },
  created() {
    const nowDate = new Date();
    const weekArr = [
      "星期日",
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六"
    ];
    this.sec = nowDate.getSeconds();
    this.min = nowDate.getMinutes();
    this.hour = nowDate.getHours();
    this.week = weekArr[nowDate.getDay()];
    this.year = nowDate.getFullYear();
    this.month = this.format(nowDate.getMonth() + 1);
    this.date = this.format(nowDate.getDate());
    this.hourDeg = (this.hour % 12) * 30;
    this.minDeg = this.min * 6;
    this.secDeg = this.sec * 6;

    setInterval(this.timing, 1000);
  }
};
</script>
<style lang="stylus" scoped>
.Clock
  width 100%
  min-height 100vh
  background #000 url('./../assets/picture1.jpg')
  background-size cover
  display flex
  justify-content center
  align-items center
.clock-face
  position relative
  height 3rem
  width 3rem
  border-radius 50%
  background rgba(0, 0, 0, 0.4)
  box-shadow 0 0 2px 4px rgba(0, 0, 0, 0.1), 0 0 10px 3px rgba(0, 0, 0, 0.2), 0 0 1px 2px #EFEFEF inset, 0 0 30px 0 black inset
.hand
  position absolute
  background #fff
  left 50%
  bottom 50%
  transform-origin 50% 100%
  transform rotate(0deg)
  margin-left -0.05rem
.hour-hand
  width 0.1rem
  height 38%
  border-top-right-radius 0.05rem
  border-top-left-radius 0.05rem
  margin-left -0.05rem
.min-hand
  width 0.05rem
  height 43%
  border-top-right-radius 0.05rem
  border-top-left-radius 0.05rem
  margin-left -0.025rem
.second-hand
  width 0.03rem
  height 48%
  border-top-right-radius 0.05rem
  border-top-left-radius 0.05rem
  background red
  margin-left -0.015rem
.clock-face::after
  content ''
  display block
  width 0.15rem
  height 0.15rem
  background-color #a8c5d1
  position absolute
  left 50%
  top 50%
  transform translate(-50%, -50%)
  border-radius 50%
.dateblock
  font-size 0.7rem
  line-height 0.9rem
  color #fff
  margin-left 0.5rem
</style>
 
