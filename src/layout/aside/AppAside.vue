<script setup>
import NavItem from './navItem/NavItem.vue';
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const routerList = useRouter().options.routes.filter(v => v.path === "/")[0].children
const selectedKeys = computed(() => [useRoute().path]);
</script>

<template>
    <div class="aside-container">
        <div class="logo" />
        <a-menu :selectedKeys="selectedKeys" theme="dark" mode="inline" class="menu">
            <NavItem :routerList="routerList" />
        </a-menu>
    </div>
</template>

<style lang="scss" scoped>
.aside-container {
    height: 100%;
    overflow: auto;

    .logo {
        height: 32px;
        margin: 16px;
        background: rgba(255, 255, 255, 0.3);
    }
}
</style>