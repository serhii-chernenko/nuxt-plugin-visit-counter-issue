<template>
  <div>
    <NuxtRouteAnnouncer />
    Visits: {{ visits }}
  </div>
</template>

<script setup lang="ts">
const { data: visits } = await useFetch('/api/visit', {
  server: false
});
</script>
