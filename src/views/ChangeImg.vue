<template>
  <div class="ChangeImg">
    <h2>
      Update
      <span class="title">CSS</span> Variables with
      <span class="title">JS</span>
    </h2>
    <div class="controls">
      <div class="wrap">
        <label for="spacing">Spacing:</label>
        <input
          id="spacing"
          type="range"
          max="200"
          min="10"
          v-model="spacing"
          @change="changeSpacing"
        >
      </div>
      <div class="wrap">
        <label for="blur">blur:</label>
        <input id="blur" type="range" max="25" min="0" v-model="blur" @change="changeBlur">
      </div>
      <div class="wrap">
        <label for="BaseColor">Base Color:</label>
        <input id="BaseColor" type="color" v-model="BaseColor" @change="changeColor">
      </div>
    </div>
    <img src="./../assets/picture6.jpg">
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      spacing: 10,
      blur: 2,
      BaseColor: "#ffc600"
    };
  },
  methods: {
    changeSpacing() {
      document.body.style.setProperty("--spacing", this.spacing + "px");
    },
    changeBlur() {
      document.body.style.setProperty("--blur", this.blur + "px");
    },
    changeColor() {
      document.body.style.setProperty("--base", this.BaseColor);
    }
  },
  created() {}
};
</script>
<style>
:root {
  --spacing: 10px;
  --blur: 2px;
  --base: #ffc600;
  --fontSize: 10px;
}
</style>
<style scoped>
.ChangeImg {
  text-align: center;
  background: #193549;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-size: calc(3 * var(--fontSize));
  font-family: "helvetica neue", sans-serif;
  font-weight: 600;
  color: white;
  width: 100%;
  overflow: hidden;
}
h2 {
  margin-top: 20px;
  margin-bottom: 30px;
}
.title {
  color: var(--base);
}
.controls {
  display: flex;
  justify-content: center;
  font-weight: 100;
  margin-bottom: calc(5 * var(--fontsize));
}
.controls .wrap {
  display: flex;
  justify-content: space-between;
  margin: 5px auto;
  align-items:center;
}
.controls .wrap label {
  margin-left: 20px;
}
.controls .wrap input {
  position: relative;
  top: 3px;
  width: 100px;
  height: 10px;
}
.controls .wrap input[type=color]{
  height: 20px;
}
.controls .wrap #base {
  top: -3px;
}
img {
  display: block;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 550px;
  height: 366.5px;
  padding: var(--spacing);
  filter: blur(var(--blur));
  background-color: var(--base); /*背景颜色填充内容、内边距、边框，作为打底色*/
}
</style>
 
