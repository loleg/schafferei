<template>
    <div class="hero">
        <g-link class="boom" to="/journal">KZ98</g-link>
        <h1 class="hero-title" v-html="settings.hero_title" />
        <h2 class="hero-subtitle" v-html="settings.hero_subtitle" />
        <g-link class="button" to="/contact">Schnuppertag buchen!</g-link>
    </div>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json")
    }
  }
}
</script>

<style>
.hero {
    text-align: center;
    width: 480px;
    max-width: 100%;
    margin: 0 auto;
    padding: 4rem 0 8rem 0;
    background: purple; color: white;
}
.boom {
  transform: perspective(1500px) rotateY(35deg) rotateZ(-15deg);
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 25px 50px -12px;
  transition: transform 1s ease 0s;
  background: linear-gradient(135deg,#000 50%,#fff 50.1%);
  display: inline-block;
  width: 4em;
  position: absolute;
  top: 1em;
  left: 0.5em;
  vertical-align: middle;
  padding: 0px 1em;
  cursor: pointer;
  color: #1e5f75;
  font-size: 6rem;
  font-weight: 700;
}
.boom:hover {
  transform: perspective(3000px) rotateY(5deg);
}
.hero-title {
    font-size: 3rem;
    font-weight: 700;
    padding: 0;
    margin: 0 0 2rem 0;
}
.hero-title p,
.hero-subtitle p {
    margin: 0;
    padding: 0;
}
.hero-subtitle {
    font-size: 1.15em;
    font-weight: 400;
    line-height: 1.68;
    padding: 1em;
    margin: 0;
    color: black;
    background: white;
}
.button {
    border-radius: 1em;
    color: darkgrey;
    background: #eee;
    text-shadow: 1px 1px 3px lightgrey;
    padding: 1em; margin-top: 2em;
    display: inline-block;
    text-decoration: none;
    font-size: 125%;
    transition: transform 1s ease 0s;
}
.button:hover {
    color: lightgreen;
  transform: perspective(3000px) rotateY(5deg) scale(1.4);
}
</style>
