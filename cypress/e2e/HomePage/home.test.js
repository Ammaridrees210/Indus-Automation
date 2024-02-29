import { loginvisit } from "../../support/pages/VerifyLogin/visitLoginPO";
import { login } from "../../support/pages/login/loginPO";
import { homeVerify } from "../../support/pages/VerifyHome/verifyHomePO";
import { Schedule } from "../../support/pages/Schedule and dispatch a job/SchedulePO"
import "cypress-iframe";
const landingPage = new loginvisit();
const loginpage = new login();
const home = new homeVerify();
const Schedulejob = new Schedule();

describe("Redirect and login into the Industrack", () => {
  //wrap Fixture data
  beforeEach(() => {
    cy.fixture("indus").then((indus) => {
      cy.wrap(indus).as("indusData");
    });
    //Contains Iframe and Uncaught Error Handler
    cy.visit("/");
  
    // Wait for the iframe to load
    cy.wait(6000);
  
    // Handling Uncaught Error
    Cypress.on("uncaught:exception", (err) => {
      console.error("Cypress detected uncaught exception: ", err);
      return false;
    });
  
    // Get the body of the iframe
    cy.iframe('iframe[title="Popup CTA"]').then(($iframe) => {
      // Find the close button within the iframe's body
      const closeButton = $iframe.find("#interactive-close-button");
  
      // If close button exists, click it
      if (closeButton.length) {
        closeButton.click();
        cy.log("Closed the popup");
      } else {
        cy.log("Close button not found in the iframe's body.");
      }
    });
  });

  it("should visit the login page", () => {
    //Assertion
    landingPage.loginPageVerify();
  });

  it("should login into Industrack", () => {
    cy.get("@indusData").then((indusData) => {
      loginpage.loginData(indusData);
    });
  });

  it("should visit Home page", () => {
    cy.get("@indusData").then((indusData) => {
      loginpage.loginData(indusData);
      home.homePageVerify();
    });
  });

  it.only("should Schedule and dispatch a job ", () => {
    cy.get("@indusData").then((indusData) => {
      loginpage.loginData(indusData);
      home.homePageVerify();
      // cy.wait(5000);
      Schedulejob.Schedulejob(indusData.Schedulejob);
    });
  });
});
