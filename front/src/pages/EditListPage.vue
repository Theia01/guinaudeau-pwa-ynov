<template>
    <div class="q-pa-xl">
      <Back></Back>
      <h3>Modifier liste : {{ title }}</h3>
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
        <q-btn label="Modifier" type="submit" color="primary"/>
        <q-btn label="Annuler" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
    </div>
  </template>
<script>
import Back from 'components/BackComponent.vue'
import * as ServiceLists from './../services/lists'
import { Notify } from 'quasar'

// Syntax vue2 Option API
export default {
  data: () => ({
    title: '',
    name: ''
  }),
  props: ['idlist'],
  async created () {
    const titleList = await ServiceLists.getList(this.idlist)
    this.title = titleList.data.title
    this.name = this.title
  },
  methods: {
    async onSubmit () {
      if (await ServiceLists.updateList(this.idlist, this.name)) {
        Notify.create({
          type: 'positive',
          message: `Liste ${this.name} modifié`
        })
        this.$router.push('/')
      } else {
        Notify.create({
          type: 'negative',
          message: 'Modification de la liste impossible'
        })
      }
    },
    onReset () {
      this.name = ''
    }
  },
  components: {
    Back
  }
}
</script>
