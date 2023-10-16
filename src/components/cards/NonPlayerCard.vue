<script setup lang="ts">
import AbstractCard from './AbstractCard.vue';

interface Props {
  name: String;
  prefix: String;
  revealed: boolean;
}

defineProps<Props>();
defineEmits(['reveal']);
</script>

<template>
  <AbstractCard
    @reveal="$emit('reveal')"
    :name="name"
    :img_name="name"
    :prefix="prefix"
    :revealed="revealed"
  />
</template>
