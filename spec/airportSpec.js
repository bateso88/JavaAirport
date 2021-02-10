"use strict";


describe('Airport', function() {
  
  let airport;
  let plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane', ['land']);
  });
  describe('planes', function() {
    it('should be empty by default', function() {
      expect(airport.planes()).toEqual([]);
    });
  });
  describe('airport clear for landing', function() {
    it('planes can land at airports', function() {
      spyOn(airport,'isStormy').and.returnValue(false);
      airport.clearForLanding(plane);
      expect(airport.planes()).toContain(plane);
    });
    it('throws error if airport full', function() {
      spyOn(airport,'isStormy').and.returnValue(false);
      for(let i = 1; i <= airport.capacity(); i++) {
        airport.clearForLanding(plane);
      };
      expect(function() {airport.clearForLanding(plane);}).toThrowError('Airport is full!');
    });
    it('throws error if too stormy too land', function() {
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(function() {airport.clearForLanding(plane);}).toThrowError('Too stormy to land!');
    });
  });
  describe('clearForTakeoff', function() {
    it('plane no longer in airport after cleared for takeoff', function() {
      spyOn(airport,'isStormy').and.returnValue(false);
      airport.clearForLanding(plane);
      airport.clearForTakeoff(plane);
      expect(airport.planes()).not.toContain(plane);
    });
    it('throws an error if too stormy for takeoff', function(){
      airport._hangar.push(plane);
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(function(){ airport.clearForTakeoff(plane);}).toThrowError('Too stormy for takeoff!');
    });
  });
  describe('isFull', function() {
    it('returns true if airport is full', function() {
      spyOn(airport,'isStormy').and.returnValue(false);
      for(let i = 1; i <= airport.capacity(); i++) {
        airport.clearForLanding(plane);
      };
      expect(airport.isFull()).toEqual(true);
    });
    it('returns false if airport is not full', function() {
      expect(airport.isFull()).toEqual(false);
    });
  });
  describe('maxCapacity', function() {
    it('can be set to a non-default value', function() {
      let newAirport = new Airport(18);
      expect(newAirport.capacity()).toEqual(18);
    });
  });
});