<static-query>
query{
    links: allStrapiServices {
        edges {
            node{
                name
            }
        }
    }
}
</static-query>

<script>
export default {
    name: "ServicePage",

    computed: {
        links() {
            return this.$static.links.edges.map( edge => edge.node );
        },

        service() {
            return this.$context;
        }
    }
}
</script>

<template>
<DefaultLayout>
  <div class="c-service">
    
    <div class="c-service__header">
      <p>{{service.name}}</p>
      <p class="c-service__description">{{service.description}}</p>
    </div>

    <div class="c-service__body">
      <div>
        <div class="c-service__navigation">
          <g-link
            v-for="link of links"
            :key="'link-' + link.name"
            class="c-service__navigation-link"
            exact-active-class="c-service__navigation-link--active"
            :to="'/services/' + link.name.split(' ').join('-')"
          >{{link.name}}</g-link>
        </div>
      </div>

      <div class="c-service__content">
        <vue-simple-markdown
          :source="service.article"
          class="c-service__article"
        />
      </div>
    </div>
  </div>
</DefaultLayout>
</template>


<style>
.c-service{
  background: linear-gradient( to bottom, rgba(0,0,0,0.85), #000 );
  min-height: 100vh;
  height: 100%;
  color: #fff;
}

.c-service__header {
  padding: 8.5rem 0 5rem 0;
  background-color: rgba(0,0,0,0.85);
  background-blend-mode: darken;
  background-image: url( "../assets/images/landing-background.jpg" );
  background-size: cover;
}

.c-service__header {
  margin: auto;
  text-align: center;
  font-size: 2rem;
}

.c-service__body {
  display: flex;
  margin: 2rem 20%;
  margin-bottom: 0;
  width: 60%;
}

.c-service__navigation {
  position: relative;
  height: 100%;
  width: 15rem;
}

.c-service__navigation::before, .c-service__navigation::after {
  position: absolute;
  display: block;
  content: "";
  right: 0;
  top: 0;
  height: 100%;
  width: 3px;
  background: rgb(30,30,30);
}

.c-service__navigation::after {
  width: 2px;
  background: rgb(50,50,50);
}

.c-service__content {
  padding: 0 3rem 2rem 3rem;
  color: #fff;
}

.c-service__description {
  font-size: 1rem;
  width: 30rem;
  margin: auto;
  margin-top: 1rem;
}

.c-service__article {
  color: #fff;
  width: 100%;
}

.markdown-body pre {
  background: #2e2e2e;
}

.c-service__navigation-link {
  display: block;
  padding: 0.5rem 1rem;
}

.c-service__navigation-link:hover {
  background: #eee;
  color: #2e2e2e;
}

.c-service__navigation-link.c-service__navigation-link--active {
  background: var( --color-primary );
  color: #fff;
}
</style>