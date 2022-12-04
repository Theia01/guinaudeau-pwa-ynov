<template>
  <div>
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">{{title}}</div>
        <div class="text-subtitle2">Créer le : {{ getFormattedDate(createdAt) }} <br> Mise à jour le : {{ getFormattedDate(updatedAt) }} <br> id : {{ id }}</div>
        <q-separator inset />
        <q-card-section>
          Cette carte ne contient aucune tâches. Ajoutez en une depuis la liste !
        </q-card-section>
        <q-card-actions vertical @click="redirectList">
          <q-btn flat>Voir la liste complète</q-btn>
        </q-card-actions>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import moment from 'moment'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      required: false,
      default: null
    },
    updatedAt: {
      type: Date,
      required: false,
      default: null
    },
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    redirectList () {
      window.location = '#/list/' + this.id + '/'
    },
    getFormattedDate (date) {
      return moment(date).format('D MMMM YYYY')
    }
  }

}
</script>
