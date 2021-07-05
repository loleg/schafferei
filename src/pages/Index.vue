<template>
  <Layout>
    <div class="container hero-home">
      <Hero />
    </div>
    <LatestJournals :journals="$page.journals.edges" />
    <center class="social-icons">

      <a href="https://www.facebook.com/Coworking-K%C3%B6niz-102071224994379/" target="_blank" title="Facebook">
        <app-icon :icon="['fab', 'facebook']" size="4x"></app-icon>
      </a>
      <a href="https://twitter.com/CoworkingKoeniz/" target="_blank" title="Twitter">
        <app-icon :icon="['fab', 'twitter']" size="4x"></app-icon>
      </a>
      <a href="https://www.linkedin.com/company/coworking-k%C3%B6niz/" target="_blank" title="LinkedIn">
        <app-icon :icon="['fab', 'linkedin']" size="4x"></app-icon>
      </a>
      <a href="/contact" title="Contact">
        <app-icon :icon="['fa', 'envelope-open-text']" size="4x"></app-icon>
      </a>

    </center>
    <center class="feature-photo" />
  </Layout>
</template>

<page-query>
query Posts {
  journals: allJournalPost (perPage: 4) {
    edges {
      node {
        id
        path
        title
      }
    }
  }
}
</page-query>

<script>
import Hero from "@/components/Hero"
import LatestJournals from "@/components/LatestJournals"

export default {
  components: {
    Hero,
    LatestJournals
  }
}
</script>

<style scoped>
.feature-photo {
  background: url(../../static/photos/IMG_20201112_123543.jpg) no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 550px;
  width: 100%;
}
.social-icons {
  margin: 2em;
}
.social-icons a {
  margin: 1em;
}
.social-icons a:hover {
  filter: drop-shadow(5px 5px 5px lightblue)
}
</style>
