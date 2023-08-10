<script setup>
import Breadcrumb from './components/Breadcrumb.vue';
import UserAvatar from './components/UserAvatar.vue';
defineProps(['collapsed'])
defineEmits(['update:collapsed'])
</script>

<template>
    <div class="main-header">
        <div class="header-left">
            <menu-unfold-outlined v-if="collapsed" class="trigger" @click="$emit('update:collapsed', !collapsed)" />
            <menu-fold-outlined v-else class="trigger" @click="$emit('update:collapsed', !collapsed)" />
            <Breadcrumb />
        </div>
        <div class="header-right">
            <UserAvatar />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.main-header {
    display: flex;
    justify-content: space-between;

    .header-left {
        display: flex;

        .trigger {
            font-size: 18px;
            line-height: 64px;
            padding: 0 24px;
            cursor: pointer;
            transition: all 0.3s;
        }

        .trigger:hover {
            color: #1890ff;
        }
    }

    .header-right {
        padding-right: 20px;
    }
}
</style>