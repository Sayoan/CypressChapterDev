/// <reference types="cypress" />

let criarPetRequest = {


PostCriarPetRequest(petId){
    var request ={
    method: 'POST',
    url: '/pet',
    body: 
    {
        "id": petId,
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
    }

    return request;
},

PostCriarPetRequestDynamicId(){
    var request ={
    method: 'POST',
    url: '/pet',
    body: 
    {
        "id": Math.floor(Math.random() * 1000),
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
    }

    return request;
},

PostCriarPetRequestBody(jsonBody){
    var request ={
    method: 'POST',
    url: '/pet',
    body: jsonBody    
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

export {criarPetRequest}