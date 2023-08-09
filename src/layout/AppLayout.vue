<script setup>
import AppHeader from './header/AppHeader.vue';
import AppAside from './aside/AppAside.vue';
import { ref } from 'vue';
const mainRef = ref(null)
const showBackTop = ref(false)
const collapsed = ref(false);
const handleScroll = () => {
    showBackTop.value = mainRef.value.scrollTop > 200
}
</script>

<template>
    <a-layout>
        <a-layout-sider v-model:collapsed="collapsed" collapsible class="aside">
            <AppAside />
        </a-layout-sider>
        <a-layout class="main-container">
            <a-layout-header :style="{ padding: '0px', background: '#fff' }">
                <AppHeader v-model:collapsed="collapsed" />
            </a-layout-header>
            <a-layout-content>
                <div ref="mainRef" class="main-content" @scroll="handleScroll">
                    <router-view v-slot="{ Component }">
                        <transition name="slide-fade" mode="out-in">
                            <component :is="Component" />
                        </transition>
                    </router-view>
                </div>
            </a-layout-content>
        </a-layout>
    </a-layout>
    <a-back-top danger type="primary" :style="{ right: '50px', bottom: '50px' }" v-show="showBackTop"
        @click="$refs.mainRef.scrollTop = 0" />
</template>

<style lang="scss" scoped>
.aside {
    height: 100vh;
    transition: all 0.2s, background 0s, height 0s;
}

.main-container {
    height: 100vh;

    .main-content {
        height: calc(100% - 20px);
        overflow: auto;
        background-color: #fff;
        margin: 10px 0px 10px 10px;
    }
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter {
    opacity: 0;
    transform: translateX(-20px);
}

.slide-fade-leave-to {
    opacity: 0;
    transform: translateX(-20px);
}

/* .site-layout .site-layout-background {
    background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
} */
</style>
  