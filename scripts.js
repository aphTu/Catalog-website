/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
     */


//Geting the move id and putting them into a variable
const divMoveOne = document.getElementById("move_1");
const divMoveTwo = document.getElementById("move_2");
const divMoveThree = document.getElementById("move_3");
const divMoveFourth = document.getElementById("move_4");


//Sprite for the Pokemon
const BULBASAUR_PIC_URL = "../Catalog-website/Picture/bulbasaur.png";
const CHARMANDER_PIC_URL = "../Catalog-website/Picture/charmander.png";
const SQUIRTLE_PIC_URL = "../Catalog-website/Picture/squirtle.png";

// This is an list of pokemon objects

const pokemon = 
{
    bulbasaur: {
        id: 1,
        name: "bulbasaur",
        hp: 22,
        speed: 15,
        type: "grass",
        moves: [
            {
                name: "vine whip",
                base_dmg: 2,
                type: "grass",
                amt: 2
            },
            {
                name: "tackle",
                base_dmg: 1,
                type: "normal",
                amt: 4
            },
            {
                name: "razor leaf",
                base_dmg: 2,
                type: "grass",
                amt: 2
            },
            {
                name: "bullet seed",
                base_dmg: 2,
                type: "grass",
                amt: 2
            }
        ]
    },

    charmander: {   
        id: 4,
        name: "charmander",
        type: "fire",
        speed: 20,
        hp: 17,
        moves: [
            {
                name: "ember",
                base_dmg: 3,
                type: "fire",
                amt: 2
            },
            {
                name: "tackle",
                base_dmg: 2,
                type: "normal",
                amt: 4
            },
            {
                name: "scratch",
                base_dmg: 2,
                type: "normal",
                amt: 4,
            },
            {
                name: "fire fang",
                base_dmg: 3,
                type: "fire",
                amt: 2,
            }
        ]
    },

    squirtle: {
        id: 7,
        name: "squirtle",
        type: "water",
        speed: 25,
        hp: 20,
        moves: [
            {
                name: "water gun",
                base_dmg: 2,
                type: "water",
                amt: 2
            },
            {
                name: "tackle",
                base_dmg: 1,
                type: "normal",
                amt: 4
            },
            {
                name: "bubble",
                base_dmg: 2,
                type: "water",
                amt: 2
            },
    
            {
                name: "water pulse",
                base_dmg: 2,
                type: "water",
                amt: 2
            }
        ]
    }
}


//function assign a random pokemon chosen from the pokemon object
function randomize_player_pokemon(){
    const generated_value = Math.floor(Math.random()*9)
    if(generated_value <= 3){
        return pokemon.bulbasaur;
    } else if(generated_value >3 && generated_value <= 6){
        return pokemon.charmander;
    } else{
        return pokemon.squirtle;
    }
}

function npc(player){
    let give_pokemon;
        if(player.name === "bulbasaur"){
            const generated_value = Math.random();
            if(generated_value >= 0.5){
                return pokemon.charmander;
            } else {
                return pokemon.squirtle;
            }
        } else if(player.name === "charmander") {
            const generated_value = Math.random();
            if(generated_value >= 0.5){
                return pokemon.squirtle;
            } else {
                return pokemon.bulbasaur;
            } 
        } else {
            const generated_value = Math.random();
            if(generated_value >=0.5){
                return pokemon.bulbasaur;
            } else {
                return pokemon.charmander;
            } 
        }
}

//array consist of the divs of move
const div_moves= [divMoveOne, divMoveTwo, divMoveThree, divMoveFourth];

