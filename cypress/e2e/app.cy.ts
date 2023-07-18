describe("Todo Tests", () => {
  // Arrange, Act, Assert.
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should add a todo item", () => {
    // cy.createTodo("A New Todo Item");  //This is a custom command to create a todo.
    //Arrange
    cy.get('[data-testid="add-todo-input"]')
      .should("exist")
      //Act
      .click()
      .type("A New Todo Item")
      //Assert
      .should("have.value", "A New Todo Item");

    cy.get('[data-testid="add-todo-button"]').should("exist").click();

    //the [data-testid="todoListContainer li"] should have only one li
    cy.get('[data-testid="todoListContainer"] li').should("have.length", 1);
  });

  it("should mark a todo item as completed", () => {
    cy.get(':nth-child(1) > [style="display: flex;"] > div > input').check();
    // check if the checkbox is checked
    cy.get(':nth-child(1) > [style="display: flex;"] > div > input').should(
      "be.checked"
    );
  });

  it("should delete a todo item", () => {
    //get the first li inside of the [data-testid="todoListContainer"]
    cy.get('[data-testid="todoListContainer"] li button')
      .eq(0)
      .should("exist")
      .click();
    // the [[data-testid="todoListContainer"] should contain no li
    cy.get('[data-testid="todoListContainer"] li').should("have.length", 0);
  });
});
