<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script lang="ts">
import { useColorMode } from '@vueuse/core';

useColorMode();

</script>