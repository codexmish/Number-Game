let player_1_input = document.querySelector('.player_1_input')
let player_2_input = document.querySelector('.player_2_input')
let player_3_input = document.querySelector('.player_3_input')
let err = document.querySelector('.err')
let playerOne = document.querySelector('.player-1')
let playerTwo = document.querySelector('.player-2')
let playerThree = document.querySelector('.player-3')
let playerNo = document.querySelector('.player-no')
let winner = document.querySelector('.winner')
let result = document.querySelector('.result')
let game = document.querySelector('#game')


// --------------Player one part----------

const handelPlayerOne = ()=>{
    if(!player_1_input.value){
        err.innerHTML = 'plase enter a value'
    }else if(player_1_input.value > 10 || player_1_input.value < 1 ){
        err.innerHTML = 'Enter a number between 1 and 10.'
    }else{
        err.innerHTML = ''
        playerOne.style = 'display:none'
        playerTwo.style = 'display:block'
        playerNo.innerHTML = 'Player-2'
    }
}


// --------------Player Two part----------


const handelPlayerTwo = ()=>{
    if(!player_2_input.value){
        err.innerHTML = 'plase enter a value'
    }else if(player_2_input.value > 10 || player_2_input.value < 1){
        err.innerHTML = 'Enter a number between 1 and 10.'
    }else if(player_1_input.value == player_2_input.value){
        winner.style = 'display:block'
        result.innerHTML = 'player 2 win'
        playerNo.style = 'display:none'
        game.style = 'display:none'
    }else{
        playerTwo.style = 'display:none'
        playerThree.style = 'display:block'
        playerNo.innerHTML = 'Player-3'
    }
}

// --------------Player Three part----------

const handelPlayerThree = ()=>{
    if(!player_3_input.value){
        err.innerHTML = 'plase enter a value'
    }else if(player_3_input.value > 10 || player_3_input.value < 1){
        err.innerHTML = 'Enter a number between 1 and 10.'
    }else if(player_1_input.value == player_3_input.value){
        winner.style = 'display:block'
        result.innerHTML = 'player 3 win'
        playerNo.style = 'display:none'
        game.style = 'display:none'
    }else{
        winner.style = 'display:block'
        playerNo.style = 'display:none'
        game.style = 'display:none'
        result.innerHTML = 'player 1 win'
    }
}