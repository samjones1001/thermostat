'use strict'

describe('Thermostat', function(){
  var thermostat

  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it('It starts at 20 degrees - default temp', function(){
    expect(thermostat.getCurrentTemp()).toEqual(20)
  });
});
