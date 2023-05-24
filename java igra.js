var opcije = ["kamen","skare","papir"];

var kompjuter = "";

var brojacIgrac=0;
var brojacKomp=0;

var igrac = document.getElementById("igrac");
var komp = document.getElementById("komp");

var kamen = document.getElementById("kamen");
var skare = document.getElementById("skare");
var papir = document.getElementById("papir");

var rezultat = document.getElementById("rezultat");

function dajRandom(){
    var broj = Math.floor(Math.random()*opcije.length);
    kompjuter = opcije[broj];
}

dajRandom(); //pozvat funkciju kako bi uzelu jednu opciju

kamen.addEventListener('click',function(){
    dajRandom();
    if (kompjuter==="kamen"){
        rezultat.textContent="Ne rjeseno";
        /* console.log("Ne rjeseno");*/
        console.log("Kompjuter je odabrao" + " " + kompjuter); 
    } else if (kompjuter==="skare"){ 
        rezultat.textContent="Moja pobjeda";
        brojacIgrac ++;
        igrac.textContent = brojacIgrac;
        /* console.log("Moja pobjeda"); */
        console.log("Kompjuter je odabrao" + " " + kompjuter);
    } else {
        rezultat.textContent="Komp pobjeđuje";
        brojacKomp ++;
        komp.textContent = brojacKomp;
        // console.log ("Komp pobjeđuje");
        console.log("Kompjuter je odabrao" + " " + kompjuter);
    }
}) 



skare.addEventListener('click',function(){
    dajRandom();
    if (kompjuter==="kamen"){
        rezultat.textContent="Komp pobjeđuje";
        brojacKomp ++;
        komp.textContent =brojacKomp;
        // console.log("Komp pobjeđuje");
        console.log("Kompjuter je odabrao:" + " " + kompjuter);
    } else if (kompjuter==="skare"){ 
        rezultat.textContent="Ne rjeseno";
        //console.log("Ne rjeseno");
        console.log("Kompjuter je odabrao:" + " " + kompjuter);
    } else {
        rezultat.textContent="Moja pobjeda";
        brojacIgrac ++;
        igrac.textContent = brojacIgrac;
        //console.log ("Moja pobjeda");
        console.log("Kompjuter je odabrao:" + " " + kompjuter);
    }
})



papir.addEventListener('click',function(){
    dajRandom();
    if (kompjuter==="kamen"){
        rezultat.textContent="Moja pobjeda";
        brojacIgrac ++;
        igrac.textContent = brojacIgrac;
        //console.log("Moja pobjeda");
        console.log("Kompjuter je odabrao:" + " " + kompjuter);
    } else if (kompjuter==="skare"){ 
        rezultat.textContent="Komp pobjeđuje";
        brojacKomp ++;
        komp.textContent = brojacKomp;
        //console.log("Komp pobjeđuje");
        console.log("Kompjuter je odabrao:" + " " + kompjuter);
    } else {
        rezultat.textContent="Ne rjeseno";
        //console.log ("Ne rjeseno");
        console.log("Kompjuter je odabrao:" + " " + kompjuter);
    }
})




    