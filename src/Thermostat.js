'use strict';

function Thermostat() {
    this._currentTemp = 20;
    this._maxTemp = 25;
    this._powerSaving = true;
}

Thermostat.prototype.temp = function() {
    return this._currentTemp;
};

Thermostat.prototype.up = function(num) {
    if((this._currentTemp + num) > this._maxTemp)  {
        throw new Error('Cannot exceed max temperature of ' + this._maxTemp);
    }
    this._currentTemp += num;
};

Thermostat.prototype.down = function(num) {
	if((this._currentTemp - num) < 10) {
		throw new Error('Cannot lower temperature below 10');
	}
    this._currentTemp -= num;
};

Thermostat.prototype.reset = function() {
	this._currentTemp = 20;
};

Thermostat.prototype.isPowerSavingOn = function() {
	return this._powerSaving;
};

Thermostat.prototype.switchPowerSaving = function() {
	if(this._powerSaving === true) {
		this._powerSaving = false;
		this._maxTemp = 32;
	} else {
		this._powerSaving = true;
		this._maxTemp = 25;
	}
};

Thermostat.prototype.energyUsage = function() {
	if(this._currentTemp < 18) { return "Low usage"; }
	if(this._currentTemp < 25) { return "Medium usage"; }
	return "High usage";
};
