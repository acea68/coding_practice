function diagnoseRates(data) {

    var patients = [];

    for (var i = 0; i < data.length; i++) {
      var lowHR = 'Bradycardia: ';
      var highHR = 'Tachycardia: ';
      var currentPatient = null;
      currentPatient = data[i]
      // console.log(currentPatient)
        if (currentPatient < 60) {
            lowHR += currentPatient.toString()
            // console.log(lowHR)
            patients.push(lowHR);
        } else if (currentPatient > 100) {
            patients.push(highHR += currentPatient.toString())
        } else {
          // console.log('Normal: ' + currentPatient.toString())
          patients.push('Normal: ' + currentPatient.toString());
        }    
    }
    return patients;
}

function assertEqualArrays(array1, array2, testName) {
    if(JSON.stringify(array1) === JSON.stringify(array2)) {
        console.log('passed');
    } else {
        console.log('test failed: ' + testName);
    }
}

var heartRates = [63, 117, 52, 121, 67, 43];
var actual = diagnoseRates(heartRates);
var expected = [
    'Normal: 63',
    'Tachycardia: 117',
    'Bradycardia: 52',
    'Tachycardia: 121',
    'Normal: 67',
    'Bradycardia: 43'
];
assertEqualArrays(actual, expected, 'function should return correct heartrates and diagnoses');

var heartRates2 = [161, 90, 65, 45, 101, 59];
var actual2 = diagnoseRates(heartRates2);
var expected2 = [
    'Tachycardia: 161',
    'Normal: 90',
    'Normal: 65',
    'Bradycardia: 45',
    'Tachycardia: 101',
    'Bradycardia: 59'
];
assertEqualArrays(actual2, expected2, 'function should return correct heartrates and diagnoses');