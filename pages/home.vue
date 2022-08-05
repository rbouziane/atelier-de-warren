<template>
  <div class="home-landing">
    <p>Home landing</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
</script>

<style scoped lang="scss">
.home-landing {
  background-color: grey;
  height: calc(300vh - $header-size);
}
</style>
