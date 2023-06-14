console.clear();

//Math.floor(Math.random() * (max - min + 1) + min);

console.log('===== 1 uzduotis');
//sukurti masyva, kurio ilgis yra 10 - 30
//reiksmes nuo 1 iki 10 imtinai

let wallet = [];
const masyvoIlgis = Math.floor(Math.random() * (30 - 10 + 1) + 10);
console.log(masyvoIlgis);
for (let i = 0; i < masyvoIlgis; i++) {
    wallet.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
}
console.log(wallet);

console.log('===== 2 uzduotis');
let sum = 0;
for (let index = 0; index < masyvoIlgis; index++) {
    sum += wallet[index]
}
console.log(sum);

console.log('===== 3 uzduotis');
let sumMoreThan2 = 0;
for (let index = 0; index < masyvoIlgis; index++) {
    if (wallet[index] > 2) {
        sumMoreThan2 += wallet[index]
    }
}
console.log(sumMoreThan2);

console.log('===== 4 uzduotis');

const newWallet = wallet.map(n => n <= 2 ? n = 0 : n = n);
console.log('0 in<3: ', newWallet);


console.log('===== 5 uzduotis');

let bignumber = 0;
newWallet.filter(n => n > bignumber ? bignumber = n : bignumber = bignumber);
console.log('max: ', bignumber);

let count = newWallet.filter(n => n === bignumber);

console.log('count: ', count.length);

console.log('===== 6 uzduotis');

const walletIndex = newWallet.map((n, i) => n === 0 ? n = i : n = n);
console.log('index in 0: ', walletIndex);


console.log('===== 7 uzduotis');

// ismatuoti masyvo ilgi
// jei jis trumpesnis nei 30, prideti likusius
// ju reiksmes 0-10 random

const length30 = [...Array(30 - wallet.length)].map(n => Math.floor(Math.random() * 11));
wallet.push(...length30);

console.log('length 30: ', wallet);

console.log('===== 8 uzduotis');

// sukurti 2 masyvus is wallet
// 2 ir maziau
// 3 ir daugiau

const moreThan2 = wallet.filter(n => n > 2)
console.log('Popieriniai: ', moreThan2);

const lessThan3 = wallet.filter(n => n < 3)
console.log('Monetos: ', lessThan3);

console.log('===== 9 uzduotis');

// sukurti masyva is 2 elementu
// 1 is 8 uzd monetos
// 2 is8 uzd popieriniai

const wallet9 = [];
wallet9.push(lessThan3, moreThan2)

console.log('Skyreliai: ', wallet9);

console.log('===== 10 uzduotis');

wallet9.push(['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'])

console.log('3 skyreliai: ', wallet9);

console.log('===== 11 uzduotis');

console.log('not sorted', wallet9[2]);

// wallet9[2].sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
//     return 0;
// });
wallet9[2].sort((a, b) => a.localeCompare(b));
console.log('sorted cards', wallet9, wallet9[2]);

console.log('===== 12 uzduotis');

// cards skyrelio ilgis = 20
// generuoti atsitiktinai visa ar mastercard

let length14 = [...Array(14)]
length14 = length14.map(n => Math.floor(Math.random() * 2) === 0 ? 'MasterCard' : 'Visa');

wallet9[2].push(...length14)

console.log('added payment cards: ', wallet9, wallet9[2]);

console.log('===== 13 uzduotis');

const countVisa = wallet9[2].filter(n => n === 'Visa');
const countMC = wallet9[2].filter(n => n === 'MasterCard');

console.log(countVisa, countMC);

console.log(`Daugiau yra ${countVisa.length > countMC.length ? 'Visa' : countVisa.length === countMC.length ? 'nei vienų, nei kitų' : 'Mastercard'} kortelių`);

console.log('===== 14 uzduotis');

const length10 = [...Array(10)].map(n => Math.floor(Math.random() * (9999999999 - 1000000000) + 1000000000));

wallet9.push(length10)

console.log('Added lottery tickets: ', wallet9, wallet9[3]);

console.log('===== 15 uzduotis');

wallet9[3].sort((a, b) => b - a)

console.log('Sorted tickets: ', wallet9, wallet9[3]);

console.log('===== 16 uzduotis');

let add500 = [];
let help = 0;
let likutis = 0;

for (let i = 0; i < 500; i += Math.floor(Math.random() * (11 - 3) + 3)) {
    add500.push(i - help)
    help = i
}
add500.forEach(n => likutis += n);
likutis = 500 - likutis
add500.push(likutis)

console.log('500 pridejimas smulkiomis kupiuromis: ', add500);

wallet9[1].push(...add500);

console.log(wallet9, wallet9[1]);

console.log('===== 17 uzduotis');

// dalinasi is 777 be liekanos, laimingas

const luckyTickeds = wallet9[3].filter(n => (n % 777 === 0));
console.log(wallet9[3]);
console.log('Number of lucky tickets: ', luckyTickeds.length);

console.log('===== 18 uzduotis');

wallet9.push(['šuo', 'katė', 'automobilis', 'namas', 'kiemas']);

wallet9[4].sort((a, b) => a.length - b.length);

console.log(wallet9, wallet9[4]);