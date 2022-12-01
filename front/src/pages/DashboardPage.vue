<template>
  <div class="q-pa-xl">
    <h2>Dashboard</h2>
    <p>{{ message }}</p>
    <List :lists="message"></List>
  </div>
</template>
<script>
import List from 'components/list/ListComponent.vue'
import * as Task from './../services/tasks'

// Syntax vue2 Option API
export default {
  data: () => ({
    message: 'Hello'
  }),
  mounted () {
    console.log('Component mounted')
  },
  async created () {
    console.log('Component created')
    this.message = await Task.getAllTasks()
  },
  computed: {
  },
  methods: {
  },
  watch: {
  },
  components: {
    List
  }
}
</script>
