var test = require('../test.js');

describe("test", function() {
  it("pow()", function() {
    
    // prepare
    var result;
    // act
    result = test.pow(2, 2);
    // assert
    expect(result).toEqual(4);
  });

  it("pow()", function() {
    // prepare
    var result;
    // act
    result = test.pow(3, 2);
    // assert
    expect(result).toEqual(9);
  });

  it("pow()", function() {
    // prepare
    var result;
    // act
    result = test.pow(3, 3);
    // assert
    expect(result).toEqual(27);
  });

  it("pow()", function() {
    // prepare
    var result;
    // act
    result = test.pow(2, 3);
    // assert
    expect(result).toEqual(8);
  });

  xit("pow()", function() {
    // prepare
    var result;
    // act
    result = test.pow(2, 3);
    // assert
    expect(result).toEqual(2);
  });
});

