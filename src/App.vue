<template>
  <div class="page-container">
    <NavigationButtons />
  </div>
</template>

<script>
import axios from "axios";
import NavigationButtons from './components/NavigationButtons.vue';

export default {
  components: {
    NavigationButtons,
  },
};
</script>