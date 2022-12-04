<template>
    <div class="q-pa-xl">
      <h2>Liste Page</h2>
      <p v-for="(item, index) in tasks" v-bind:key="index">
        <Task :title="item.title" :description="item.description" :done="item.done" :updatedAt="new Date(item.createdAt)" :createdAt="new Date(item.updatedAt)" :id="item._id"></Task>
      </p>
    </div>
  </template>
<script>
import Task from 'components/task/TaskComponent.vue'
import * as ServiceTasks from './../services/tasks'

// Syntax vue2 Option API
export default {
  data: () => ({
    tasks: Array
  }),
  async created () {
    // const res = await Task.getAllTasks()
    const { data } = await ServiceTasks.getAllTasks()
    this.tasks = data
  },
  components: {
    Task
  }
}
</script>
