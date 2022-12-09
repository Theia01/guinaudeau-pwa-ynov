<template>
    <div class="q-pa-xl">
      <Back></Back>
      <h3>Créer une nouvelle tâche </h3>
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
        <q-btn label="Créer" type="submit" color="primary"/>
        <q-btn label="Retour à la liste" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
    </div>
  </template>
<script>
import Back from 'components/BackComponent.vue'
import * as ServiceTasks from './../services/tasks'
import { Notify } from 'quasar'

// Syntax vue2 Option API
export default {
  data: () => ({
    name: '',
    description: ''
  }),
  props: ['idlist'],
  methods: {
    async onSubmit () {
      if (await ServiceTasks.createTask(this.idlist, this.name, this.description)) {
        Notify.create({
          type: 'positive',
          message: `Tâche ${this.name} créée`
        })
        this.name = ' '
        this.description = ''
      } else {
        Notify.create({
          type: 'negative',
          message: 'Création de la tâche impossible'
        })
      }
    },
    onReset () {
      this.$router.push('/list/' + this.idlist)
    }
  },
  components: {
    Back
  }
}
</script>
