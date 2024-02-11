export const addUserDeeply = (users, directorId, newUser) => {
  if (!directorId) {
    users.push(newUser);
    return;
  }

  for (let user of users) {
    if (user.id === directorId) {
      user.subs.push(newUser);
    }

    if (user.subs.length > 0) {
      addUserDeeply(user.subs, directorId, newUser);
    }
  }
};

export const getFlattenedUsers = (users) => {
  const flattenedUsers = [];

  for (let user of users) {
    flattenedUsers.push(user);

    if (user.subs.length > 0) {
      flattenedUsers.push(...getFlattenedUsers(user.subs));
    }
  }

  return flattenedUsers;
};

export const sortUsersByPhoneNumberDeeply = (users, mode) => {
  if (mode === "asc") {
    users.sort((a, b) => a.phoneNumber - b.phoneNumber);
  }

  if (mode === "desc") {
    users.sort((a, b) => b.phoneNumber - a.phoneNumber);
  }

  return users.map((user) => {
    if (user.subs.length > 0) {
      user.subs = sortUsersByPhoneNumberDeeply(user.subs, mode);
    }

    return user;
  });
};

export const sortUsersByNameDeeply = (users, mode) => {
  if (mode === "asc") {
    users.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (mode === "desc") {
    users.sort((a, b) => b.name.localeCompare(a.name));
  }

  return users.map((user) => {
    if (user.subs.length > 0) {
      user.subs = sortUsersByNameDeeply(user.subs, mode);
    }

    return user;
  });
};
