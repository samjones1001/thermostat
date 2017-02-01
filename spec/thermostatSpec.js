'use strict'

describe('Thermostat', function(){
  var thermostat

  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it('It starts at 20 degrees - default temp', function(){
    expect(thermostat.getCurrentTemp()).toEqual(20)
  });
  it('increases the temperature', function(){
    thermostat.increase();
    expect(thermostat.getCurrentTemp()).toEqual(21)
  });
  it('decreases the temperature', function(){
    thermostat.decrease();
    expect(thermostat.getCurrentTemp()).toEqual(19)
  });
});
