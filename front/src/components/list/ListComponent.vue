<template>
  <div>
    <q-card class="my-card">
      <q-card-section>
        <div class="row justify-between">
          <div class="text-h6">
            {{title}}
          </div>
          <div>
            <q-icon class="cursor-pointer" name="more_horiz" size="2em" @click="showOptionsList"/>
          </div>
        </div>
        <div class="text-subtitle2">Créer le : {{ getFormattedDate(createdAt) }} <br> Mise à jour le : {{ getFormattedDate(updatedAt) }} <br> id : {{ id }}</div>
        <q-card-section>
          <div v-for="(item, index) in tasks" v-bind:key="index">
            <Task @deleteTask="handlegetAllTasksfromList" :title="item.title" :description="item.description" :done="item.done" :id="item._id"></Task>
          </div>
          <div v-if="(tasks.length < 1)">
            Cette carte ne contient aucune tâches. Ajoutez en une depuis la liste !
          </div>
        </q-card-section>
        <q-separator inset />
        <q-card-actions vertical @click="redirectList">
          <q-btn flat>Voir la liste complète</q-btn>
        </q-card-actions>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import moment from 'moment'
import { BottomSheet, Notify } from 'quasar'
import Task from 'components/task/TaskComponent.vue'

import * as ServiceLists from './../../services/lists'
import * as ServiceTasks from './../../services/tasks'

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
  data () {
    return {
      tasks: Array
    }
  },
  async created () {
    await this.handlegetAllTasksfromList()
  },
  methods: {
    redirectList () {
      this.$router.push('/list/' + this.id)
    },
    async handlegetAllTasksfromList () {
      const { data } = await ServiceTasks.getAllTasksfromList(this.id)
      this.tasks = data.slice(0, 2)
    },
    getFormattedDate (date) {
      return moment(date).format('D MMMM YYYY')
    },
    showOptionsList () {
      BottomSheet.create({
        message: 'List Options',
        grid: false,
        actions: [
          {
            label: 'Editer',
            icon: 'edit',
            id: 'edit'
          },
          {
            label: 'Supprimer',
            icon: 'delete',
            color: 'red',
            id: 'delete'
          }
        ]
      }).onOk(async action => {
        if (action.id === 'delete') {
          if (await ServiceLists.deleteList(this.id)) {
            this.$emit('deleteList')
          } else {
            Notify.create({
              type: 'negative',
              message: 'Impossible de supprimer la liste pour le moment'
            })
          }
        } else if (action.id === 'edit') {
          console.log('Edition non implémenter')
        }
      })
    }
  },
  components: {
    Task
  }
}
</script>
