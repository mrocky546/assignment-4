function cubeNumber(n) {
    return Math.pow(n, 3);
  }
  
  
  const one = cubeNumber(3)
  
  console.log(one)
  
  
  
  
  
  function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
      return "Both inputs should be strings.";
    }
    if (!isNaN(string1) || !isNaN(string2)) {
      return "please enter a  number";
    }
    return string1.includes(string2);
  }
  
  console.log(matchFinder("Hello", "hh")); // null
  
  function processArray(arr) {
    if (!Array.isArray(arr) || arr.length !== 2) {
      return "invalid";
    }
  
    if (arr[0] === arr[1]) {
      return "equal";
    }
  
    if (arr.includes(-5)) {
      return "invalid";
    }
  
    return [arr[1], arr[0]];
  }
  
  console.log(processArray([1, 1]));     // 'equal'
  console.log(processArray([1, 2]));     // [2, 1]
  console.log(processArray([1, -5]));    // 'invalid'
  console.log(processArray([2, 1])); // [2, 1]
  console.log(processArray([-5, 1]));    // 'invalid'
  console.log(processArray([1, 3, 5]));  // 'invalid'
  
  function processArray(arr) {
    if (!Array.isArray(arr) || arr.length !== 2) {
      return "invalid";
    }
  
    if (arr[0] === arr[1]) {
      return "equal";
    }
  
    if (arr.includes(-1)) {
      return "invalid";
    }
  
    if (arr[0] > arr[1]) {
      return arr;
    }
  
    return [arr[1], arr[0]];
  }
  
  console.log(processArray([1, 1]));
  console.log(processArray([1, 2]));
  console.log(processArray([1, -5]));
  console.log(processArray([2, 1]));
  console.log(processArray([5, 1]));
  console.log(processArray([-5, 1]));
  console.log(processArray([1, 3, 5]));
  console.log(processArray([5, 2]));
  
  function processArray(arr) {
    if (!Array.isArray(arr)) {
      return "invalid";
    }
  
    if (arr.length === 2) {
      if (arr[0] === arr[1]) {
        return "equal";
      }
  
      if (arr.some((value) => value < 0)) {
        return "invalid";
      }
  
      const nonNegativeArr = arr.filter((value) => value >= 0);
  
      if (arr.length === nonNegativeArr.length) {
        return nonNegativeArr.sort((a, b) => b - a);
      }
  
      return "invalid";
    }
  
    return "invalid";
  }
  
  console.log(processArray([1, 1])); // 'equal'
  console.log(processArray([1, 2])); // [2, 1]
  console.log(processArray([1, -5])); // 'invalid'
  console.log(processArray([2, 1])); // [2, 1]
  console.log(processArray([5, 1])); // [5, 1]
  console.log(processArray([-5, 1])); // 'invalid'
  console.log(processArray([1, 3, 5])); // [5, 3, 1]
  console.log(processArray([5, 2])); // [5, 2]
  console.log(processArray([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [9, 8, 7, 6, 5, 4, 3, 2, 1]
  console.log(processArray([1])); // 'invalid'
  console.log(processArray("test")); // 'invalid'
  
  function formatObject(obj) {
    if (typeof obj !== "object" || obj === null) {
      return "Invalid input";
    }
  
    const result = [];
  
    if (obj.hasOwnProperty("street")) {
      result.push(obj.street);
    } else {
      result.push("__");
    }
  
    if (obj.hasOwnProperty("house")) {
      result.push(obj.house);
    } else {
      result.push("__");
    }
  
    if (obj.hasOwnProperty("society")) {
      result.push(obj.society);
    } else {
      result.push("__");
    }
  
    return result.join(", ");
  }
  
  const obj1 = { street: 10, society: "Earth Perfect" };
  
  console.log(formatObject(obj1));
  
  
  
  
  
  function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray)) {
      return "Invalid changeArray input";
    }
  
    for (const value of changeArray) {
      if (typeof value !== "number") {
        return "Invalid changeArray input";
      }
    }
  
    if (typeof totalDue !== "number") {
      return "Invalid totalDue input";
    }
  
    let sumChange = 0;
  
    for (let i = 0; i < changeArray.length; i++) {
      sumChange += changeArray[i];
    }
  
    return sumChange >= totalDue;
  }
  console.log(canPay())