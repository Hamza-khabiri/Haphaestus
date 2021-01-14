<script>
export default {
    name: "ServicesPage",

    metaInfo: {
        title: "Services"
    },
    
    computed: {
        services() {
            return this.$page.posts.edges.map( edge => edge.node );
        }
    }
}
</script>

<page-query>
query {
  posts: allStrapiServices {
    edges{
      node{
        id,
        name,
        callToActionText,
        description
      }
    }
  }
}
</page-query>

<template>
  <DefaultLayout>
    <div class="c-services">
      <div class="c-services__header">
        <p>Browse our ever expanding catalogue of adaptable services.</p>
      </div>
      <div class="c-services__body">
        <div class="c-services__cards">
          <div
            v-for="service of services"
            :key="'service-' + service.id"
            class="c-services__card"
          >
            <div class="c-services__card-title">
              <p>{{service.name}}</p>
            </div>

            <div class="c-services__card-body">
              <p>{{
                service.description.length > 120 ?
                service.description.substring( 0, 120 ) + "..." :
                service.description
              }}</p>
              <g-link
                :to="'services/' + service.name.split(' ').join('-')"
                class="c-services__learn-more"
              >learn more</g-link>
            </div>

            <div class="c-services__card-footer">
              <button class="c-button c-button--outline">{{
                service.callToActionText
              }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>


<style>
.c-services {
  min-height: 100vh;
  background: linear-gradient( to bottom, rgba(0,0,0,0.85), #000 );
  color: #fff;
}

.c-services__header {
  padding: 8.5rem 0 5rem 0;
  background-color: rgba(0,0,0,0.85);
  background-blend-mode: darken;
  background-image: url( "../assets/images/landing-background.jpg" );
  background-size: cover;
}

.c-services__header p {
  margin: auto;
  text-align: center;
  font-size: 2rem
}

.c-services__body {
  margin: 0 20%;
}

.c-services__cards {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 2.5rem;
}

.c-services__card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 20rem;
  height: 19rem;
  margin-bottom: 2.5rem;
  border-radius: 3px;
  align-items: center;
  background: rgb(31, 31, 31);
  padding: 0.5rem 0.5rem;
  box-shadow: 0px 3px 1px 3px rgba( 0, 0, 0, 0.3 );
  border: 1px solid rgb(51, 51, 51);
}

.c-services__card-title {
  position: relative;
  width: 100%;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
  border-radius: 3px;
}
.c-services__card-title::after, .c-services__card-title::before {
  content: "";
  position: absolute;
  display: block;
  bottom: -0.5rem;
  left: 0;
  height: 2px;
  width: 100%;
  background: rgb(11, 11, 11);
}

.c-services__card-title::after {
  height: 1px;
  bottom: -0.5rem;
  background: rgb(51, 51, 51);
}

.c-services__card-body {
  margin-top: 2rem;
  padding: 0 1rem;
}

.c-services__learn-more {
  margin-top: 1.5rem;
  display: block;
  text-decoration: underline;
  cursor: pointer;
}

.c-services__card-footer {
  justify-self: flex-end;
  margin-top: 1.5rem;
}

.c-services__card-footer .c-button:hover {
  color: var( --color-primary )
}
</style>