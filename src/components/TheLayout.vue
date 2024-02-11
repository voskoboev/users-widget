<template>
  <div class="container">
    <div class="widget">
      <div class="widget__upper">
        <AppButton @click="handleShowModal"> Добавить </AppButton>
      </div>
      <div class="widget__lower">
        <div class="widget__lower-left">
          <TheUsers class="widget__list" />
        </div>
        <div class="widget__lower-right">
          <TheUserAdder class="widget__form" v-if="isModalVisible" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SHOW_MODAL } from "../constants/mutations";
import TheUserAdder from "../components/TheUserAdder.vue";
import TheUsers from "../components/TheUsers.vue";

export default {
  name: "TheLayout",
  
  components: {
    TheUsers,
    TheUserAdder,
  },

  computed: {
    isModalVisible() {
      return this.$store.state.isModalVisible;
    },
  },

  methods: {
    handleShowModal() {
      this.$store.commit(SHOW_MODAL);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 780px;
  padding-right: 15px;
  padding-left: 15px;
  margin: 0 auto;
}

.widget__upper {
  padding-top: 20px;
  padding-bottom: 20px;
}

.widget__lower {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 20px;
}

.widget__lower-left {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
