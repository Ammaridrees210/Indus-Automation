export class loginvisit {
  loginPageVerify() {
    cy.get(".plaintxt").should("contain", "Enter your details below.");
  }
}