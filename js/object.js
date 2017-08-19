'use strict';

var osoba = {
    imie: "Wojtek", //właściwość obiektu
    wzrost: 181,
    przedstawOsobe: function() {
        console.log("Cześć jestem: " + this.imie + ", mam " + this.wzrost + " cm wzrostu"); // odwołanie do imienia znajdującego się w danym obiekcie
    }
    }

console.log(osoba.imie);
console.log(osoba.wzrost);

osoba.imie = "Adam"; //zmiana wartości dla obiektu

console.log(osoba["imie"]);
console.log(osoba["wzrost"]);

osoba.przedstawOsobe(); //wywołanie funkcji przedstawOsobe
console.log();