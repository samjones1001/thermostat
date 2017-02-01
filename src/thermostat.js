'use strict'

function Thermostat() {
  this._temp = 20;
};

Thermostat.prototype.getCurrentTemp = function(){
  return this._temp
};
Thermostat.prototype.increase = function(){
  this._temp += 1;
};
Thermostat.prototype.decrease = function() {
  this._temp -= 1;
};
