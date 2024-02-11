<template>
  <AppCard>
    <section class="users">
      <header class="users__header">
        <h2 class="users__title">Список пользователей</h2>
      </header>
      <div class="users__buttons-wrapper">
        <AppButton class="users__button" @click="handleSortUsersByName"
          >Имя</AppButton
        >
        <AppButton class="users__button" @click="handleSortUsersByPhoneNumber"
          >Телефон</AppButton
        >
      </div>
      <TheUsersList />
    </section>
  </AppCard>
</template>

<script>
import {
  SORT_USERS_BY_PHONE_NUMBER,
  SORT_USERS_BY_NAME,
} from "../constants/mutations";
import TheUsersList from "../components/TheUsersList.vue";

export default {
  name: "Users",

  components: {
    TheUsersList,
  },

  methods: {
    handleSortUsersByPhoneNumber() {
      this.$store.commit(SORT_USERS_BY_PHONE_NUMBER);
    },

    handleSortUsersByName() {
      this.$store.commit(SORT_USERS_BY_NAME);
    },
  },
};
</script>

<style scoped>
.users {
  min-width: 300px;
}

.users__header {
  padding-bottom: 20px;
}

.users__buttons-wrapper {
  display: flex;
}

.users__button {
  width: 50%;
  padding: 8px;
  border: 1px solid #000;
  font-size: 16px;
}
</style>
