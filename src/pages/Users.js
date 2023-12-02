export const users = [
  {
    username: "herhangibiri",
    password: "admin",
    phoneNumber: "1234567890",
    token: "123",
  },
];

export const checkUserExists = (username, password) => {
  return users.find(
    (user) => user.username === username && user.password === password
  );
};

export const addUser = (username, password, phoneNumber, token) => {
  const newUser = { username, password, phoneNumber, token };
  users.push(newUser);
  return newUser;
};

export const getUserByUsername = (username) => {
  return users.find((user) => user.username === username) || null;
};
export const getLastLoggedInUser = () => {
  // Assuming the last logged-in user is the one with the highest index
  const lastLoggedInUser = users[users.length - 1];
  return lastLoggedInUser || null;
};
