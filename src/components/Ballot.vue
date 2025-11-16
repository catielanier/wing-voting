<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import draggable from 'vuedraggable';
  import { wings } from '../data/choices';

  export default defineComponent({
    name: 'Ballot',
    components: { draggable },
    setup() {
      const ballot = ref<string[]>([...wings]);
      return { ballot };
    }
  });
</script>

<template>
  <div>
    <h1>Vote for your favourite Whiff City sauce flavour!</h1>
    <draggable
        v-model="ballot"
        :list="ballot"
        class="list-group"
        ghost-class="ghost"
      >
        <div
          class="list-group-item"
          v-for="element in ballot"
          :key="element"
        >
          {{ element }}
        </div>
      </draggable>
  </div>
</template>

<style>
</style>