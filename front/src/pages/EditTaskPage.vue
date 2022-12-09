<template>
    <div class="q-pa-xl">
      <h3>Editer une tâche de la liste {{ titleList }}</h3>
      <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Nom tâche"
        hint="Pâtes, gruyère, lardon, ..."
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Stp écrit un truc']"
      />

      <q-input
        filled
        v-model="description"
        label="Description tâche"
        hint="Non obligatoire"
      />

      <div>
        <q-btn label="Mettre à jour" type="submit" color="primary"/>
        <q-btn label="Annuler" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
    </div>
  </template>
<script>
import * as ServiceTasks from './../services/tasks'
import { Notify } from 'quasar'

// Syntax vue2 Option API
export default {
  data: () => ({
    name: '',
    description: '',
    idList: '',
    titleList: ''
  }),
  props: ['idtask'],
  async created () {
    await this.handleGetTask()
  },
  methods: {
    async onSubmit () {
      if (await ServiceTasks.updateTask(this.idtask, this.name, this.description)) {
        Notify.create({
          type: 'positive',
          message: `Tâche ${this.name} modifier`
        })
        this.$router.push('/list/' + this.idList)
      } else {
        Notify.create({
          type: 'negative',
          message: 'Modification de la tâche impossible'
        })
      }
    },
    async onReset () {
      await this.handleGetTask()
    },
    async handleGetTask () {
      const { data } = await ServiceTasks.getOneTasks(this.idtask)
      this.name = data.title
      this.description = data.description
      this.idList = data.list._id
      this.titleList = data.list.title
    }
  }
}
</script>
