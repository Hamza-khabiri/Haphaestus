<script>
export default {
    name: "NavigationBar",

    computed: {
        data() {
            return this.$static.links.edges[0].node;
        }
    }
}
</script>

<static-query>
query {
    links: allStrapiTopNavBar {
        edges{
            node{
                links{
                    name,
                    Url,
                    relative
                }
            }
        }
    }
}
</static-query>

<template>
<div class="c-navigation-bar">
    <div
        class="c-navigation-bar__link"
        v-for="(link, index) of data.links"
        :key="'link-' + index"    
    >
        <g-link
            v-if="link.relative"
            class="c-navigation-bar__link-anchor"
            exact-active-class="c-navigation-bar__link-anchor--active"
            :to="link.Url !== undefined ? '/' + link.Url : ''"
        >{{
            link.name
        }}</g-link>

        <a
            v-else
            class="c-navigation-bar__link-anchor"
            :href="link.Url"
        >{{link.name}}</a>
    </div>
</div>
</template>

<style>
.c-navigation-bar {
  position:absolute;
  height: var(--navbar-height);
  width: 100%;
  padding: 0 20%;
  margin: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #fff;
  font-weight: bold;
  background-color: #222;
  box-shadow: 0 2px 1px 1px rgba(0,0,0,0.1)
}

.c-navigation-bar__link {
  position: relative;
  transition: .1s ease-in-out;
}

.c-navigation-bar__link:not( :last-child ) {
  margin-right: 1.5rem
}

.c-navigation-bar__link-anchor:after {
  content: "";
  transition: .1s ease-in-out;
  display: block;
  width: 0;
  position: absolute;
  bottom: -0.125rem;
  height: 0.125rem;
  background-color: #fff;
}

.c-navigation-bar__link-anchor:hover:after {
  width: 100%;
}


.c-navigation-bar__link-anchor--active:after{
  width: 100%;
}
</style>