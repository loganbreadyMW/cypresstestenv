/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
Cypress.Commands.add("createTodo", (todo: string) => {
  cy.get('[data-testid="add-todo-input"]').should("exist").click().type(todo);
  cy.get('[data-testid="add-todo-button"]').should("exist").click();
});

Cypress.Commands.add("networkCreateTodo", (todo: string) => {
  cy.intercept("POST", "/todos", {
    statusCode: 201,
    body: {
      title: todo,
    },
  });
});

declare namespace Cypress {
  interface Chainable<Subject> {
    createTodo: (todo: string) => void;
    networkCreateTodo: (todo: string) => void;
  }
}
