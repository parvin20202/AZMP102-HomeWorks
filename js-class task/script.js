class Human {
  constructor(name, surname, age = 0, gender, nationality) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
  }
  setName(name) {
    if (name == Number) {
      console.log("ad reqem ola bilmez");
    } else {
      this.name = name;
    }
  }
  getFullName() {
    return `Name: ${this.name} Surname: ${this.surname}`;
  }
  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }
}

class User extends Human {
  constructor(
    name,
    surname,
    age,
    gender,
    nationality,
    userName,
    email,
    isAdmin,
    isLogged = false,
    password,
    bio = ""
  ) {
    super(name, surname, age, gender, nationality);
    this.userName = userName;
    this.email = email;
    this.isAdmin = isAdmin;
    this.isAdmin = isLogged;
    this.password = password;
    this.bio = bio;
  }
  currentPassword(currentPassword, newPassword) {
    if (currentPassword === this.password) {
      if (currentPassword === newPassword) {
        return "Movcud olan ve yeni password eynidir";
      } else if (newPassword >= 5) {
        this.password = newPassword;
        return "Password deyisildi";
      } else {
        return "Password uzunlugu minimum uzunlugu 5 dene olmalidir";
      }
    } else {
      return "Incorrect password";
    }
  }
  changeEmail(users, newEmail) {
    const existEmail = users.email === newEmail;
    if (!existEmail) {
      this.email = newEmail;
      return "Email deyisdirildi";
    } else {
      return "Daxil etdiyiniz email movcutdur.";
    }
  }
}
let users = [];
const user1 = new User(
  "Habil",
  "Agayev",
  1996,
  "male",
  "azerbaijan",
  "_habil_",
  "habil@gmail.com",
  false,
  false,
  "123456",
  "developer"
);
const user2 = new User(
  "Ilqar",
  "Hetemov",
  2000,
  "male",
  "azerbaijan",
  "_ilqar_",
  "ilqar00@gmail.com",
  true,
  false,
  "123456654321",
  "fronted developer"
);
const user3 = new User(
  "Zefer",
  "Qarayev",
  2005,
  "male",
  "azerbaijan",
  "zefer_05",
  "zefer@gmail.com",
  false,
  false,
  "oieryt9832",
  "design"
);
users.push(user1, user2, user3);

function sortUsersByUsername(users) {
  return users.sort();
}
function filterByBirthYear(users, year) {
  return users.filter((item) => item.getBirthYear > year);
}

function LogOut(users, username) {
  const foundUser = users.find((user) => user.username === username);
  if (!foundUser) {
    return "user not found";
  } else {
    if (!foundUser.isLogged) {
      return "user did not log in to log out!";
    } else {
      foundUser.isLogged = false;
      return "successfully logged out";
    }
  }
}
function DeleteUser(users, username) {
  const index = users.findIndex((user) => user.username === username);
  if (index !== -1) {
    users.splice(index, 1);
    return "User deleted successfully";
  } else {
    return "User not found";
  }
}
