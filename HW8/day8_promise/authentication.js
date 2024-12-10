// Array containing users
export const users = [
  {
    name: "Leanne Graham",
    username: "Bret",
    email: "leanne.graham@email.com",
    password: "1drowssapencoded",
  },
  {
    name: "Ervin Howell",
    username: "Antonette",
    email: "ervin.howell@email.com",
    password: "2drowssapencoded",
  },
];

// Function to encode password by reversing the characters and adding "encoded"
export const encodePassword = (password) => {
  return password.split("").reverse().join("") + "encoded";
};

// Function to decode the password by removing "encoded" and reversing the characters back
export const decodePassword = (encrypted) => {
  const encryptedPassword = encrypted.replace("encoded", "");
  return encryptedPassword.split("").reverse().join("");
};

// Function to fetch a user by email. Throws an error if user is not found.
export const getUserByEmail = async (email) => {
  const user = users.find((user) => user.email === email);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

// Function to verify if the provided password matches the encrypted password
export const verifyPassword = async (password, encrypted) => {
  const decodedPassword = decodePassword(encrypted);
  if (decodedPassword !== password) {
    throw new Error("Invalid password");
  }
  return true; // Password is valid
};

// Function to handle login logic
export const login = async (email, password) => {
  try {
    const user = await getUserByEmail(email);
    const isPasswordValid = await verifyPassword(password, user.password);
    if (isPasswordValid) {
      // Assuming we generate a token (for simplicity, just returning "token" here)
      const token = "token";
      return { ...user, token }; // Return user details with token
    }
  } catch (error) {
    return error.message; // Return the error message if login fails
  }
};
