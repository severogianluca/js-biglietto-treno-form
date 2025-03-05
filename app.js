
let elementDati = document.getElementById('dati')
let elementEta = document.getElementById('eta');
let elementKm = document.getElementById('km');
let formElement = document.getElementById('insertForm')






formElement.addEventListener('submit', function (event) {
    // preventDefault mi permette di non aggiornare la pagina
    // e non perdere i dati che invio
    event.preventDefault();

    let eta = elementEta.value;
    let km = parseInt(elementKm.value);
    let prezzo = km *  (0.21);
    let sconto;
    console.log(eta);
    console.log(km);
    
    
    // logica per lo sconto
    if(eta === 'minorenne'){
        sconto = ((prezzo * 20) / 100);
    
    }else if(eta === 'over-65' ){
        sconto = ((prezzo * 40) / 100);
        
    }else{
        sconto = 0;
    }
    
    prezzo = prezzo - sconto;
    prezzo = prezzo.toFixed(2);
    console.log(prezzo);
    console.log(`il prezzo del biglietto è di: ${prezzo} €`)
    
});