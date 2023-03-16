/// <reference types="cypress"/>
describe('To Do app e2e', () => {
    beforeEach(()=> {
        cy.visit('/')
    })

    it('Adicionar um item na lista', () => {
        cy.createToDo()//cria um item na lista
        cy.get('ul[class="todo-list"] > li')
        .should('have.length', 1)//deve conter 1 item na lista, que foi adicionado
        .and("have.text", "Estudar cypress")// vai validar (assert) se foi adicionado o item Estudar cypress na lista
        
    });

    it('Remover um item da lista', () => {
        cy.createToDo()//cria um item na lista
        cy.get('.destroy').invoke('show').click()
        cy.get('ul[class="todo-list"] > li')
        .should('have.length', 0)// validar se o item foi de fato excluido da lista
    });

    it('Editar um item da lista', () => {
        cy.createToDo()//cria um item na lista
        cy.get('ul[class="todo-list"] > li').dblclick()// confirma se o item está na lista, assert
        cy.get('input[class="edit"]').clear().type("Estudar cypress e javascript").type('{enter}')
        cy.get('ul[class="todo-list"] > li').should(
        "have.text", "Estudar cypress e javascript")// assert, valida se nome do item foi trocado com sucesso.
    });

    it('Mover um item para feito', () => {
        cy.createToDo()//cria um item na lista
        cy.get('.toggle').click()
        cy.get('ul[class="todo-list"] > li').should("have.length", 1)// verifica que tem um item na lista
    });
});