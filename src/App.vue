<script setup lang="ts">
import { ref } from 'vue';

const menu = [
  {
    href: '/',
    title: 'Home',
    hiddenOnCollapse: true
  },
  {
    href: '/randomizer',
    title: 'Randomizer (Visible)',
    hiddenOnCollapse: true
  },
  {
    href: '/randomizer-hidden',
    title: 'Randomizer (Hidden)',
    hiddenOnCollapse: true
  },
  {
    href: '/draft-solo',
    title: 'Draft (Solo)',
    hiddenOnCollapse: true
  },
  {
    href: '/draft-double',
    title: 'Draft (Double)',
    hiddenOnCollapse: true
  }
];

const collapsed = ref(true);

function onToggleCollapse(c: boolean) {
  collapsed.value = c;
}
</script>

<template>
  <sidebar-menu
    @update:collapsed="onToggleCollapse"
    :menu="menu"
    :collapsed="true"
    :relative="true"
    width="100vw"
    widthCollapsed="100vw"
  >
    <template v-if="!collapsed" v-slot:toggle-icon>▲</template>
    <template v-else v-slot:toggle-icon>▼</template>
  </sidebar-menu>

  <RouterView />
</template>
