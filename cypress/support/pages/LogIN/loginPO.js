export class login {
  inputLoginEmail() {
    return cy.get('[id="mat-input-0"]');
  }

  inputLoginPassword() {
    return cy.get('[id="mat-input-1"]');
  }

  clickOnLoginButton() {
    return cy.get('[type="submit"]');
  }

  loginData(data) {
    this.inputLoginEmail().type(data.email);
    this.inputLoginPassword().type(data.password);
    this.clickOnLoginButton("LOGIN").click();
  }
}
