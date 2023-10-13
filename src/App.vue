<script setup lang="ts">
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
</script>

<template>
  <sidebar-menu :menu="menu" :collapsed="true" :relative="true" width="100vw" />

  <RouterView />
</template>
