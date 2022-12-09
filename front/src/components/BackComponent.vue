<template>
    <div @click="redirectBack">
        <q-icon class="cursor-pointer" name="arrow_back" size="2rem" /> Retour
    </div>
  </template>
<script>
export default {
  methods: {
    redirectBack () {
      this.$router.go(-1)
    }
  }
}
</script>
