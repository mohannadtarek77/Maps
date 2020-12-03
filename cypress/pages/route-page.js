/**********************************************************************************************************************
 * This page object file is used for the routing page
 *
 * It contains all needed functions to interact with the routing page
 ***********************************************************************************************************************/

let data = require("../fixtures/mapNavigation.json")

class Route {
    chooseRoute() {
        return cy.get("#section-directions-trip-0").click()
        // choosing the shortest route 
    }
    checkOnQuickestRoute() {
        return assert.isOk(data.quickestRouteValidation)
        // TDD assertion on the added gas station to the search field
    }
    assertOnRouteValidation() {
        return cy.get(".first-line").contains(data.startingPoint.pipsDonuts).should("be.visible")
        // BDD assertion asserting that the quickest route is chosen
    }
    selectQuickestRoute() {
        this.checkOnQuickestRoute()
        cy.wait(4000)
        this.chooseRoute()
        this.assertOnRouteValidation()
    }
    // clicking on the the shortest route and asserting on it

}
export default Route