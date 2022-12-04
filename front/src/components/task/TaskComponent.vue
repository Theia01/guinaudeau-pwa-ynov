<template>
  <div>
    <q-card class="my-card">
      <q-item tag="label" v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="check" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{title}}</q-item-label>
          <q-item-label caption>
            Créer le : {{ getFormattedDate(createdAt) }} <br> Mise à jour le : {{getFormattedDate(updatedAt) }} <br> id : {{ id }}
          </q-item-label>
          <q-item-label caption>
            {{ description }}
          </q-item-label>
        </q-item-section>
      </q-item>
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
    description: {
      type: String,
      required: false,
      default: null
    },
    done: {
      type: Boolean,
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
      check: this.done
    }
  },
  methods: {
    getFormattedDate (date) {
      return moment(date).format('D MMMM YYYY')
    }
  }
}
</script>
