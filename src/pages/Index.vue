<script>
import NavigationBar from "../components/NavigationBar.vue";

export default {
  name: 'LandingPage',

  metaInfo: {
    title: 'Haphaestus Labs'
  },

  components: {
    NavigationBar
  },

  computed: {
    data() {
      return this.$page.posts.edges[0].node;
    }
  }
}
</script>

<page-query>
query {
    posts: allStrapiLandingPage{
      edges{
        node{
          titlePrefix,
          title,
          titleSuffix,
          callToActionText,
          contactUsText
        }
      }
    }
}
</page-query>

<template>
<div class="v-landing-page">
  <NavigationBar />

  <div class="c-landing-page">
      <div class="c-landing-page__text">
        <p class="c-landing-page__title-prefix" v-html="data.title"></p>
          
        <h1 class="c-landing-page__title" >{{data.titlePrefix}}</h1>
        
        <p class="c-landing-page__title-suffix">{{data.titleSuffix}}</p>
        
        <div class="c-landing-page__actions">
          <g-link to="/services" class="c-button">{{
            data.callToActionText
          }}</g-link>
          
          <g-link
            to="/contact-us"
            class="c-button c-button--alt"
          >{{data.contactUsText}}</g-link>
        </div>
      </div>
  </div>
</div>
</template>

<style>
.c-landing-page {
  height: 100vh;
  padding-top: 20vh;
  background-color: rgba(0,0,0,0.85);
  background-blend-mode: darken;
  background-image: url( "../assets/images/landing-background.jpg" );
  background-size: cover;
  color: #fff;
  text-align: start;
}

.c-landing-page__text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  max-width: 70rem;
  margin: auto;
}

.c-landing-page__title {
  font-weight: unset;
  font-size: 3.5rem;
  line-height: 3.5rem;
  margin-bottom: 2rem;
  color: var( --color-primary );
  font-weight: bold;
}

.c-landing-page__title-prefix {
  font-weight: unset;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.c-landing-page__title-suffix {
  font-weight: unset;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  max-width: 50%;
}

.v-landing-page .c-navigation-bar {
  background-color: transparent;
  box-shadow: none;
}
</style>
