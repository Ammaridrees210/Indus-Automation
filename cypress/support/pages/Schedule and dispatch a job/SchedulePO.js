export class Schedule{
    VerifySchedulePageVisit(){
        return cy.get('[class="btn btn-primary btn-sm dropdown-toggle"]').should('contain', 'Actions')
    }

    clickOnActionDropDown(){
        return cy.get('button').contains('Actions')
    }

    selectDropDownOption(){
        return cy.get('a').contains('Add unassigned Job')
    }

    verifyAddNewJobVisible(){
        return cy.get('h4').contains('Add New Job')
    }

    clickONSelectCustomer(){
        return  cy.get('#partservsearch')
    }

    clickSelectCustomerFeild(){
        return cy.get('#partservsearch')
    }

    SelectCustomer(){
        return cy.get('b').contains('Bristol, Sonya')
    }

    inputJobDecription(){
        return cy.get('#jobName')
    }

    selectJobPriority(){
        return cy.get('#jobPriority')
    }

    clickOnDropDownOfColor(){
        return cy.get('[class="mat-select-arrow ng-tns-c137-12"]')
    }

    clickDropDownAddColor(){
        return cy.get('[class="btn btn-link btn-block text-success"]')
    }

    addNameOfColor(){
        return cy.get('#name')
    }

    clickOnCross(){
        return cy.get('[class="mat-button-wrapper"]').contains('Cancel')
    }

    addExistJObColor(){
        return cy.get('[class="mat-option-text"]').contains('Electronics Communications')
    }

    clickJobFromDropdown(){
        return cy.get('[class="mat-select-arrow ng-tns-c137-10"]')
    }

    pickJobFromDropdown(){
        return cy.get('[class="mat-option-text"]').contains('007 Electronics Communication')
    }

    clickOnFormsDropDown(){
        return cy.get('[data-toggle="collapse"]').contains('Forms [0]')
    }

    selectFormDropDown(){
        return cy.get('body').find('[class="col-lg-4"]').find('select.form-control').select('2');
    }

    selectFromTriggerDropDown(){
        return cy.get('body').find('[class="col-lg-3"]').find('select.form-control').select(1);
    }

    clickOnADDButton(){
        return cy.get('div.col-lg-2').find('button.btn.btn-primary.btn-sm').contains('Add');
    }

    
    clickOnNavBarEmployeeHyperLink(){
        return cy.get('a').contains('Employee(s) (0)')
    }
    
    employeePagevisinble(){
        return cy.get('[class="control-label m-r-md"]').should('contain', 'Add Crew')
    }

    clickOnBoxContainEmployeesGroup(){
        return cy.get('[class="curlabel form-control"]')
    }

    inputEmployeeName(){
        return cy.get('[placeholder="Filter"]')
    }

    clickEmployeeName(){
        return cy.get('#multiselect-35384-0-')
    }

    clickOnDispatchButton(){
        return cy.get('[class="btn btn-info"]').contains('Dispatch Now')
    }
    Schedulejob(indus){
        this.VerifySchedulePageVisit()
        this.clickOnActionDropDown().click()
        this.selectDropDownOption().click()
        this.verifyAddNewJobVisible()
        this.clickSelectCustomerFeild().click()
        this.SelectCustomer().click()
        this.inputJobDecription().type(indus.description)
        this.selectJobPriority().select(indus.priority)
        this.clickOnDropDownOfColor().click()
        this.clickDropDownAddColor().click()
        this.addNameOfColor().type(indus.colorName)
        this.clickOnCross().click()
        this.clickOnDropDownOfColor().click()
        this.addExistJObColor().click()
        this.clickJobFromDropdown().click()
        this.pickJobFromDropdown().click()
        this.clickOnFormsDropDown().click()
        this.selectFormDropDown() 
        this.selectFromTriggerDropDown()
        this.clickOnADDButton().click()
        this.clickOnNavBarEmployeeHyperLink().click()
        this.employeePagevisinble()
        this.clickOnBoxContainEmployeesGroup().click()
        this.inputEmployeeName().type(indus.name)
        this.clickEmployeeName().click()
        this.clickOnDispatchButton().click()
    }
}