<script setup>
import { RouterView } from 'vue-router';
import { theme } from 'ant-design-vue';
</script>

<template>
  <a-config-provider :theme="{
    algorithm: theme.compactAlgorithm,
  }">
    <RouterView />
  </a-config-provider>
</template>

<style scoped></style>
