<script setup>

</script>

<template>
    <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
        <template #extra>
            <a-button type="primary" @click="$router.go(-1)">Back Back</a-button>
        </template>
    </a-result>
</template>

<style lang="scss" scoped></style>