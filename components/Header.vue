<template>
  <div class="header-root">
    <header class="header">
      <p class="text-md">Logo warren</p>
    </header>
  </div>
</template>

<script setup lang="ts">
import { disableScrollSpy, enableScrollSpy } from '@/helpers/HeaderScroll'

onMounted(() => {
  setTimeout(() => enableScrollSpy(), 50)
})

onBeforeUnmount(() => {
  disableScrollSpy()
})
</script>

<style scoped lang="scss">
.header-root {
  .header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 32px 48px;
    transition: 0.5s all ease;
    z-index: 3;
  }

  &.scrolled {
    .header {
      backdrop-filter: blur(48px);
      border-bottom: solid 1px black;
      padding: 16px 48px;
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
}
</style>
