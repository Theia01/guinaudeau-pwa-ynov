<template>
  <div class="q-pa-xl">
    <h2>Bonjour Lisa 👋</h2>
    <p v-for="(item, index) in lists" v-bind:key="index">
      <List @deleteList="handleGetAllLists" :title="item.title" :updatedAt="new Date(item.createdAt)" :createdAt="new Date(item.updatedAt)" :id="item._id"></List>
    </p>
  </div>
</template>
<script>
import List from 'components/list/ListComponent.vue'
import * as ServiceLists from './../services/lists'

// Syntax vue2 Option API
export default {
  data: () => ({
    lists: Array
  }),
  async created () {
    // const res = await Task.getAllTasks()
    await this.handleGetAllLists()
  },
  methods: {
    async handleGetAllLists () {
      const { data } = await ServiceLists.getAllLists()
      this.lists = data
    }
  },
  components: {
    List
  }
}
</script>
