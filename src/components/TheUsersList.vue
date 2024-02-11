<template>
  <ul>
    <TheUsersListItem v-for="user in users" :user="user" :key="user.id" />
  </ul>
</template>

<script>
import TheUsersListItem from "../components/TheUsersListItem.vue";

export default {
  name: "TheUsersList",

  components: {
    TheUsersListItem,
  },

  computed: {
    users() {
      return this.$store.state.users;
    },
  },

  methods: {
    saveUsersToLocalStorage() {
      this.$store.dispatch("saveUsersToLocalStorage");
    },
  },

  created() {
    this.$store.dispatch("loadUsersFromLocalStorage");
    window.addEventListener("beforeunload", this.saveUsersToLocalStorage);
  },

  beforeDestroy() {
    window.removeEventListener("beforeunload", this.saveUsersToLocalStorage);
  },
};
</script>
