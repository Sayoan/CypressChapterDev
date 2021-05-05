/// <reference types="cypress" />


describe('Api Testing', () => {
    beforeEach(()=>{
        cy.visit('https://automacaocombatista.herokuapp.com/users/new');
    })

    afterEach(()=>{

    })

    it('CadastrarUsuario', () => {
     
        cy.get('h5.center');

        cy.get('#user_name').type('Teste');
        cy.get('#user_lastname').type('Teste');
        cy.get('#user_email').type('teste@gmail.com');
        cy.get('#user_address').type('Teste');
        cy.get('#user_university').type('Teste');
        cy.get('#user_profile').type('Teste');
        cy.get('#user_gender').type('Teste');
        cy.get('#user_age').type('18');

        cy.get('input[name="commit"]').click({force:true});

        cy.get('#notice').should('have.text', 'Usuário Criado com sucesso');

       
    });  
    
});