describe("Sumador", () => {
  it("Shows the amount of the addition to the user", () => {
    cy.visit("/");
    cy.get("#primer-numero").type(4);
    cy.get("#segundo-numero").type(5);
    cy.get("#sumar-button").click();
    cy.get("#resultado-div").should("contain", "9");
  });

  it("shows decimal sums without floating-point artifacts", () => {
    cy.visit("/");
    cy.get("#primer-numero").type("0.1");
    cy.get("#segundo-numero").type("0.2");
    cy.get("#sumar-button").click();
    cy.get("#resultado-div").should("contain", "0.3");
    cy.get("#resultado-div").should(
      "not.contain",
      "0.30000000000000004"
    );
  });
});
