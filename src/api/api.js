class LocalStorageService {
  constructor(itemName) {
    this.itemName = itemName;
  }

  insertItems = (state) => {
    const stringifiedUsers = JSON.stringify(state);

    localStorage.setItem(this.itemName, stringifiedUsers);
  };

  loadItems = (commit, mutationName) => {
    const loadedItems = localStorage.getItem(this.itemName);

    if (!loadedItems) {
      return;
    }

    const parsedItems = JSON.parse(loadedItems);
    commit(mutationName, parsedItems);
  };
}

export const localStorageForUsers = new LocalStorageService("platrumUsers");
