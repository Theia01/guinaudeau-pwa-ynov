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
import { Notify } from 'quasar'

// Syntax vue2 Option API
export default {
  data: () => ({
    name: ''
  }),
  methods: {
    async onSubmit () {
      if (await ServiceLists.createList(this.name)) {
        Notify.create({
          type: 'positive',
          message: `Liste ${this.name} créée`
        })
        window.location = '/#/'
      } else {
        Notify.create({
          type: 'negative',
          message: 'Création de la liste impossible'
        })
      }
    },
    onReset () {
      this.name = ''
    }
  }
}
</script>
