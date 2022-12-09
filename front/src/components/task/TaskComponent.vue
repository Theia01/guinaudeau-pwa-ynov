<template>
  <div>
    <q-item tag="label" v-ripple>
      <q-item-section side top>
        <q-checkbox v-model="check" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{title}}</q-item-label>
        <q-item-label caption>
          {{ description }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>
<script>
import moment from 'moment'
import * as ServiceTasks from './../../services/tasks'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false,
      default: null
    },
    done: {
      type: Boolean,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      check: this.done
    }
  },
  methods: {
    getFormattedDate (date) {
      return moment(date).format('D MMMM YYYY')
    }
  },
  watch: {
    check: function (value) {
      ServiceTasks.updateBoolTask(this.id, value)
    }
  }
}
</script>
