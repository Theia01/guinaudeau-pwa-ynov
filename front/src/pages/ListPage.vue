<template>
    <div class="q-pa-xl">
      <h2>Liste {{ title }}</h2>
      <p v-for="(item, index) in tasks" v-bind:key="index">
        <Task :title="item.title" :description="item.description" :done="item.done" :updatedAt="new Date(item.createdAt)" :createdAt="new Date(item.updatedAt)" :id="item._id"></Task>
      </p>
      <p v-if="(tasks.length < 1)">
        Aucune tâche
      </p>
    </div>
  </template>
<script>
import Task from 'components/task/TaskComponent.vue'
import * as ServiceTasks from './../services/tasks'
import * as ServiceList from './../services/lists'

// Syntax vue2 Option API
export default {
  data: () => ({
    title: '',
    tasks: Array
  }),
  props: ['idlist'],
  async created () {
    const { data } = await ServiceTasks.getAllTasksfromList(this.idlist)
    this.tasks = data

    const titleList = await ServiceList.getList(this.idlist)
    this.title = titleList.data.title
  },
  components: {
    Task
  }
}
</script>
