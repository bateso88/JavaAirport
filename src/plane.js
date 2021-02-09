"use strict";

class Plane {
  constructor() {
    this._location;
  }

  currentAirport() {
    return this._location;
  }

  isWorking() {
    return true;
  }
  land(airport) {
    airport.clearForLanding(this);
    this._location = airport;
  }
  takeoff() {
    this._location.clearForTakeoff(this);
    this._location = null;
  }
}