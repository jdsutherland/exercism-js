var phone = require('./phone-number');

describe('PhoneNumber()', function() {
  it('cleans the number (123) 456-7890', function() {
    var result = phone.number('(123) 456-7890');
    expect(result).toEqual('1234567890');
  });

  it('cleans numbers with dots', function() {
    var result = phone.number('123.456.7890');
    expect(result).toEqual('1234567890');
  });

  it('valid when 11 digits and first digit is 1', function() {
    var result = phone.number('11234567890');
    expect(result).toEqual('1234567890');
  });

  it('invalid when 11 digits', function() {
    var result = phone.number('21234567890');
    expect(result).toEqual('0000000000');
  });

  it('invalid when 9 digits', function() {
    var result = phone.number('123456789');
    expect(result).toEqual('0000000000');
  });

  it('has an area code', function() {
    var result = phone.number('1234567890');
    expect(result).toEqual('1234567890');
  });

  it('formats a number', function() {
    var result = phone.number('1234567890');
    expect(result).toEqual('1234567890');
  });
});
