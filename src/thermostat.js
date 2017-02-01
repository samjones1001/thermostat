'use strict'

function Thermostat() {
  this.MINIMUM_TEMP = 10;
  this._temp = 20;
  this.powerSaveStatus = true;
};

var thermostat = new Thermostat()

Thermostat.prototype.getCurrentTemp = function(){
  return this._temp
};
Thermostat.prototype.increase = function(){
  this._temp += 1;
};
Thermostat.prototype.decrease = function() {
  if (!this.isMinimumTemp()){
    this._temp -= 1;
}};
Thermostat.prototype.isMinimumTemp = function(){
  return this._temp === this.MINIMUM_TEMP;
};
Thermostat.prototype.isPowerSave = function () {
  return this.powerSaveStatus;
};
Thermostat.prototype.powerSaveOff = function () {
  this.powerSaveStatus = false;
};
Thermostat.prototype.powerSaveOn = function () {
  this.powerSaveStatus = true;
};
