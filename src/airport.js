"use strict";

class Airport {
  constructor(_maxCapacity = 20) {
    this._hangar = [];
    this._maxCapacity = _maxCapacity;
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
    this._hangar.push(plane);
  }

  clearForTakeoff(plane) {
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

}