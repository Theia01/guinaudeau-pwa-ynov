<template>
    <div class="q-pa-xl">
      <h2>Liste {{ title }}</h2>
      <div v-for="(item, index) in tasks" v-bind:key="index">
          <q-card class="my-card">
            <Task @deleteTask="handleGetAllTasksfromList" :title="item.title" :description="item.description" :done="item.done" :id="item._id"></Task>
          </q-card>
      </div>
      <p v-if="(tasks.length < 1)">
        Aucune tâche
      </p>
      <div class="text-purple q-gutter-md" @click="redirectTask">
        <q-icon class="cursor-pointer" name="add_circle" color="text-purple" size="3rem" />
      </div>
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
    await this.handleGetAllTasksfromList()

    const titleList = await ServiceList.getList(this.idlist)
    this.title = titleList.data.title
  },
  components: {
    Task
  },
  methods: {
    redirectTask () {
      this.$router.push('/createtask/' + this.idlist)
    },
    async handleGetAllTasksfromList () {
      const { data } = await ServiceTasks.getAllTasksfromList(this.idlist)
      this.tasks = data
    }
  }
}
</script>
<style>
.my-card{
  margin-bottom: 15px;
}
</style>
