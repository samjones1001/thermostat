'use strict';

describe('Feature: ', function() {
    var thermostat;
    beforeEach(function(){
        thermostat = new Thermostat();
    });
    it('the temperature can be increased', function() {
        thermostat.up(2);
        expect(thermostat.temp()).toEqual(22);
    });
    it('the temperature can be decreased', function() {
        thermostat.down(2);
        expect(thermostat.temp()).toEqual(18);
    });
    it('has a minimum temperature of 10', function() {
        expect(function(){ thermostat.down(20); }).toThrowError('Cannot lower temperature below 10');
    });

    // expect(thermostat.temp()).toBeGreaterThan(9);
});
