/**********************************************************************************************************************
 * This page object file is used for the Gas Stations page
 *
 * It contains all needed functions to interact with the Gas Stations page
 ***********************************************************************************************************************/
let data = require("../fixtures/mapNavigation.json")

class GasStations {
    checkForGasStationsList() {
        return assert.isOk(data.gasStationsList)
        // TDD assertion on the search of the gas stations 
    }
    checkForAddedGasStation() {
        return assert.isOk(data.addedStationField)
        // TDD assertion on the added gas station to the search field
    }

    clickOnGasStations() {
        return cy.get(".section-categorical-shortcut-primary >[data-query='Gas stations']").click()
        // click on gas stations icon 
    }
    assertOnGasStationList() {
        return cy.get(".section-layout>.section-result").should("be.visible")
        // BDD assertion asserting that the gas stations list is visible
    }
    assertOnAddedGasStation() {
        return cy.get("#sb_ifc53 > .tactile-searchbox-input").type(data.addedStation).should("have.value", data.addedStation)
        // BDD assertion asserting that the gas stations was added to the search field and is visible
    }
    searchForGasStations() {
        this.checkForGasStationsList()
        cy.wait(4500)
        this.clickOnGasStations()
        cy.wait(4500)
        this.assertOnGasStationList()
    }
      // searches for near gas stations

    selectAGasStation() {
        this.checkForAddedGasStation()
        cy.get(".section-layout > .section-result:nth-child(1)").click()
        cy.wait(3500)
        cy.get("button[data-value='Add stop']").click({ force: true })
        this.assertOnAddedGasStation()
    }
      //selects a specific gas station 
}
export default GasStations