<template>
    <div class="hero">
        <g-link class="boom" to="/journal">Kö298</g-link>
        <h1 class="hero-title" v-html="settings.hero_title" />
        <h2 class="hero-subtitle" v-html="settings.hero_subtitle" />
        <g-link class="button" to="/projects/winterpause-2022/">Vorübergehend geschlossen</g-link>
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
    /* background: rgba(75,4,26,0.8); */
    /* color: white; */
}
.boom {
  background: url('../../static/verein.png') no-repeat;
  background-size: contain;
  width: 120px; height: 120px;
  position: absolute;
  top: 1em;  left: 0.5em;
  font-size: 0px;
  transition: transform 1s ease 0s;
}
.badaboom {
  transform: perspective(1500px) rotateY(35deg) rotateZ(-15deg);
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 25px 50px -12px;
  transition: transform 1s ease 0s;
  background: linear-gradient(135deg,#fee 50%,#fff 50.1%);
  display: inline-block;
  width: 5em;
  position: absolute;
  top: 1em;
  left: 0.5em;
  vertical-align: middle;
  padding: 0px 0.4em;
  cursor: pointer;
  color: #1e5f75;
  font-size: 6rem;
  font-weight: 700;
  text-decoration: none;
}
.boom:hover {
  transform: perspective(3000px) rotateY(5deg);
}
@media (max-width: 660px) {
    .boom { display: none; }
}

.hero-title {
    font-size: 3rem;
    font-weight: 700;
    /* margin: 0 0 2rem 0; */
    margin: 0px;
    padding: 1em 0px;
    background: rgba(75,4,26,0.8);
    color: white;
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
    border-radius: 0.2em;
    border: 5px solid rgba(75,4,26,0.8);

    color: #000;
    /* background: #aeb; */
    background: #fcc;
    text-shadow: 1px 1px 3px white;
    padding: 1em; margin-top: 2em;
    display: inline-block;
    text-decoration: none;
    font-size: 125%;
    transition: transform 1s ease 0s;
}
.button:hover {
    color: blue;
  transform: perspective(3000px) rotateY(5deg) scale(1.4);
}
</style>
