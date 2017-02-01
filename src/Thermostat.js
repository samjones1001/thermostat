'use strict';

function Thermostat() {
    this._currentTemp = 20;
}

Thermostat.prototype.temp = function() {
    return this._currentTemp;
};

Thermostat.prototype.up = function(num) {
    this._currentTemp += num;
};

Thermostat.prototype.down = function(num) {
    this._currentTemp -= num;
};
