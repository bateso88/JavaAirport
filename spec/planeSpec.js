"use strict";

describe('plane', function() {
  let plane;
  let airport;
  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding', 'clearForTakeoff']);
  });

  it('isWorking', function() {
    expect(plane.isWorking()).toBe(true);
  });

  it('lands at an airport', function() {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });
  it('takes off from an airport', function() {
    plane.land(airport);
    plane.takeoff();
    expect(airport.clearForTakeoff).toHaveBeenCalledWith(plane);
  });
  it('takes off from an airport and no longer marks its location as at the airport', function() {
    plane.land(airport);
    plane.takeoff();
    expect(plane.currentAirport()).toEqual(null);
  });
});