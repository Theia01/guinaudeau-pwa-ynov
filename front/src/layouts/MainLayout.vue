<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Liste App
        </q-toolbar-title>
      </q-toolbar>
    </q-header> -->

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-footer elevated>
      <q-tabs
      class="bg-grey-1"
      indicator-color="purple"
      align="justify"
      >
        <q-tab>
          <q-btn
              flat
              dense
              round
              icon="menu"
              aria-label="Menu"
              class="text-grey"
              @click="toggleLeftDrawer"
            />
        </q-tab>
        <q-route-tab
          to="/list/create"
          icon="add_circle"
          class="text-purple"
          aria-label="create"
          exact
        />
        <q-route-tab
          to="/"
          icon="person"
          class="text-grey"
          aria-label="Paramètres"
          exact
        />

      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import * as ServiceLists from './../services/lists'

export default defineComponent({
  name: 'MainLayout',
  linksList: [],

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  async created () {
    const { data } = await ServiceLists.getAllLists()

    const linksList = []
    data.forEach(item => {
      linksList.push({
        title: `${item.title}`,
        link: this.$router.push('/list/' + item._id)
      })
    })

    this.linksList = linksList
  }
})
</script>
