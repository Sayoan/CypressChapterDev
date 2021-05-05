/// <reference types="cypress" />


//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/let
let buscarPetRequest = {


GetBuscarPetRequest(petId){
    var request ={
    method: 'GET',
    url: '/pet/' + petId
    }

    return request;
},

GetBuscarPetRequestFailure(petId){
    var request ={
    method: 'GET',
    url: '/pet/' + petId,
    failOnStatusCode: false    
    }

    return request;
}



}

export {buscarPetRequest}