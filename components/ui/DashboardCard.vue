<template>
  <UiCard>
    <UiCardHeader>
      <UiCardTitle class="flex justify-center">{{ title }}</UiCardTitle>
    </UiCardHeader>
    <UiCardDescription v-if="description">{{ description }}</UiCardDescription>
    <UiCardContent class="grid gap-4">
      <slot />
    </UiCardContent>
  </UiCard>
</template>

<script lang="ts" setup>
interface Props {
  title: string;
  description?: string;
}

const props = defineProps<Props>();
</script>

<style scoped>
</style>
