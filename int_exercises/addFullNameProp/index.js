// ---------------------------
// ---------------------------
function addFullNameProp(obj) {
    var firstName = obj.firstName;
    var lastName = obj.lastName;
    if (firstName && lastName) {
      obj.fullName = firstName + " " + lastName;
    }
    return obj;
  }
  function assertObjectsEqual(actual, expected, testName) {
    for (let i in expected) {
      if (actual[i] !== expected[i]) {
        return console.log(`FAILED [${testName}] Expected "` + JSON.stringify(expected) + `" and got "${JSON.stringify(actual)}".`);
      }
    }
    return console.log("passed");
  }
  let result = addFullNameProp({ firstName: "Alan", lastName: "Cea" });
  assertObjectsEqual(result,{fullName: "Alan Cea"},'add "full name" property to object');