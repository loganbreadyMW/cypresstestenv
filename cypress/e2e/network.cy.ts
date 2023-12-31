describe("Network tests", () => {
  it("should add a todo and respond 200", () => {
    cy.visit("http://localhost:3000");
    const todo = "A New Todo Item";
    cy.intercept("POST", "/todos").as("createTodo");
    cy.get('[data-testid="add-todo-input"]').should("exist").click().type(todo);
    cy.get('[data-testid="add-todo-button"]').should("exist").click();
    cy.wait("@createTodo").then((interception) => {
      expect(interception.response?.statusCode).to.equal(200);
      // Additional assertions or actions based on the create response
    });
  });
});
