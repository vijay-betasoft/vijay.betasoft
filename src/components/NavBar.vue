<template>
    <v-card
      class="pa-12"
      color="medium dark shade of cyan darken-2"
      flat
    >
      <v-card
        elevation="12"
        width="200"
      >
        <v-navigation-drawer
          floating
          permanent
        >
          <v-list
            dense
            rounded
          >
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
  
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </v-card>
  </template>
  <script>
  export default {
    data () {
      return {
        items: [
          { title: 'Home', icon: 'mdi-view-dashboard' },
          { title: 'About', icon: 'mdi-forum' },
          { title: 'Contact us', icon: 'mdi-forum' },
          { title: 'Login', icon: 'mdi-forum' },
        ],
      }
    },
  }
</script>