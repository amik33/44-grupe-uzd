console.clear();

console.log('1 uzd. Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai)');

let wallet = [];
const arrayLength = Math.floor(Math.random() * (30 - 10 + 1) + 10);
console.log('>', arrayLength);

for (let i = 0; i < arrayLength; i++) {
    wallet.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
}
console.log('>>', wallet);

console.log('2 uzd. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą');

let sum = 0;

for(let i = 0; i < arrayLength; i++) {
    sum += wallet[i];
}

console.log('>>>', sum);

console.log('3 uzd. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;');

let sumMoreThan2 = 0;

for(let i = 0; i < arrayLength; i++) {
    if(wallet[i] > 2)
    sumMoreThan2 += wallet[i];
}

console.log('>>>>', sumMoreThan2);

console.log('4 uzd. Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio');

for (let i = 0; i < arrayLength; i++){
    if(wallet[i] <= 2)
    wallet[i] = 0;
}

console.log ('>>>>>', wallet);

console.log('5 uzd. Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;');

let biggestCoin = 0;
let biggestCoinCount = 0;
for (let i = 0; i < arrayLength; i++){
    if(wallet[i] > biggestCoin)
    biggestCoin = wallet[i]; 
}
for (let i = 0; i < arrayLength; i++){
    if(wallet[i] === biggestCoin)
    biggestCoinCount ++; 
}

console.log('>>>>>>', `Didziausias skaicius `+ biggestCoin + `, kartojasi ` +  biggestCoinCount + ' kartus');

console.log('6 uzd. Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes');

for (let i = 0; i < arrayLength; i++){
    if(wallet[i] === 0);
    wallet[i] = i + 1;
}
console.log('>>>>>>>', wallet);

console.log('7 uzd. Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30');

