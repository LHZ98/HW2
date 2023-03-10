/*
Question 1
Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.
*/

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

// function Q1_1(itemsObject) {
//   let res = [];
//   for (let i of itemsObject) {
//     i.quantity *= 2;
//     i.price *= 2;
//     res.push(i);
//   }
//   return res;
// }

function Q1_1(itemsObject) {
  return itemsObject.map(({ quantity, price }) => ({
    quantity: quantity * 2,
    price: price * 2,
  }));
}
console.log(Q1_1(itemsObject));
function Q1_2(itemsObject) {
  let res = [];
  for (let i of itemsObject) {
    if (i.quantity > 2 && i.price > 300) {
      res.push(i);
    }
  }
  return res;
}
console.log(Q1_2(itemsObject));
function Q1_3(itemsObject) {
  let res = 0;
  for (let i of itemsObject) {
    res += i.quantity * i.price;
  }
  return res;
}
console.log(itemsObject);
console.log(Q1_3(itemsObject));
/*
  Question 2
  Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
  */

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const expectedReturnString =
  "perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

function Q2(string) {
  let res = "";
  res = string.replace(/[^A-Za-z ]/g, "");
  res = res.replace(/\s+/g, " ");
  return res.toLowerCase().trim();
}

console.log(Q2(string));

/*
  Question 3
  Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.
  */

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const expectedReturnArray = [
  { uuid: 1, role: "manager", name: null },
  { uuid: 2, role: "associate", name: "test" },
  { uuid: 3, role: null, name: "test3" },
  { uuid: 4, role: "engineer", name: null },
  { uuid: 5, role: null, name: "test5" },
  { uuid: 6, role: "pm", name: null },
];

function Q3(first, second) {
  const mymap = new Map();
  for (let i of second) {
    const myobj = {};
    myobj.uuid = i.uuid;
    myobj.role = i.role;
    myobj.name = null;
    mymap.set(i.uuid, myobj);
  }
  for (let i of first) {
    if (mymap.has(i.uuid)) {
      mymap.get(i.uuid).name = i.name;
      continue;
    }
    const myobj = {};
    myobj.uuid = i.uuid;
    myobj.role = null;
    myobj.name = i.name;
    mymap.set(i.uuid, myobj);
  }
  return [...mymap.values()].sort((a, b) => a.uuid - b.uuid);
}
console.log(Q3(first, second));
