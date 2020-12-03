/**********************************************************************************************************************
 * This page object file is used for the directions page
 *
 * It contains all needed functions to interact with the directions page
 ***********************************************************************************************************************/

let data = require("../fixtures/mapNavigation.json")

class Directions{
checkOnExpandedDirection() {
    return assert.isOk(data.directionsShouldBeExpanded)
    // TDD assertion on the expansion of the directions 
}
expandDirectionDetails(){
   return cy.get("#directions-mode-group-title_0_0").click()
   // expanding the first direction in the navigation steps
}
assertOnExpandedDirection(){
    return cy.contains(data.headingDirection).should("be.visible")
  // BDD assertion asserting that the first expanded direction details is visible
}
    expandDirection(){
        this.checkOnExpandedDirection()
        cy.wait(4500)
        this.expandDirectionDetails()
        this.assertOnExpandedDirection()
    }
}
export default Directions