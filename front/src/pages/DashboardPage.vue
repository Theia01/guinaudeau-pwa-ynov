<template>
  <div class="q-pa-xl">
    <h2>Dashboard</h2>
    <p>{{ lists }}</p>
    <p v-for="(item, index) in lists" v-bind:key="index">
      <List :title="item.title" :updatedAt="item.createdAt" :createdAt="item.updatedAt"></List>
    </p>
  </div>
</template>
<script>
import List from 'components/list/ListComponent.vue'
import * as Lists from './../services/lists'

// Syntax vue2 Option API
export default {
  data: () => ({
    lists: Array
  }),
  async created () {
    // const res = await Task.getAllTasks()
    const { data } = await Lists.getAllTasks()
    this.lists = data
    console.log(data)
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
