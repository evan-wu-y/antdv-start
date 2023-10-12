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
        <a-layout-sider v-model:collapsed="collapsed" collapsible class="aside" breakpoint="lg">
            <AppAside />
        </a-layout-sider>
        <a-layout class="main-container">
            <a-layout-header :style="{ padding: '0px', background: '#fff' }">
                <AppHeader v-model:collapsed="collapsed" />
            </a-layout-header>
            <a-layout-content style="padding: 10px 0px 10px 10px;;">
                <div ref="mainRef" class="main-content" @scroll="handleScroll">
                    <router-view #default="{ Component }">
                        <transition appear name="slide-fadein-right" mode="out-in">
                            <component :is="Component" />
                        </transition>
                    </router-view>
                </div>
            </a-layout-content>
        </a-layout>
    </a-layout>
    <a-back-top type="primary" :style="{ right: '50px', bottom: '50px' }" v-show="showBackTop"
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
        height: calc(100%);
        overflow-y: auto;
        overflow-x: hidden;
        // background-color: #fff;
    }
}

/* .site-layout .site-layout-background {
    background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
} */
</style>
  