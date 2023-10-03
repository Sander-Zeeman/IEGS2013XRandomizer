<script setup lang="ts">
import { ref } from 'vue';
import { type Coach, type Manager, type Team, type Formation } from '@/types';
import NonPlayerCard from './NonPlayerCard.vue';

interface Props {
  coach: Coach;
  manager: Manager;
  emblem: Team;
  outfit: Team;
  formation: Formation;
  hideCards: boolean;
}

const props = defineProps<Props>();

const revealed = ref(Array(5).fill(!props.hideCards));
</script>

<template>
  <div class="CardGroup">
    <div>
      <h3 class="subtitle">Coach</h3>
      <NonPlayerCard
        @reveal="revealed[0] = true"
        :name="coach.name"
        prefix="coaches"
        :revealed="revealed[0]"
      />
    </div>
    <div>
      <h3 class="subtitle">Manager</h3>
      <NonPlayerCard
        @reveal="revealed[1] = true"
        :name="manager.name"
        prefix="managers"
        :revealed="revealed[1]"
      />
    </div>
    <div>
      <h3 class="subtitle">Outfit</h3>
      <NonPlayerCard
        @reveal="revealed[2] = true"
        :name="outfit.name"
        prefix="emblems"
        :revealed="revealed[2]"
      />
    </div>
    <div>
      <h3 class="subtitle">Emblem</h3>
      <NonPlayerCard
        @reveal="revealed[3] = true"
        :name="emblem.name"
        prefix="emblems"
        :revealed="revealed[3]"
      />
    </div>
    <div>
      <h3 class="subtitle">Formation</h3>
      <NonPlayerCard
        @reveal="revealed[4] = true"
        :name="formation.name"
        prefix="formations"
        :revealed="revealed[4]"
      />
    </div>
  </div>
</template>

<style scoped>
.subtitle {
  font-weight: bolder;
  font-size: xx-large;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 15px;
}

.CardGroup {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 4vw;
}
</style>
