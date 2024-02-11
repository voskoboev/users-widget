<template>
  <AppCard>
    <section class="adder">
      <header class="adder__upper">
        <h2 class="adder__title">Добавление пользователя</h2>
        <button class="adder__close-button" @click="handleHideModal">X</button>
      </header>
      <form class="adder__form" @submit.prevent="handleSubmitForm">
        <label class="adder__form-label">
          <span> Имя </span>
          <AppInput
            class="adder__form-input"
            type="text"
            required
            v-model.trim="name"
          />
        </label>
        <label class="adder__form-label">
          <span> Телефон </span>
          <AppInput
            class="adder__form-input"
            type="tel"
            required
            pattern="^[0-9]*$"
            v-model.number="phoneNumber"
          />
        </label>
        <label class="adder__form-label">
          <span>Начальник</span>
          <select class="adder__form-select" v-model="directorId">
            <option
              v-for="flattenedUser in flattenedUsers"
              :value="flattenedUser.id"
            >
              {{ flattenedUser.name }}
            </option>
          </select>
        </label>
        <AppButton type="submit" />
      </form>
    </section>
  </AppCard>
</template>

<script>
import { HIDE_MODAL, ADD_USER } from "../constants/mutations";

export default {
  name: "TheUserAdder",

  data() {
    return {
      name: "",
      phoneNumber: "",
      directorId: null,
    };
  },

  computed: {
    flattenedUsers() {
      return this.$store.getters.flattenedUsers;
    },
  },

  methods: {
    handleHideModal() {
      this.$store.commit(HIDE_MODAL);
    },

    clearInputs() {
      this.name = "";
      this.phoneNumber = "";
      this.directorId = null;
    },

    handleSubmitForm() {
      const newUser = {
        id: Date.now(),
        name: this.name,
        phoneNumber: this.phoneNumber,
        subs: [],
      };

      const userData = {
        newUser,
        directorId: this.directorId,
      };

      this.$store.commit(ADD_USER, userData);
      this.clearInputs();
    },
  },
};
</script>

<style scoped>
.adder__upper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  padding-bottom: 20px;
}

.adder__title {
  font-size: 20px;
}
.adder__close-button {
  width: 24px;
  height: 24px;
  border: 1px solid var(--color-accent);
  border-radius: 50%;
  color: var(--color-accent);
  line-height: 90%;
}

.adder__form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.adder__form-label {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.adder__form-input {
  min-width: 220px;
}

.adder__form-select {
  min-width: 220px;
  padding: 8px 14px;
  border: 1px solid #000;
}
</style>
