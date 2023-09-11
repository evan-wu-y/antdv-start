<script setup>
import { message } from 'ant-design-vue';
</script>

<template>
    <div>
        <h1>This is Test1 Page.</h1>
        <a-space wrap>
            <a-button type="primary"
                @click="message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10)">Primary
                Button</a-button>
            <a-button>Default Button</a-button>
            <a-button type="dashed">Dashed Button</a-button>
            <a-button type="text">Text Button</a-button>
            <a-button type="link">Link Button</a-button>
        </a-space>
    </div>
</template>

<style lang="scss" scoped></style>