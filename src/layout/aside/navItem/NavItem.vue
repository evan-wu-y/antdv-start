<script setup>
defineProps(["routerList"])
</script>

<template>
    <template v-for="(item, index) in routerList" :key="item.path">
        <template v-if="!item.children">
            <a-menu-item v-if="!item.meta.hidden" :key="item.path">
                <component :is="item.meta.icon" />
                <span><router-link :to="item.path">{{ item.meta.title }}</router-link></span>
            </a-menu-item>
        </template>
        <template v-if="item.children && item.children.length === 1">
            <a-menu-item v-if="!item.children[0].meta.hidden" :key="item.children[0].path">
                <component :is="item.children[0].meta.icon" />
                <span><router-link :to="item.children[0].path">{{ item.children[0].meta.title }}</router-link></span>
            </a-menu-item>
        </template>
        <template v-if="item.children && item.children.length > 1">
            <a-sub-menu key="item.path">
                <template #title>
                    <span>
                        <component :is="item.meta.icon" />
                        <span>{{ item.meta.title }}</span>
                    </span>
                </template>
                <NavItem :routerList="item.children" />
            </a-sub-menu>
        </template>
    </template>
</template>

<style lang="scss" scoped></style>