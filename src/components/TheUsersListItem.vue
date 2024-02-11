<template>
  <li class="list-item">
    <div class="list-item__upper">
      <div class="list-item__info list-item__info--name">
        {{ user.name }}
      </div>
      <div class="list-item__info list-item__info--phone-number">
        {{ user.phoneNumber }}
      </div>
    </div>
    <div class="list-item__lower">
      <ul class="list-item__sublist" v-if="hasSubusers">
        <TheUsersListItem
          v-for="subUser in user.subs"
          :user="subUser"
          :key="subUser.id"
          :style="reducingWidthStyle"
        />
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  name: "TheUsersListItem",

  props: {
    user: {
      type: Object,
      required: true,
    },
  },

  computed: {
    hasSubusers() {
      return this.user.subs && this.user.subs.length > 0;
    },

    reducingWidthStyle() {
      return { width: "96%" };
    },
  },
};
</script>

<style scoped>
.list-item__upper {
  display: flex;
  justify-content: flex-end;
}

.list_item {
  display: flex;
}

.list-item__info {
  padding: 8px;
  border: 1px solid #000;
}

.list-item__info--phone-number {
  min-width: 150px;
}

.list-item__info--name {
  width: 100%;
}

.list-item__sublist {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
