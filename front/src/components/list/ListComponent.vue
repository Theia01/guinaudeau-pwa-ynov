<template>
  <div>
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">{{title}}</div>
        <div class="text-subtitle2">Créer le : {{ createdAt }} <br> Mise à jour le : {{ updatedAt }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>

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
    }
  },
  mounted () {
    console.log('ok ' + this.title)
  }
}
</script>
