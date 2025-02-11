/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
// var FILL_ME_IN = 'Fill this value in';

// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail.
//   // To read more about mocha, visit mochajs.org

//   // Once you've read and understood this section, please comment it out.
//   // You will not be able to proceed with a failing test.

//   it('Throws an error so it fails', function() {
//     throw new Error('Delete me!');
//   });

//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });

//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });

describe('Diner\'s Club', function() {
  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }

  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }

  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = chai.assert;

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/

  // var expect = chai.expect;
  // it('has a prefix of 51 and a length of 16', function() {
  //   expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  // });

  var should = chai.should();

  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });


  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
  var should = chai.should();

  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })

});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var should = chai.should();

  var discover = {
    prefixes: ['6011', '644', '645', '646', '647', '648', '649', '65'],
    lengths: [16,19]
  };

  // iterate prefixes array
  for(let i=0; i<discover.prefixes.length; i++){
    // iterate lenghts array
    for(let j=0; j<discover.lengths.length; j++){
      // assign current string in prefixes array to cardNumberString
      let cardNumberString = discover.prefixes[i];
      // when the length of cardNumberString is less than the current number of lenghts array
      while(cardNumberString.length < discover.lengths[j]){
        // add one string to cardNumberString untill the length of current string in prefixes array is euqal to the current number of lenghts array
        cardNumberString += '1';
      }
      // check if the return value of detectNetwork(cardNumberString) is equal to 'Discover'
      it('has a prefix of ' + discover.prefixes[i] + ' and a length of ' + discover.lengths[j], function() {
        detectNetwork(cardNumberString).should.equal('Discover');
      });
    }
  }
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var should = chai.should();

  var maestro = {
    prefixes: ['5018', '5020', '5038', '6304'],
    lengths: [12, 13, 14, 15, 16, 17, 18, 19]
  };

  // iterate prefixes array
  for(let i=0; i<maestro.prefixes.length; i++){
    // iterate lenghts array
    for(let j=0; j<maestro.lengths.length; j++){
      // assign current string in prefixes array to cardNumberString
      let cardNumberString = maestro.prefixes[i];
      // when the length of cardNumberString is less than the current number of lenghts array
      while(cardNumberString.length < maestro.lengths[j]){
        // add one string to cardNumberString untill the length of current string in prefixes array is euqal to the current number of lenghts array
        cardNumberString += '1';
      }
      // check if the return value of detectNetwork(cardNumberString) is equal to 'Maestro'
      it('has a prefix of ' + maestro.prefixes[i] + ' and a length of ' + maestro.lengths[j], function() {
        detectNetwork(cardNumberString).should.equal('Maestro');
      });
    }
  }
});

describe('Switch', function() {
  // Write full test coverage for the Switch card
  var should = chai.should();

  var switchCard = {
    prefixes: ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'],
    lengths: [16, 18, 19]
  };

  // iterate prefixes array
  for(let i=0; i<switchCard.prefixes.length; i++){
    // iterate lenghts array
    for(let j=0; j<switchCard.lengths.length; j++){
      // assign current string in prefixes array to cardNumberString
      let cardNumberString = switchCard.prefixes[i];
      // when the length of cardNumberString is less than the current number of lenghts array
      while(cardNumberString.length < switchCard.lengths[j]){
        // add one string to cardNumberString untill the length of current string in prefixes array is euqal to the current number of lenghts array
        cardNumberString += '1';
      }
      // check if the return value of detectNetwork(cardNumberString) is equal to 'Switch'
      it('has a prefix of ' + switchCard.prefixes[i] + ' and a length of ' + switchCard.lengths[j], function() {
        detectNetwork(cardNumberString).should.equal('Switch');
      });
    }
  }
});

describe('China UnionPay', function() {
  // Write full test coverage for the Switch card
  var should = chai.should();

  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288
  var chinaUnionNumPrefixes = [[622126, 622925],[624, 626],[6282, 6288]];
  var chinaUnionStringPrefixes = [];
  // iterate chinaUnionNumPrefixes
  for(let i=0; i<chinaUnionNumPrefixes.length; i++){
    // iterate from first number to second number of the inner array
    for(let j=chinaUnionNumPrefixes[i][0]; j<=chinaUnionNumPrefixes[i][1]; j++){
      // push the string version of the current number into the chinaUnionStringPrefixes array
      chinaUnionStringPrefixes.push(j.toString());
    }
  }

  var chinaUnionPay = {
    prefixes: chinaUnionStringPrefixes,
    lengths: [16, 17, 18, 19]
  };

  // iterate prefixes array
  for(let i=0; i<chinaUnionPay.prefixes.length; i++){
    // iterate lenghts array
    for(let j=0; j<chinaUnionPay.lengths.length; j++){
      // assign current string in prefixes array to cardNumberString
      let cardNumberString = chinaUnionPay.prefixes[i];
      // when the length of cardNumberString is less than the current number of lenghts array
      while(cardNumberString.length < chinaUnionPay.lengths[j]){
        // add one string to cardNumberString untill the length of current string in prefixes array is euqal to the current number of lenghts array
        cardNumberString += '1';
      }
      // check if the return value of detectNetwork(cardNumberString) is equal to 'China UnionPay'
      it('has a prefix of ' + chinaUnionPay.prefixes[i] + ' and a length of ' + chinaUnionPay.lengths[j], function() {
        detectNetwork(cardNumberString).should.equal('China UnionPay');
      });
    }
  }
});