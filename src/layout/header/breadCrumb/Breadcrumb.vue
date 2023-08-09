<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<template>
    <div class="breadcrumb-wrapper">
        <!-- <a-breadcrumb>
            <a-breadcrumb-item @click="$router.go(-1)" class="goback">
                <arrow-left-outlined />
                <span>back</span>
            </a-breadcrumb-item>
        </a-breadcrumb> -->
        <a-breadcrumb class="breadcrumb" separator=">">
            <template v-for="(item, index) in route.matched" :key="item.path">
                <a-breadcrumb-item v-if="item.name">
                    <router-link v-if="item.name !== route.name" :to="{ path: item.path === '' ? '/' : item.path }">
                        {{ item.meta.title }}
                    </router-link>
                    <span v-else>
                        {{ item.meta.title }}
                    </span>
                </a-breadcrumb-item>
            </template>
        </a-breadcrumb>
    </div>
</template>

<style lang="scss" scoped>
.breadcrumb-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    .breadcrumb {
        // margin-left: 20px;

        .goback {
            cursor: pointer;
        }

        .goback:hover {
            color: rgba(0, 0, 0, 0.88);
        }

        :deep(.router-link-active):hover {
            background-color: #fff;
        }
    }
}

.breadcrumb-enter,
.breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(20px);
}

.breadcrumb-move {
    transition: all .3s;
}

.breadcrumb-leave-active {
    position: absolute;
}
</style>