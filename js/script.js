let player_1_input = document.querySelector('.player_1_input')
let player_2_input = document.querySelector('.player_2_input')
let err = document.querySelector('.err')
let playerOne = document.querySelector('.player-1')
let playerTwo = document.querySelector('.player-2')
let playerNo = document.querySelector('.player-no')


// --------------Player one part----------

const handelSubmit = ()=>{
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