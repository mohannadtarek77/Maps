/**********************************************************************************************************************
 * This file contains the Test Cases for the Navigation of PIPs to Tuft and Needle's Headquarters
 ***********************************************************************************************************************/
import Navigation from "../../pages/mapNavigation-page";
//importing Navigation from ""../../pages/mapNavigation-page"

import Route from "../../pages/route-page";
//importing Route from ""../../pages/route-page"

import Directions from "../../pages/directions-page";
//importing Directions from ""../../pages/directions-page"

import GasStations from "../../pages/gasStations-page";
//importing GasStations from ""../../pages/gasStations-page"

import NavigationType from "../../pages/navigationType-page"
// importing NavigationType from "../../pages/navigationType-page"

let navigationPage = new Navigation();
let routePage = new Route();
let directionsPage = new Directions();
let gasStationsPage = new GasStations();
let navigationTypePage = new NavigationType();

describe("Test Cases for the Navigation from PIPs Doughnuts to Tuft and Needle's Headquarters", function () {
 
  it("User searches for Pip's Original Doughnuts & Chai and validates its location in Portland,Oregon ", function() {
    navigationPage.searchForAPlace();
    // searching for Pip's Original Doughnuts & Chai and validating its location in Portland,Oregon
  });
 
  it("User enters the Starting Point and the Final Destination ", function() {
    navigationPage.submitAddress();
    // submitting the starting point and final destination address
  });

  it("User chooses the Quickest Route to a destination", function() {
    navigationPage.submitAddress();
    // submitting the starting point and final destination address
    routePage.selectQuickestRoute();
    // choosing the quickest route
  });

  it("User expands the First Direction of a selected route", function() {
    navigationPage.submitAddress();
    // submitting the starting point and final destination address
    routePage.selectQuickestRoute();
    // choosing the quickest route
    directionsPage.expandDirection();
    // expanding the direction of the chosen route
  });

  it("User searches for Gas Stations while navigating", function() {
    navigationPage.submitAddress();
    // submitting the starting point and final destination address
    gasStationsPage.searchForGasStations();
    // searches for the nearest gas stations
  });

  it("User selects a Gas Station to navigate to", function() {
    navigationPage.submitAddress();
    // submitting the starting point and the final destination address
    gasStationsPage.searchForGasStations();
    // searches for near gas stations
    gasStationsPage.selectAGasStation();
    //selects a specific gas station
  });

  it("User chooses Bus as the navigation type ", function () {
    navigationPage.submitAddress();
    // submitting the starting point and the final destination address
    navigationTypePage.selectBus();
    // choosing Bus as the the navigation type
  });
  it("User chooses Walking as the navigation type ", function () {
    navigationPage.submitAddress();
    // submitting the starting point and the final destination address
    navigationTypePage.selectWalking();
    // choosing Walking as the the navigation type
  });
  it("User chooses Cycling as the navigation type", function () {
    navigationPage.submitAddress();
    // submitting the starting point and the final destination address
    navigationTypePage.selectCycling();
    // choosing Cycling as the the navigation type
  });
  it("User chooses Airplane as the navigation type ", function () {
    navigationPage.submitAddress();
    // submitting the starting point and the final destination address
    navigationTypePage.selectAirplane();
    // choosing Airplane as the the navigation type
  });
});
