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
  });
  describe('airport clear for landing', function() {
    it('planes can land at airports', function() {
      airport.clearForLanding(plane);
      airport.clearForTakeoff(plane);
      expect(airport.planes()).not.toContain(plane);
    });
  });
});