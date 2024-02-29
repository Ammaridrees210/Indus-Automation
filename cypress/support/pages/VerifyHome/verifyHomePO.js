export class homeVerify{
    clickCrossIconOnPOpUp(){
        return cy.get('[title="Close dialog"]')
    }

    homePageverify(){
        return cy.get('a')
    }
    clickOnNavBarSchedule(){
        return cy.get('[routerlink="/schedulingTab"]')
    }

    homePageVerify() {
        this.clickCrossIconOnPOpUp().click()
        this.homePageverify().should('contain', 'Schedule')
        this.clickOnNavBarSchedule().click()        
    }

}