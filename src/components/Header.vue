<script setup lang="ts">
  import { ref } from 'vue';

  const showPopup = ref(false);

  interface Props {
    hideCards: boolean
  }

  const props = defineProps<Props>();
  const hideCardState = ref(props.hideCards);

  defineEmits(['randomize', 'flipHideCard']);
</script>

<template>
    <div v-if="showPopup" class="popup">
      <input type="checkbox" class="inputBox" v-model="hideCardState" @change="$emit('flipHideCard')" id="hideCardState">
      <label for="hideCardState" class="labelText">Hide Cards</label>
    </div>
    <div class="header">
        <button class="randomizeButton" @click="showPopup = !showPopup">Settings</button>
        <h1 class="title">Inazuma Eleven GO Strikers 2013 Xtreme Randomizer</h1>
        <button class="randomizeButton" @click="$emit('randomize')">Randomize</button>
    </div>
</template>

<style scoped>
.title {
  font-size: xx-large;
}

.randomizeButton {
  margin-top: 25px;
  width: 200px;
  height: 50px;
  border-radius: 15px;
  background-color: #50c878;
  cursor: pointer;
}

.header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.popup {
    margin-left: 10vw;
    margin-right: 10vw;
    margin-top: 5vh;
    margin-bottom: 5vh;
    width: 80vw;
    height: 10vw;
    background-color: #CCCCCC;
    border-radius: 15px;
}

.labelText {
  color: #333333;
  font-size: x-large;
}

.inputBox {
  zoom:2;
}

</style>