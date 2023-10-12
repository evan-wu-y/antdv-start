<script setup>

</script>

<template>
    <a-dropdown :arrow="{ pointAtCenter: true }">
        <a class="ant-dropdown-link" @click.prevent>
            Tom
            <DownOutlined />
        </a>
        <template #overlay>
            <a-menu>
                <a-menu-item>
                    <a href="javascript:;">1st menu item</a>
                </a-menu-item>
                <a-menu-item>
                    <a href="javascript:;">2nd menu item</a>
                </a-menu-item>
                <a-menu-item>
                    <a href="javascript:;">3rd menu item</a>
                </a-menu-item>
            </a-menu>
        </template>
    </a-dropdown>
</template>

<style lang="scss" scoped></style>