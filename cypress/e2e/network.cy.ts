describe("Network tests", () => {
  it("should send an alert on network error creating a todo", () => {
    cy.visit("http://localhost:3000");
    cy.intercept("POST", "/todos", {
      statusCode: 500,
      body: {
        error: "Internal Server Error",
      },
    }).as("createTodoNetworkError");
    cy.get('[data-testid="add-todo-input"]')
      .should("exist")
      .click()
      .type("A New Todo Item");
    cy.get('[data-testid="add-todo-button"]').should("exist").click();
    cy.wait("@createTodoNetworkError");
    //log the response body
  });
});
