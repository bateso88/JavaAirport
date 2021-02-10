"use strict";

class Airport {
  constructor() {
    this._hangar = [];
    this._maxCapacity = 20;
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