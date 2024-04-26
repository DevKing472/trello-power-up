<template>
    <span>
      <Button label="Check" icon="pi pi-check"/>
      <br><br>
      <Calendar v-model="date" />
    </span>
  </template>



<script setup>
import { ref } from 'vue';

const date = ref(null);
</script>