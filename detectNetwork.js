// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string

  var cardData = [{ // The American Express network always starts with a 34 or 37 and is 15 digits long
    network: 'American Express',
    prefixes: ['34', '37'],
    lengths: [15]
  },{ // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
    network: 'Diner\'s Club',
    prefixes: ['38', '39'],
    lengths: [14]
  },{ // Visa always has a prefix of 4 and a length of 13, 16, or 19.
    network: 'Visa',
    prefixes: ['4'],
    lengths: [13, 16, 19]
  },{ // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
    network: 'MasterCard',
    prefixes: ['51', '52', '53', '54', '55'],
    lengths: [16]
  },{ // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
    network: 'Discover',
    prefixes: ['6011', '644', '645', '646', '647', '648', '649', '65'],
    lengths: [16, 19]
  },{ // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
    network: 'Maestro',
    prefixes: ['5018', '5020', '5038', '6304'],
    lengths: [12, 13, 14, 15, 16, 17, 18, 19]
  }];

  //iterate the cardData array
  for(let i=0; i<cardData.length; i++){
    //check if the length of the cardNumber are includes in the "lengths" array
    if(cardData[i].lengths.includes(cardNumber.length)){
      //iterate over the "prefixes" array in the cardData[i]
      for(let j=0; j<cardData[i].prefixes.length; j++){
        //check if the prefixes of the cardNumber are match with string in the "prefixes" array
        if(cardNumber.substring(0, cardData[i].prefixes[j].length) === cardData[i].prefixes[j]){
          return cardData[i].network;
        }
      }
    }
  }
};


