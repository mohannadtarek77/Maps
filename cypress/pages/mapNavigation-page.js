/**********************************************************************************************************************
 * This page object file is used for the home navigation page
 *
 * It contains all needed functions to interact with the home navigation page
 ***********************************************************************************************************************/

let data = require("../fixtures/mapNavigation.json")

class Navigation {
    visitUrl() {
        return cy.visit(data.url);
        //visiting the url of google maps
    }
    checkOnPipsLocation() {
        return assert.isOk(data.startingPoint.pipsLocationCheck)
        // TDD assertion on the submission of the starting point 
    }
    checkOnStartingPoint() {
        return assert.isOk(data.startingPoint.pipsDonutsSubmitted)
        // TDD assertion on the submission of the starting point 
    }
    checkOnDestination() {
        return assert.isOk(data.destination.TuftandNeedleHQSubmitted)
        // TDD assertion on the submission of the final destination
    }
    clickDirections() {
        return cy.get("#searchbox-directions").click()
        // clicking on choosing directions to choose the starting point and destination
    }
    typeStartingPoint() {
        return cy.get("#sb_ifc51 >.tactile-searchbox-input").type(data.startingPoint.pipsDonuts).should("have.value", data.startingPoint.pipsDonuts)
        // typing Pip's Original Doughnuts & Chai as the starting point 
        // BDD assertion asserting that Pip's Original Doughnuts & Chai is visible and written in the starting point field 

    }
    typeDestination() {
        return cy.get("#sb_ifc52 >.tactile-searchbox-input").type(data.destination.TuftandNeedle).should("have.value", data.destination.TuftandNeedle)
        // typing Tuft and Needle's Headquarters as the destination 
       // BDD assertion asserting that Tuft and Needle's Headquarters is visible and written in the final destination field 

    }
    clickEnter() {
        return cy.get("#sb_ifc52 >.tactile-searchbox-input").type(data.enter)
        // click enter button to search   
    } 
    searchForAPlace(){
        this.visitUrl()
        this.checkOnPipsLocation()
        cy.get("input#searchboxinput.tactile-searchbox-input").type(data.startingPoint.pipsDonuts).type(data.enter)
        cy.wait(2000)
        return cy.contains(data.startingPoint.pipsDonutsLocation).should("be.visible")
        // searching for a specific place and validating its location 
    }
    submitAddress() {
        this.visitUrl()
        this.checkOnStartingPoint()
        this.checkOnDestination()
        this.clickDirections()
        cy.wait(3000)
        this.typeStartingPoint()
        cy.wait(3000)
        this.typeDestination()
        this.clickEnter()
    }
    // submitting the starting point and the final destination address
}
export default Navigation
