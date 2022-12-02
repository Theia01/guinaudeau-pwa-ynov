<template>
    <div class="q-pa-xl">
      <h3>Créer une nouvelle liste</h3>
      <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Nom liste"
        hint="Courses, Vacances, Cadeaux, Théorie du complot, ..."
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Stp écrit un truc']"
      />

      <div>
        <q-btn label="Créer" type="submit" color="primary"/>
        <q-btn label="Annuler" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
    </div>
  </template>
<script>
import * as ServiceLists from './../services/lists'

// Syntax vue2 Option API
export default {
  data: () => ({
    name: ''
  }),
  async created () {
    // const res = await Task.getAllTasks()
    // const { data } = await Lists.getAllTasks()
    // this.lists = data
    // console.log(data)
  },
  computed: {
  },
  methods: {
    async onSubmit () {
      console.log(await ServiceLists.createList(this.name))
    },
    onReset () {
    }
  },
  watch: {
  },
  components: {
  }
}
</script>
