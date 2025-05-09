// Перше рішення з використанням filter(), map(), reduce()

let getTotalBalanceByGender = (users, gender) => {
  return users
    .filter((user) => user.gender === gender)
    .map((user) => user.balance)
    .reduce((acc, current) => acc + current, 0);
};


// Друге рішення з використанням if and reduce()

// let getTotalBalanceByGender = (users, gender) => {
//   return users.reduce((acc, current) => {
//     if (current.gender === gender) {
//       return acc + current.balance
//     }
//     else {
//       return acc
//     }
//   }, 0)
// }




// Третє рішення з використанням if and forEach()

// let getTotalBalanceByGender = (users, gender) => {
//   let totalBalance = 0;
//   users.forEach(user => {
//     if (user.gender === gender) {
//       totalBalance += user.balance
//     }
//   })
//   return totalBalance;
// };




const clients = [
  {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811,
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821,
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793,
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278,
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951,
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498,
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764,
  },
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863