//setting up the move
function set_up_move(player){
    //for loops to input all the data from pokemon object into the divs
    for(let i = 0; i<4;i++){
        const move_name = player.moves[i].name;
        const move_type = player.moves[i].type;
        const move_dmg = player.moves[i].base_dmg;
        const move_amt = player.moves[i].amt;
        //put the respective move name into their divs
        div_moves[i].getElementsByTagName("h1")[0].innerText =move_name;

        //changing the background of the move depending on their typing
        if(move_type == "fire"){
            div_moves[i].style.backgroundColor = '#8B0000';
        } else if(move_type === "water"){
            div_moves[i].style.backgroundColor = "#00008B";
        } else if(move_type === "grass"){
            div_moves[i].style.backgroundColor = "#006400";
        } else {
            div_moves[i].style.backgroundColor = "#B0B3B8";
            div_moves[i].getElementsByTagName("p")[0].style.color = "black";
            div_moves[i].getElementsByTagName("h1")[0].style.color = "black";
          
        }
        
        //putting the dmg the moves does
        div_moves[i].getElementsByTagName("p")[0].innerText = `DMG: ${move_dmg}`;

        //putting how many times the user can use that move
        div_moves[i].getElementsByTagName("p")[1].innerText = `AMT: ${move_amt}`;
    }
}

function set_up_player_pokemon(player){
    const img = document.getElementById("pokemon-sprite");
    const pokemon_div = document.getElementById("player_pokemon");
    console.log(document.getElementById("hp_player").innerText);
    document.getElementById("hp_player").innerText = `HP: ${player.hp}`;   

    pokemon_div.getElementsByTagName("h2")[0].innerText = player.name;


    let chosen_poke_image;
    if(player.name === "bulbasaur"){
        chosen_poke_image = BULBASAUR_PIC_URL;
    } else if(player.name === "charmander"){
        chosen_poke_image = CHARMANDER_PIC_URL;
    } else {
        chosen_poke_image = SQUIRTLE_PIC_URL;
    }

    img.src = chosen_poke_image;
}

function set_up_npc(npc){
    const img = document.getElementById("npc_pokemon_sprite");
    const pokemon_div = document.getElementById("npc_pokemon");
    pokemon_div.getElementsByTagName("p")[0].innerText = `HP: ${npc.hp}`;

    pokemon_div.getElementsByTagName("h2")[0].innerText = npc.name;


    let chosen_poke_image;
    if(npc.name === "bulbasaur"){
        chosen_poke_image = BULBASAUR_PIC_URL;
    } else if(npc.name === "charmander"){
        chosen_poke_image = CHARMANDER_PIC_URL;
    } else {
        chosen_poke_image = SQUIRTLE_PIC_URL;
    }

    img.src = chosen_poke_image;
}

let player_main = randomize_player_pokemon();
let npc_main = npc(player_main);
set_up_move(player_main);
set_up_player_pokemon(player_main);
set_up_npc(npc_main);
console.log(player_main);
console.log(npc_main);

function type_advantage(attacker, receiver, number){
    const receiver_type = receiver.type;
    const attacker_move_type = attacker.moves[number].type;
    
    const debug = true;
    if(debug){
        console.log(`Reiceiver Type :${receiver_type}`);
        console.log(`attacker_move_type: ${attacker_move_type}`);
    }
    //2 is super effective, 0 is not effective, and 1 is neutral
    // console.log(player.moves[0].base_dmg);
    if(attacker_move_type === "fire"){
        if(receiver_type === "grass"){
            return 2;
        } else if(receiver_type === "water"){
            return 0;
        } else {
            return 1;
        }
    } else if(attacker_move_type === "water"){
        if(receiver_type === "fire"){
            return 2;
        } else if(receiver_type === "grass"){
            return 0;
        } else {
            return 1;
        }
    } else if(attacker_move_type === "grass"){
        if(receiver_type === "water"){
            return 2;
        } else if(receiver_type === "fire"){
            return 0;
        } else {
            return 1;
        }
    }
}

function randomize_npc_move(){
    const generated_value = Math.floor(Math.random()* 20 +1);

    if(generated_value <=5){
        return 0;
    } else if(generated_value >5 && generated_value <=10){
        return 1;
    } else if (generated_value > 10 && generated_value <=15){
        return 2;
    } else {
        return 3;
    }
}

