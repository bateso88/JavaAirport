"use strict";

class Airport {
  constructor(_maxCapacity = 20) {
    this._hangar = [];
    this._maxCapacity = _maxCapacity;
    this._CHANCE_OF_CLEAR_SKIES = 0.9
  }

  land(plane) {
    return true;
  }

  planes() {
    return this._hangar;
  }

  capacity() {
    return this._maxCapacity;
  }

  clearForLanding(plane) {
    if(this.isFull()) {
      throw new Error('Airport is full!');
    }
    if(this.isStormy()) {
      throw new Error('Too stormy to land!');
    }
    this._hangar.push(plane);
  }

  clearForTakeoff(plane) {
    if(this.isStormy()) {
      throw new Error('Too stormy for takeoff!');
    }
    this._hangar.pop(plane);
  }

  isFull() {
    if(this._hangar.length >= this._maxCapacity) {
      return true;
    }
    else {
      return false;
    }
  }

  isStormy() {
    return (Math.random() > this._CHANCE_OF_CLEAR_SKIES);
  }

}