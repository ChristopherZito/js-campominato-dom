// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro 
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l’utente clicca su ogni cella:
// se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
// altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.


//input container
const easy = document.getElementById("cont-easy");
const medium = document.getElementById("cont-medium");
const hard = document.getElementById("cont-hard");

//input livelli
const livEasy = document.getElementById("easy");
const livMedium = document.getElementById("medium");
const livHard = document.getElementById("hard");


//cambio della schermata in base al livello
//livello easy
livEasy.addEventListener("click",
    function(){
        easy.classList.add("levelSelected")
        easy.classList.remove("levelNull")
        medium.classList.remove("levelSelected")
        medium.classList.add("levelNull")
        hard.classList.remove("levelSelected")
        hard.classList.add("levelNull") 


        //RESET DEL LIVELLO
        // cell.classList.remove("clicked");
    }
);
//livello medium
livMedium.addEventListener("click",
    function(){
        medium.classList.add("levelSelected")
        medium.classList.remove("levelNull")
        hard.classList.remove("levelSelected")
        hard.classList.add("levelNull")
        easy.classList.remove("levelSelected")
        easy.classList.add("levelNull") 


        //RESET DEL LIVELLO
        // cell.classList.remove("clicked");
    }
);
//livello hard
livHard.addEventListener("click",
    function(){
        hard.classList.add("levelSelected")
        hard.classList.remove("levelNull")
        medium.classList.remove("levelSelected")
        medium.classList.add("levelNull")
        easy.classList.remove("levelSelected")
        easy.classList.add("levelNull")


        //RESET DEL LIVELLO
        // cell.classList.remove("clicked");
    }
);
//generare array con i numeri bomba
let bombeasy = [];
let bombmedium = [];
let bombhard = [];
//generare un array con i numeri bomba
bombeasy = bombnumgenerator(100);
console.log("numeri bomba generati in easy: " + bombeasy);

//generare un array con i numeri bomba
bombmedium = bombnumgenerator(81);
console.log("numeri bomba generati in medium: " + bombmedium);

//generare un array con i numeri bomba
bombhard = bombnumgenerator(49);
console.log("numeri bomba generati in hard: " + bombhard);


let cellOut;
//generazione celle nel container EASY
for(let i = 1; i <= 100; i++){
    cellOut = cellgenerator();
    easy.append(cellOut);
    cellOut.append(i) ;
    //classificare i numeri bomba 
    let verificaBomba = bombeasy.includes(i);
    if(verificaBomba == true){
        cellOut.classList.add("bomb")
    };
}

//generazione celle nel container MEDIUM
for(let i = 1; i <= 81; i++){
    cellOut = cellgenerator();
    medium.append(cellOut);
    cellOut.append(i); 
   //classificare i numeri bomba 
   let verificaBomba = bombmedium.includes(i)
   if(verificaBomba == true){
       cellOut.classList.add("bomb")
   }
};

//generazione celle nel container HARD
for(let i = 1; i <= 49; i++){
    cellOut = cellgenerator();
    hard.append(cellOut);
    cellOut.append(i);   
    //classificare i numeri bomba 
    let verificaBomba = bombhard.includes(i)
    if(verificaBomba == true){
        cellOut.classList.add("bomb")
    }
};


//funzioni
//generazione celle di gioco
function cellgenerator(){
    let cell = document.createElement("div")
    cell.classList.add("cell")
    //selezionamento celle
    cell.addEventListener("click",
    function(){
        cell.classList.add("clicked");
        }
    )
    return cell;
}


//generazione senza ripetizione
function bombnumgenerator(livello){
    // creazione array
    const bomba = [];
    //creo 16 valori di BOMBE e li inserisco nell'array
    while(bomba.length < 16){
        //generazione numero
        const numBomba = Math.floor(Math.random() * livello) + 1;
        // console.log("numero generato = " + numBomba);
        //verifica con .includes
        let verifica = bomba.includes(numBomba)
        //push all'array
        if(verifica == false){
            bomba.push(numBomba);
        }
    }
   
    return bomba;
}