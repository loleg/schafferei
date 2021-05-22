<template>
  <Layout>
    <div class="container hero-home">
      <Hero />
    </div>
    <LatestJournals :journals="$page.journals.edges" />
    <center><img
        src="../../static/photos/IMG_20201112_123543.jpg"
        class="photo" width="100%" style="max-width:1024px"
    /></center>
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
