import { words } from './words.js';

const klaviatuur_rida1_list = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Ü", "Õ"]
const klaviatuur_rida2_list = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ö", "Ä"]
const klaviatuur_rida3_list = ["ENTER", "Z", "C", "V", "B", "N", "M", "Š", "Ž", "KUSTUTA"]

var random_s6na = words[Math.floor(Math.random() * words.length)];
let hetkene_rida = 1;
let järg = 1;
console.log(random_s6na)

//kastid
let katsed = document.getElementById('katsed')
for (let i = 1; i <= 7; i++) {
    let nimi = "katse" + i.toString()
    let katse = document.createElement('div');
    katse.id = nimi;
    for (let j = 1; j <= 5; j++) {
        let kasti_nimi = "kast" + i.toString() + j.toString();
        let kast = document.createElement('p');
        kast.id = kasti_nimi;
        katse.appendChild(kast);
    }
    katsed.appendChild(katse)
}

lisa_t2ht = (vajutatud_nupp) => {
    let aktiivne_kast = document.getElementById("kast" + hetkene_rida.toString() + järg.toString());
    aktiivne_kast.textContent = vajutatud_nupp;
    järg++;
}

eemalda_t2ht = () => {
    järg--;

    let aktiivne_kast = document.getElementById("kast" + hetkene_rida.toString() + järg.toString());
    aktiivne_kast.textContent = "";
}


// Klaviatuuri lisamine

let klaviatuuri_rida1 = document.getElementById("kt1");
for (let i = 0; i < klaviatuur_rida1_list.length; i++) {
    let nupp = document.createElement('button')
    nupp.textContent = klaviatuur_rida1_list[i]
    nupp.addEventListener('click', () => {
        if (järg <= 5) {
            nupp.style.backgroundColor = "#333333";
            nupp.style.borderColor = "#333333";
            nupp.style.color = "#6D6D6D";
            lisa_t2ht(nupp.textContent)

            console.log(nupp.textContent);
        }
    })
    klaviatuuri_rida1.appendChild(nupp)
}

let klaviatuuri_rida2 = document.getElementById("kt2");
for (let i = 0; i < klaviatuur_rida2_list.length; i++) {
    let nupp = document.createElement('button')
    nupp.textContent = klaviatuur_rida2_list[i]
    nupp.addEventListener('click', () => {
        if (järg <= 5) {
            nupp.style.backgroundColor = "#333333";
            nupp.style.borderColor = "#333333";
            nupp.style.color = "#6D6D6D";
            lisa_t2ht(nupp.textContent)

            console.log(nupp.textContent);
        }

    })
    klaviatuuri_rida2.appendChild(nupp)
}

let klaviatuuri_rida3 = document.getElementById("kt3");
for (let i = 0; i < klaviatuur_rida3_list.length; i++) {
    let nupp = document.createElement('button')
    nupp.textContent = klaviatuur_rida3_list[i]
    nupp.addEventListener('click', () => {
        if (nupp.textContent == "KUSTUTA") {
            if (järg > 1) {
                eemalda_t2ht();
                console.log("Okei");
            }


        } else if (nupp.textContent == "ENTER") {
            console.log(järg);
            let kast1 = document.getElementById("kast" + hetkene_rida.toString() + "1");
            let kast2 = document.getElementById("kast" + hetkene_rida.toString() + "2");
            let kast3 = document.getElementById("kast" + hetkene_rida.toString() + "3");
            let kast4 = document.getElementById("kast" + hetkene_rida.toString() + "4");
            let kast5 = document.getElementById("kast" + hetkene_rida.toString() + "5");

            let yhine_s6na = kast1.textContent.toLocaleLowerCase() + kast2.textContent.toLocaleLowerCase() + kast3.textContent.toLocaleLowerCase() + kast4.textContent.toLocaleLowerCase() + kast5.textContent.toLocaleLowerCase();
            console.log(yhine_s6na)
            console.log(words.includes(yhine_s6na))
            if (järg == 6 && words.includes(yhine_s6na) == true) {
                if (yhine_s6na.charAt(0) == random_s6na.charAt(0)) {
                    kast1.style.backgroundColor = "green";
                } else if (random_s6na.includes(yhine_s6na.charAt(0))) {
                    kast1.style.backgroundColor = "#edda2d"
                }

                if (yhine_s6na.charAt(1) == random_s6na.charAt(1)) {
                    kast2.style.backgroundColor = "green";
                } else if (random_s6na.includes(yhine_s6na.charAt(1))) {
                    kast2.style.backgroundColor = "#edda2d"
                }

                if (yhine_s6na.charAt(2) == random_s6na.charAt(2)) {
                    kast3.style.backgroundColor = "green";
                } else if (random_s6na.includes(yhine_s6na.charAt(2))) {
                    kast3.style.backgroundColor = "#edda2d"
                }

                if (yhine_s6na.charAt(3) == random_s6na.charAt(3)) {
                    kast4.style.backgroundColor = "green";
                } else if (random_s6na.includes(yhine_s6na.charAt(3))) {
                    kast4.style.backgroundColor = "#edda2d"
                }

                if (yhine_s6na.charAt(4) == random_s6na.charAt(4)) {
                    kast5.style.backgroundColor = "green";
                } else if (random_s6na.includes(yhine_s6na.charAt(4))) {
                    kast5.style.backgroundColor = "#edda2d"
                }

                console.log(hetkene_rida, järg)
                järg = 1;
                hetkene_rida++;

            }
        } else {
            if (järg <= 5) {
                nupp.style.backgroundColor = "#333333";
                nupp.style.borderColor = "#333333";
                nupp.style.color = "#6D6D6D";
                lisa_t2ht(nupp.textContent)

                console.log(nupp.textContent);
            }
        }
    })
    klaviatuuri_rida3.appendChild(nupp)
}

