import Vue from "vue";
import Vuex from "vuex";
import {
  SHOW_MODAL,
  HIDE_MODAL,
  ADD_USER,
  SET_USER_AFTER_LOADING_FROM_LOCALSTORAGE,
  SORT_USERS_BY_PHONE_NUMBER,
  SORT_USERS_BY_NAME,
} from "../constants/mutations";
import { localStorageForUsers } from "../api/api";
import {
  addUserDeeply,
  getFlattenedUsers,
  getSortedUsersByPhoneNumberDeeply,
  getSortedUsersByNameDeeply,
  sortUsers,
} from "./helpers";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    isModalVisible: false,
    users: [
      {
        id: 2,
        name: "Владимир id2",
        phoneNumber: 2,
        subs: [
          {
            id: 22,
            name: "Александр id22",
            phoneNumber: 22,
            subs: [],
          },
          {
            id: 11,
            name: "Борис id11",
            phoneNumber: 11,
            subs: [],
          },
        ],
      },
      {
        id: 3,
        name: "Алексей id3",
        phoneNumber: 3,
        subs: [
          {
            id: 33,
            name: "Геннадий id33",
            phoneNumber: 33,
            subs: [],
          },
        ],
      },
      {
        id: 1,
        name: "Бронислав id1",
        phoneNumber: 1,
        subs: [],
      },
    ],
    userPhoneNumberSortingMode: "asc",
    userNameSortingMode: "asc",
  },

  getters: {
    flattenedUsers: (state) => {
      return getFlattenedUsers(state.users);
    },
  },

  mutations: {
    [SHOW_MODAL]: (state) => {
      state.isModalVisible = true;
    },

    [HIDE_MODAL]: (state) => {
      state.isModalVisible = false;
    },

    [ADD_USER]: (state, userData) => {
      addUserDeeply(state.users, userData.directorId, userData.newUser);
    },

    [SET_USER_AFTER_LOADING_FROM_LOCALSTORAGE]: (state, parsedUsers) => {
      state.users = parsedUsers;
    },

    [SORT_USERS_BY_PHONE_NUMBER]: (state) => {
      sortUsers(
        state,
        "userPhoneNumberSortingMode",
        getSortedUsersByPhoneNumberDeeply
      );
    },

    [SORT_USERS_BY_NAME]: (state) => {
      sortUsers(state, "userNameSortingMode", getSortedUsersByNameDeeply);
    },
  },

  actions: {
    saveUsersToLocalStorage: ({ state }) => {
      localStorageForUsers.insertItems(state.users);
    },

    loadUsersFromLocalStorage: ({ commit }) => {
      localStorageForUsers.loadItems(
        commit,
        SET_USER_AFTER_LOADING_FROM_LOCALSTORAGE
      );
    },
  },
});
