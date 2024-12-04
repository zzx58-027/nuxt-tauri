<script setup lang="ts">
const { data } = await useFetch("/test", { method: "get" });
</script>

<template>
  <pre>{{ data }}</pre>
</template>
