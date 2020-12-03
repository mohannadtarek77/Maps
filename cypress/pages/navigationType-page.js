/**********************************************************************************************************************
 * This page object file is used for the Navigation Type page
 *
 * It contains all needed functions to interact with the Navigation Type page
 ***********************************************************************************************************************/

let data = require("../fixtures/mapNavigation.json");

class NavigationType {
  checkOnSelection() {
    return assert.isOk(data.selectedNavigationType);
    // TDD assertion on the selection of navigation type
  }
  assertOnSelectionList() {
    return cy.get("#section-directions-trip-0").should("be.visible");
    // BDD assertion asserting that the selected navigation type was selected and visible
  }
  selectBus() {
    this.checkOnSelection();
    cy.get(
      "[data-travel_mode='3']>button>.directions-travel-mode-icon"
    ).click();
    cy.wait(3500)
    return this.assertOnSelectionList();
  }
  // selecting the Bus as the navigation type

  selectWalking() {
    this.checkOnSelection();
    cy.get(
      "[data-travel_mode='2']>button>.directions-travel-mode-icon"
    ).click();
    cy.wait(3500)
    return this.assertOnSelectionList();
  }
  // selecting the Walking as the navigation type

  selectCycling() {
    this.checkOnSelection();
    cy.get(
      "[data-travel_mode='1']>button>.directions-travel-mode-icon"
    ).click();
    cy.wait(3500)
    return this.assertOnSelectionList();
  }
  // selecting the Cycling as the navigation type

  selectAirplane() {
    this.checkOnSelection();
    cy.get(
      "[data-travel_mode='4']>button>.directions-travel-mode-icon"
    ).click();
    cy.wait(3500)
    return this.assertOnSelectionList();
  }
  // selecting the Airplane as the navigation type
}
export default NavigationType;
