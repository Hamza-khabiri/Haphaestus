<script>
import NavigationBar from "../components/NavigationBar.vue";

export default {
  components: {
    NavigationBar
  }
}
</script>

<template>
<div class="c-default-layout">
  <NavigationBar />

  <slot />
</div>
</template>

<style>
</style>
