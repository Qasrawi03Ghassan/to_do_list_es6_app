//Destructuring and spread/rest exercises
let arr1 = [1, 2, 3];
let arr2 = [5, 6];

let obj1 = { id: 42, name: "Ghassan" };
let obj2 = { service: "info", valid: true };
let obj3 = { ssn: 145, occupation: "SWE" };

const [a, b, c] = arr1;
const [d, v] = arr2;
const { id, name } = obj1;
const { service, valid } = obj2;
const { ssn, occupation } = obj3;

let a1 = ["Ahmad", "Ghassan", "Omar"];
let a2 = [10, 20, 30];
let combined = [...a1, ...a2];

const arrsObjs = {
  a,
  b,
  c,
  d,
  v,
  id,
  name,
  service,
  valid,
  ssn,
  occupation,
  a1,
  a2,
  combined,
};

export default arrsObjs;
