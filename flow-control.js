function basicTeenager(age) {
  if (12 < age < 20) {
    return "You are a teenager!";
  }
}

function teenager(age) {
  if (12 < age < 20) {
    return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }
}

function ageChecker(age) {
  if (12 < age < 20) {
    return "You are a teenager!";
  } else if (age <= 12) {
    return "You are a kid";
  } else {
    return "You are a grownup";
  }
}

function ternaryTeenager(age) {
  12 < age < 20 ?
  "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {

}
