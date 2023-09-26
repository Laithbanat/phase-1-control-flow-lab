// Define the scuberGreetingForFeet function
function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (feet > 400 && feet <= 2000) {
    return 'That will be twenty bucks.';
  } else if (feet > 2000 && feet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

// Define the ternaryCheckCity function
function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

// Define the switchOnCharmFromTip function
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}

module.exports = { scuberGreetingForFeet, ternaryCheckCity, switchOnCharmFromTip };
