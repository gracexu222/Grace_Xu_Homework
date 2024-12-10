// Array containing library users
export const libraryUsers = [
  {
    fullName: "Alice Johnson",
    username: "alicej",
    email: "alice.johnson@email.com",
    password: "drowssap1encoded", // This is an encoded password
  },
  {
    fullName: "Bob Smith",
    username: "bobsmith",
    email: "bob.smith@email.com",
    password: "drowssap2encoded", // This is an encoded password
  },
];

// Function to encode password by reversing the characters and adding "encoded"
export const encodeLibraryPassword = (password) => {
  return password.split("").reverse().join("") + "encoded";
};

// Function to decode the password by removing "encoded" and reversing the characters back
export const decodeLibraryPassword = (encryptedPassword) => {
  const rawPassword = encryptedPassword.replace("encoded", "");
  return rawPassword.split("").reverse().join("");
};

// Function to fetch a user by username. Throws an error if user is not found.
export const getLibraryUserByUsername = async (username) => {
  const user = libraryUsers.find((user) => user.username === username);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

// Function to verify if the provided password matches the encrypted password
export const verifyLibraryPassword = async (password, encryptedPassword) => {
  const decodedPassword = decodeLibraryPassword(encryptedPassword);
  if (decodedPassword !== password) {
    throw new Error("Invalid password");
  }
  return true; // Password is valid
};

// Function to register a new user. Throws an error if the username or email is already in use.
export const registerLibraryUser = async (
  fullName,
  username,
  email,
  password
) => {
  // Check if the username or email is already in use
  const existingUser = libraryUsers.find(
    (user) => user.username === username || user.email === email
  );
  if (existingUser) {
    throw new Error("Username or email is already in use");
  }

  // Encode the password
  const encodedPassword = encodeLibraryPassword(password);

  // Create a new user and add them to the array
  const newUser = {
    fullName,
    username,
    email,
    password: encodedPassword,
  };

  libraryUsers.push(newUser);

  return { message: "User registered successfully", user: newUser };
};

// Function to handle login logic
export const libraryLogin = async (username, password) => {
  try {
    const user = await getLibraryUserByUsername(username);
    const isPasswordValid = await verifyLibraryPassword(
      password,
      user.password
    );
    if (isPasswordValid) {
      // Simulate generating an authentication token
      const token = "library_auth_token";
      return { ...user, token }; // Return user details with token
    }
  } catch (error) {
    return error.message; // Return the error message if login fails
  }
};
