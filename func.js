console.clear();
console.log('Labas');
// 1 uzd. Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra atspausdinamas su console.log;

const a = 'laba';
function text(a) {
   return a;
}

console.log('>',a);

// 2 uzd. Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, įterpiamas atspausdinamas su console.log, o antrasis kiek kartų spausdinimas atliekamas. Rašydami šią funkciją remkitės pirmame uždavinyje parašytą funkciją;

// 4 uzd. Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save)

const funkcija4 = number => {
    let answer = 0;

    for(let i = 2; i < number; i++) {
        if (number % i === 0) {
            answer++
        }
        console.log('>>',answer);
    }
    return answer;
}

console.log('>>>',funkcija4(8));

// 7 uzd. Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, kurio visi, išskyrus paskutinį, elementai yra atsitiktiniai skaičiai nuo 0 iki 10, o paskutinis masyvas, kuris generuojamas pagal tokią pat salygą kaip ir pirmasis masyvas. Viską pakartokite atsitiktinį nuo 10 iki 30  kiekį kartų. Paskutinio masyvo paskutinis elementas yra lygus 0;



const funkcija5 = () => {
    // const array = [...Array(100)].map(n => Math.floor(Math.random() * (77 - 33 + 1) + 33));
    let array = [];
    for (let i = 0; i < 100; i++) {
        array.push(Math.floor(Math.random() * (77 - 33 + 1) + 33))

    }

    return array;
}
console.log('>>>>',funkcija5());