function battle_calculation(player_pokemon, npc_pokemon,number){
    const npc_move = randomize_npc_move();
    if(player_pokemon.speed > npc_pokemon.speed){
        const user_effective =  type_advantage(player_pokemon,npc_pokemon, number);
        if(user_effective === 2){
            npc_main.hp= npc_pokemon.hp - (player_pokemon.moves[number].base_dmg +1);
            console.log(`Super Effective: Enemy Hp: ${npc_main.hp}`);

        } else if (user_effective ===0){
            npc_main.hp= npc_pokemon.hp - (player_pokemon.moves[number].base_dmg -1);
            console.log(`Not Effective: Enemy Hp: ${npc_main.hp}`);

        } else { 
            npc_main.hp -= player_pokemon.moves[number].base_dmg;
            console.log(`Neutral: Enemy Hp: ${npc_main.hp}`);

        }

        const npc_effective = type_advantage(npc_pokemon,player_pokemon,npc_move);
        if(npc_effective === 2){
            player_main.hp = player_pokemon.hp - (npc_pokemon.moves[npc_move].base_dmg + 1);
            console.log(`Super Effective: Player Hp: ${player_main.hp}`);
        } else if(npc_effective === 0){
            player_main.hp = player_pokemon.hp - (npc_pokemon.moves[npc_move].base_dmg - 1);
            console.log(`Not Effective: Player Hp: ${player_main.hp}`);
        } else {
            player_main.hp = player_pokemon.hp - npc_pokemon.moves[npc_move].base_dmg;
            console.log(`Neutral: Player Hp: ${player_main.hp}`);
        }
    } else {
        const npc_effective = type_advantage(npc_pokemon,player_pokemon,npc_move);
        if(npc_effective === 2){
            player_main.hp = player_pokemon.hp - (npc_pokemon.moves[npc_move].base_dmg + 1);
            console.log(`Super Effective: Player Hp: ${player_main.hp}`);
        } else if(npc_effective === 0){
            player_main.hp = player_pokemon.hp - (npc_pokemon.moves[npc_move].base_dmg - 1);
            console.log(`Not Effective: Player Hp: ${player_main.hp}`);
        } else {
            player_main.hp = player_pokemon.hp - npc_pokemon.moves[npc_move].base_dmg;
            console.log(`Neutral: Player Hp: ${player_main.hp}`);
        }

        const user_effective =  type_advantage(player_pokemon,npc_pokemon, number);
        if(user_effective === 2){
            npc_main.hp= npc_pokemon.hp - (player_pokemon.moves[number].base_dmg + 1);
            console.log(`Super Effective: Enemy Hp: ${npc_main.hp}`);

        } else if (user_effective ===0){
            npc_main.hp= npc_pokemon.hp - (player_pokemon.moves[number].base_dmg -1);
            console.log(`Not Effective: Enemy Hp: ${npc_main.hp}`);

        } else { 
            npc_main.hp -= player_pokemon.moves[number].base_dmg;
            console.log(`Neutral: Enemy Hp: ${npc_main.hp}`);

        }    
    }

    if(npc_main.hp <=0){
        npc_main.hp = 0;
    } else if (player_main.hp <= 0){
        player_main.hp = 0;
    }
}

function buttonMove(number){
    console.log(`Move ${number} has been click`);
    battle_calculation(player_main, npc_main, number);
    player_main.moves[number].amt--;
    updateScreen(player_main,npc_main,number);
}

function updateScreen(player,npc,number){
    set_up_player_pokemon(player);
    set_up_npc(npc);
    set_up_move(player);
    
    if(player.moves[number].amt <= 0){
        div_moves[number].disabled = true;
    }

    if(npc.hp <= 0){
        alert("Congratulations! You Won!");
        document.getElementById("npc_pokemon").style.display = "none";
        document.getElementsByClassName("title").innerText = "You Won";
    } else if (player.hp <=0) {
        alert("Unfortunately. You lost, reload page to try again");
        document.getElementById("player_pokemon").style.display = "none";
        document.getElementsByClassName("title").innerText = "You Lost";
    }
}
// console.log(pokemon.bulbasaur);
// console.log(type_advantage(player_poke.moves[0],npc_poke));



function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
