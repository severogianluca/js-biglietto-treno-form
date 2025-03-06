
let elementDati = document.getElementById('dati')
let elementEta = document.getElementById('eta');
let elementKm = document.getElementById('km');
let formElement = document.getElementById('insertForm')


formElement.addEventListener('submit', function (event) {
    // preventDefault mi permette di non aggiornare la pagina
    // e non perdere i dati che invio
    event.preventDefault();
    let dati = elementDati.value;
    let km = parseInt(elementKm.value);
    let eta = elementEta.value;

    let prezzo = km * (0.21);
    let sconto;
    console.log(dati)
    console.log(eta);
    console.log(km);


    // logica per lo sconto
    if (eta === 'minorenne') {
        sconto = ((prezzo * 20) / 100);

    } else if (eta === 'over-65') {
        sconto = ((prezzo * 40) / 100);

    } else {
        sconto = 0;
    }

    prezzo = prezzo - sconto;
    prezzo = prezzo.toFixed(2);
    console.log(prezzo);
    console.log(`il prezzo del biglietto è di: ${prezzo} €`)


    // CREAZIONE DEL BIGLIETTO ASSOCIATO AI VALORI DEL SUBMIT

    // **Logica per assegnare la classe dell'offerta in base ai km e assegnazione della carrozza**
    let offertaTreno;
    let numeroCarrozza;
    if (km < 100) {
        offertaTreno = "Classe Standard";
        numeroCarrozza = Math.ceil(Math.random() * 4);
    } else if (km >= 100 && km <= 200) {
        offertaTreno = "Classe Superior";
        numeroCarrozza = Math.ceil(Math.random() * 3) + 4;
    } else {
        offertaTreno = "Super Classe";
        numeroCarrozza = Math.ceil(Math.random() * 3) + 7;
    }



    let nameBiglietto = document.getElementById('name-biglietto');
    let offertaBiglietto = document.getElementById('offerta-biglietto')
    let carrozzaBiglietto = document.getElementById('carrozza-biglietto');
    let codiceBiglietto = document.getElementById('codice-biglietto');
    let prezzoBiglietto = document.getElementById('prezzo-biglietto');

    nameBiglietto.innerHTML = dati;
    offertaBiglietto.innerHTML = offertaTreno;
    carrozzaBiglietto.innerHTML = numeroCarrozza;
    codiceBiglietto.innerHTML = codiceCasuale;
    prezzoBiglietto.innerHTML = prezzo;


    let elementBiglietto = document.getElementById('biglietto');
    elementBiglietto.style.display = 'block';

});

// function creaBiglietto(){
//     let elementBiglietto = document.getElementById('biglietto');
//     elementBiglietto.style.display = 'block';
// }