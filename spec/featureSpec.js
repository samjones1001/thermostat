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
    it('can switch power saving mode off', function() {
        thermostat.switchPowerSaving();
        expect(thermostat._maxTemp).toBe(32);
    });
    it('can switch power saving mode on', function() {
        thermostat.switchPowerSaving();
        thermostat.switchPowerSaving();
        expect(thermostat._maxTemp).toBe(25);
    });

    // expect(thermostat.temp()).toBeGreaterThan(9);
});
