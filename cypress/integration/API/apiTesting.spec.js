/// <reference types="cypress" />
import {criarPetRequest} from '../../support/requests/criarPetRequest';
import {buscarPetRequest} from '../../support/requests/buscarPetRequest';

//Grupo de testes
describe('CriarPetTests', () => {
//https://medium.com/swlh/api-testing-with-cypress-d8c60ed6aa2e


//https://www.youtube.com/watch?reload=9&v=3q4l3wzFiMI
it('CriarPet_SemArquitetura', () => {
    cy.request({
        method : 'POST',
        url: '/pet',
        body : {
                "id": 100,
                "category": {
                "id": 0,
                "name": "Cachorro"
                },
                "name": "Bidu",
                "photoUrls": [
                "string"
                ],
                "tags": [
                {
                    "id": 0,
                    "name": "string"
                }
                ],
                "status": "available"
                } 
        })
        .then(response => {
            expect(response.status).equal(200) 
            cy.log("response: " + JSON.stringify(response.body));
        })  
});


it('CriarPet_Valido', () => {

    cy.request((criarPetRequest.PostCriarPetRequest("500")))

    .then(response => {
        cy.log("response: " + JSON.stringify(response.body));
        expect(response.status).equal(200)   
        expect(response.body.name).equal('Bidu')
        expect(response.body.category.name).equal('Cachorro')
     })
});

const ids = [40, 80, 90, 95]
ids.forEach(id => {
it(`CriarPet_DataDriven - ${id}`, () => {

    cy.request((criarPetRequest.PostCriarPetRequest(id)))

    .then(response => {
        cy.log("response: " + JSON.stringify(response.body));
        expect(response.status).equal(200)   
        expect(response.body.name).equal('Bidu')
        expect(response.body.category.name).equal('Cachorro')
     })
});
});


it('CriarPet_PetIdDinamico', () => {

    cy.request((criarPetRequest.PostCriarPetRequestDynamicId()))

    .then(response => {
        cy.log("response: " + JSON.stringify(response.body));
        expect(response.status).equal(200)   
        expect(response.body.name).equal('Bidu')
        expect(response.body.category.name).equal('Cachorro')
     })
});


it('CriarPet_JsonBody', () => {
    cy.fixture('criarPetRequestBody').then((jsonBody) =>
    cy.request((criarPetRequest.PostCriarPetRequestBody(jsonBody)))

    .then(response => {
        cy.log("response: " + JSON.stringify(response.body));
        expect(response.status).equal(200)   
        expect(response.body.name).equal('Bidu')
        expect(response.body.category.name).equal('Cachorro')
     })
    );
});



it('CriarPet_FluxoFuncional', () => {

    let petId

    //CriarPet
    cy.request((criarPetRequest.PostCriarPetRequestDynamicId()))
    .then(response => {
        cy.log("response PostCriarPetRequestDynamicId: " + JSON.stringify(response.body));
        expect(response.status).equal(200)   
        petId = response.body.id

        //BuscarPet
        cy.request(buscarPetRequest.GetBuscarPetRequest(petId))
        .then(response => {
            cy.log("response GetBuscarPetRequest: " + JSON.stringify(response.body));
            expect(response.status).equal(200)
            expect(response.body.id).equal(petId)      
         })
     })
});

//its: coleta uma propriedade do cy.request executado anteriormente (restringe todo o retorno para o que quero)
//should: validação do retorno da request
//then: aguarda a resposta da requisição para realizar asserções (expect)
it('CriarPet_FluxoFuncional2', () => {
    //CriarPet
    cy.request((criarPetRequest.PostCriarPetRequestDynamicId()))
    .its('body.id').should('not.be.null')
    .then(petId =>{

        //BuscarPet
        cy.request(buscarPetRequest.GetBuscarPetRequest(petId))
        .then(response => {
            expect(response.body.id).equal(petId)      
         })
     })
});


it('CriarPet_DataFromJson', () => {
    cy.fixture('configPet').then((data) =>
    cy.request((criarPetRequest.PostCriarPetRequest(data.idPet)))
    .then(response => {
        cy.log("data: " + JSON.stringify(data.idPet));
        cy.log("response: " + JSON.stringify(response.body));
        expect(response.status).equal(200)   
        expect(response.body.name).equal('Bidu')
        expect(response.body.category.name).equal('Cachorro')
     })
    );
});


}); //fim describe



