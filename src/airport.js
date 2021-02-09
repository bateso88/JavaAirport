"use strict";

class Airport {
  constructor() {
    this._hangar = [];
  }

  land(plane) {
    return true;
  }

  planes() {
    return this._hangar;
  }

  clearForLanding(plane) {
    this._hangar.push(plane);
  }

  clearForTakeoff(plane) {
    this._hangar.pop(plane);
  }

}