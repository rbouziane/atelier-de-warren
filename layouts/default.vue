<template>
  <div class="layout-default">
    <div class="content">
      <Header />
      <slot />
    </div>
    <div class="toast-container"></div>
  </div>
</template>

<style scoped lang="scss">
.layout-default {
  .toast-container {
    position: fixed;
    top: 0;
    right: 0;
  }
}
</style>
