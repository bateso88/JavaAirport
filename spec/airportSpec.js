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
      airport.clearForLanding(plane);
      expect(airport.planes()).toContain(plane);
    });
    it('throws error if airport full', function() {
      for(let i = 1; i <= airport.capacity(); i++) {
        airport.clearForLanding(plane);
      };
      expect(function() {airport.clearForLanding(plane);}).toThrowError('Airport is full!');
    });
  });
  describe('clearForTakeoff', function() {
    it('plane no longer in airport after cleared for takeoff', function() {
      airport.clearForLanding(plane);
      airport.clearForTakeoff(plane);
      expect(airport.planes()).not.toContain(plane);
    });
  });
  describe('isFull', function() {
    it('returns true if airport is full', function() {
      for(let i = 1; i <= airport.capacity(); i++) {
        airport.clearForLanding(plane);
      };
      expect(airport.isFull()).toEqual(true);
    });
    it('returns false if airport is not full', function() {
      expect(airport.isFull()).toEqual(false);
    });
  });

});