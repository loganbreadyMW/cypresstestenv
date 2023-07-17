describe("Todo Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should create a new todo", () => {
    cy.get('[data-testid="add-todo-input"]')
      .should("exist")
      .click()
      .type("A New Todo");
    cy.get('[data-testid="add-todo-button"]').should("exist").click();
    cy.get('[data-testid="todoListContainer"] li').should("have.length", 1);
  });
});
